var express = require('express');
var router = express.Router();

const productController = require('../../controllers/api/productController')

router.get('/filter', productController.category)


module.exports = router