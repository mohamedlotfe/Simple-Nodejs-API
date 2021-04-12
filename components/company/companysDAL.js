const Company = require('./company');


module.exports = {
    findOne: (_id) => {
        return new Promise(async (resolve, reject) => {
            try {
                const company = await Company.findOne({ _id });
                return resolve(company);
            } catch (error) {
                reject(error);
            }

        })
    },
    findAll: () => {
        return new Promise(async (resolve, reject) => {
            try {
                const companys = await Company.find();
                return resolve(companys);
            } catch (error) {
                reject(error);
            }

        })
    },
    create: (companyObj) => {
        return new Promise(async (resolve, reject) => {
            try {
                companyObj = new Company(companyObj);
                const company = await Company.create(companyObj);
                return resolve(company)

            } catch (error) {
                reject(error)
            }
        });
    },
    update: (id, newValues) => {
        return new Promise(async (resolve, reject) => {
            try {
                const company = await Company.findOne({ _id: id })
                if (!company) reject({ error: 'User Not Found' })

                company.name = newValues.name ? newValues.name : company.name;
                company.city = newValues.status ? newValues.status : company.status;

                await company.save()
                return resolve(company)

            } catch (error) {
                reject({ error })
            }
        });
    },
    delete: (id) => {
        return new Promise(async (resolve, reject) => {
            try {
                const company = await Company.deleteOne({ _id: id })
                return resolve(company)

            } catch (error) {
                reject({ error })
            }
        });
    }
}