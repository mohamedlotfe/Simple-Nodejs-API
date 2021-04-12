
const customersDAL = require('./customersDAL');
const { validateCustomer } = require('../../helper/helpers');
module.exports = {
    getCustomers: async () => {
        try {
            let results = await customersDAL.findAll();
            return ({ error: null, results });
        } catch (error) {
            return ({ error: error, results: null })
        }

    },
    getCustomerById: async (id) => {
        try {
            if (!id) return ({ error: "Missing Input Data!!" })

            let results = await customersDAL.findOne(id);
            return ({ error: null, results });
        } catch (error) {
            return ({ error: error, results: null })
        }

    },
    addCustomer: async (customer = validateCustomer()) => {
        try {
            if (!customer) return ({ error: "Missing Input Data!!" })

            let results = await customersDAL.create(customer);
            return ({ error: null, results });
        } catch (error) {
            return ({ error: error, results: null })
        }
    },
    updateCustomer: async (id = null, customer) => {
        try {
            if (!id) return ({ error: "Missing Input Data!!" })

            let results = await customersDAL.update(id, customer);
            return ({ error: null, results });
        } catch (error) {
            return ({ error: error, results: null })
        }
    }
    ,
    deleteCustomer: async (id) => {
        try {
            if (!id) return ({ error: "Missing Input Data!!" })

            let results = await customersDAL.delete(id);
            return ({ error: null, results });
        } catch (error) {
            return ({ error: error, customer: null })
        }
    }

}
