let express = require('express')
let router = express.Router()
let controller = require('../controladores/productosController')

router.get("/detalle/:id", controller.detalle)
/* router.post("") */
router.get("/carrito", controller.carrito)

router.get("/crear", controller.crear)
router.post("/almacen", controller.almacen)

router.get("/editar", controller.editar)

router.get("/categorias",controller.categorias)

module.exports = router;
