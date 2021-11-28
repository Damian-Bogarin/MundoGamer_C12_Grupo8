let express = require('express')
let router = express.Router()
let controller = require('../controladores/productosController')

router.get("/detalle", controller.detalle
)

router.get("/carrito",controller.carrito)

router.get("/crear",controller.crear)


module.exports = router