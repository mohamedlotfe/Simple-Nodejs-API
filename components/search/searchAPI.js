var express = require("express");
const router = express.Router();
const controller = require('./searchController')

router.post("/searchwithCity", async (req, res) => {
    let { searchkey = "", searchValue = "", selectionList = [] } = req.body || {};
    let results = await controller.searchwithCity(searchkey, searchValue, selectionList);
    res.send(results);
});



router.post("/searchWithCustomer", async (req, res) => {
    // searchkey("company"|| "customer")
    let { searchkey = "", matchList = [] } = req.body || {};
    let results = await controller.search(searchkey, matchList);
    res.send(results);

});


module.exports = router;
