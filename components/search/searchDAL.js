const Product = require('../product/product');
const Customer = require('../customer/customer');
const Company = require('../company/company');


module.exports = {
    findAll: ($match, $project = {}) => {
        return new Promise(async (resolve, reject) => {
            try {
                let aggregateQuery = [
                    {
                        $lookup: { from: "product", localField: "product_id", foreignField: "_id", as: "product" }
                    },
                    {
                        $unwind: { "path": "$product", "preserveNullAndEmptyArrays": true }
                    },
                    {
                        $lookup: { from: "company", localField: "product.company_id", foreignField: "_id", as: "company" }
                    },
                    {
                        $unwind: { "path": "$company", "preserveNullAndEmptyArrays": true }
                    }
                ]
                if (Object.keys($match).length > 0) aggregateQuery.push({ $match });
                if (Object.keys($project).length > 0) aggregateQuery.push({ $project });

                Customer.aggregate(aggregateQuery).exec()
                    .then(customers => resolve(customers))
                    .catch(error => reject(error))

            } catch (error) {
                reject(error);
            }

        })
    },
    findByDetails: () => {
        return new Promise((resolve, reject) => {
            try {
                Customer.aggregate([
                    {
                        $lookup: {
                            from: "product",
                            localField: "product_id",
                            foreignField: "_id",
                            as: "product"
                        }
                    },
                    { "$unwind": { "path": "$product", "preserveNullAndEmptyArrays": true } },
                    {
                        $lookup:
                        {
                            from: "company",
                            localField: "product.company_id",
                            foreignField: "_id",
                            as: "company"
                        }
                    },
                    { "$unwind": { "path": "$company", "preserveNullAndEmptyArrays": true } }
                ]).exec()
                    .then(customers => resolve(customers))
                    .catch(error => reject(error))

            } catch (error) {
                reject(error)
            }
        });
    }
}