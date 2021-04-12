
const searchDAL = require('./searchDAL');
module.exports = {
    searchwithCity: async (searchkey = "", searchValue = "", selectionList = []) => {
        try {

            let $match = {}, $project = {};
            if (searchkey && searchValue) {
                if (searchkey !== "city") searchkey = searchkey + ".name"

                $match[searchkey] = { $in: [new RegExp(searchValue, 'i')] }
            }
            selectionList.forEach(item => $project[item] = 1)

            let results = await searchDAL.findAll($match, $project);
            return ({ error: null, results });
        } catch (error) {
            return ({ error: error.message, results: null })
        }

    },
    search: async (searchkey, matchList) => {
        try {

            let $match = {};
            if (searchkey && matchList.length !== 0) {

                if (searchkey === "customer") searchkey = "name";
                else searchkey = searchkey + ".name"

                $match[searchkey] = { $in: [...matchList.map(value => new RegExp(value,'i'))] }
            }

            let results = await searchDAL.findAll($match);
            return ({ error: null, results });
        } catch (error) {
            return ({ error: error.message, results: null })
        }

    },

}
