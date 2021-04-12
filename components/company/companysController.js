
const CompanyDAL = require('./companysDAL');
const { validateCompany } = require('../../helper/helpers');
module.exports = {
    getCompanys: async () => {
        try {
            let results = await CompanyDAL.findAll();
            return ({ error: null, results });
        } catch (error) {
            return ({ error: error, results: null })
        }

    },
    getCompanyById: async (id) => {
        try {
            if (!id) return ({ error: "Missing Input Data!!" })

            let results = await CompanyDAL.findOne(id);
            return ({ error: null, results });
        } catch (error) {
            return ({ error: error, results: null })
        }

    },
    addCompany: async (company = validateCompany()) => {
        try {
            if (!company) return ({ error: "Missing Input Data!!" })

            let results = await CompanyDAL.create(company);
            return ({ error: null, results });
        } catch (error) {
            return ({ error: error, results: null })
        }
    },
    updateCompany: async (id = null, company) => {
        try {
            if (!id) return ({ error: "Missing Input Data!!" })

            let results = await CompanyDAL.update(id, company);
            return ({ error: null, results });
        } catch (error) {
            return ({ error: error, results: null })
        }
    }
    ,
    deleteCompany: async (id) => {
        try {
            if (!id) return ({ error: "Missing Input Data!!" })

            let results = await CompanyDAL.delete(id);
            return ({ error: null, results });
        } catch (error) {
            return ({ error: error, results: null })
        }
    }

}
