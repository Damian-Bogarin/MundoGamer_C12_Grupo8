var express = require('express');
var router = express.Router();

const productController = require('../../controllers/api/productController')

router.put('/like/:id?/', productController.like)

router.put('/stars/:id?/:value', productController.stars ) //parametros
           
router.get('/create', productController.create)



module.exports = router