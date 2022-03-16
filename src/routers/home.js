let express = require('express')
let router = express.Router()
let controller = require('../controllers/homeController')


router.get("/", controller.home)

/* SOBRE NOSOTROS */
router.get("/about", controller.about)


module.exports = router;