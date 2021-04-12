

var express = require("express");
const router = express.Router();
const controller = require('./companysController')

/* GET companys listing. */
router.get("/companys", async (req, res) => {
    let results = await controller.getCompanys();
    res.send(results);
});

router.get("/companys/:id", async (req, res) => {
    let id = req.params.id
    let results = await controller.getCompanyById(id);
    res.send(results);
});

router.post("/companys", async (req, res) => {
    let { company = {} } = req.body || {};
    let results = await controller.addCompany(company);
    res.send(results);

});

router.patch("/companys/:id", async (req, res) => {
    let { company = {} } = req.body || {};
    let id = req.params.id
    let newCompanys = await controller.updateCompany(id, company);
    res.send(newCompanys);
});

router.delete("/companys/:id", async (req, res) => {
    let id = req.params.id
    let newCompanys = await controller.deleteCompany(id);
    res.send(newCompanys);
});


module.exports = router;

