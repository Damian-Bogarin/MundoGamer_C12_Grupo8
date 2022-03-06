var express = require('express');
var router = express.Router();

const productController = require('../../controllers/api/productController')

router.put('/update/:id?', productController.like)


module.exports = router