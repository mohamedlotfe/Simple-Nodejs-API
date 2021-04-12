const Customer = require('./customer');
var ObjectId = require('mongoose').Types.ObjectId;


module.exports = {
    findOne: (_id) => {
        return new Promise(async (resolve, reject) => {
            try {
                const customer = await Customer.findOne({ _id });
                return resolve(customer);
            } catch (error) {
                reject(error);
            }

        })
    },
    findAll: () => {
        return new Promise(async (resolve, reject) => {
            try {
                const customers = await Customer.find();
                return resolve(customers);
            } catch (error) {
                reject(error);
            }

        })
    },
    create: (customerObj) => {
        return new Promise(async (resolve, reject) => {
            try {
                customerObj = new Customer(customerObj);
                const customer = await Customer.create(customerObj);
                return resolve(customer)

            } catch (error) {
                reject(error)
            }
        });
    },
    update: (id, newValues) => {
        return new Promise(async (resolve, reject) => {
            try {
                const customer = await Customer.findOne({ _id: id })
                if (!customer) reject({ error: 'User Not Found' })

                customer.name = newValues.name ? newValues.name : customer.name;
                customer.city = newValues.city ? newValues.city : customer.city;
                customer.product_id = newValues.product_id ? newValues.product_id : customer.product_id;

                await customer.save()
                return resolve(customer)

            } catch (error) {
                reject({ error })
            }
        });
    },
    delete: (id) => {
        return new Promise(async (resolve, reject) => {
            try {
                const customer = await Customer.deleteOne({ _id: id })
                return resolve(customer)

            } catch (error) {
                reject({ error })
            }
        });
    },
   
}