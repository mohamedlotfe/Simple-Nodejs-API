var express = require("express");
const router = express.Router();
const controller = require('./customersController')

router.get("/customers", async (req, res) => {
    let results = await controller.getCustomers();
    res.send(results);
});

router.get("/customers/:id", async (req, res) => {
    let id = req.params.id
    let results = await controller.getCustomerById(id);
    res.send(results);
});

router.post("/customers", async (req, res) => {
    let { customer = {} } = req.body || {};
    let results = await controller.addCustomer(customer);
    res.send(results);

});

router.patch("/customers/:id", async (req, res) => {
    let { customer = {} } = req.body || {};
    let id = req.params.id
    let newCustomers = await controller.updateCustomer(id, customer);
    res.send(newCustomers);
});

router.delete("/customers/:id", async (req, res) => {
    let id = req.params.id
    let newCustomers = await controller.deleteCustomer(id);
    res.send(newCustomers);
});
// router.put("/customers", async (req, res) => {
//     let { customer = {} } = req.body || {};
//     let newCustomers = await controller.addCustomer(customer);
//     res.send(newCustomers);
// });

module.exports = router;
