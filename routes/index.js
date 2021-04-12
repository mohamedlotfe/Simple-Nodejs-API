var express = require('express');
var router = express.Router();


var customersRouter = require('../components/customer/customersAPI');
var productsRouter = require('../components/product/productsAPI');
var companysRouter = require('../components/company/companysAPI');
var searchRouter = require('../components/search/searchAPI');

router.use(customersRouter);
router.use(productsRouter);
router.use(companysRouter);
router.use(searchRouter);

module.exports = router;
