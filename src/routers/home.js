let express = require('express')
let router = express.Router()
let controller = require('../controllers/homeController')


router.get("/", controller.home)

/* SOBRE NOSOTROS */
router.get("/about", controller.about)

/* TERMINOS Y CONDICIONES */
router.get("/terms", controller.terms)

/* NUESTRAS SUCURSALES */
router.get("/offices", controller.offices)


module.exports = router;