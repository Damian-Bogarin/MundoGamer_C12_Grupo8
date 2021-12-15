let express = require('express')
let router = express.Router()
let controller = require('../controllers/productsController')


router.get("/detail/:id", controller.detail)
/* router.post("") */


/* router.post("/almacen", controller.almacen) */

router.get("/categorias",controller.categorias)



module.exports = router;
