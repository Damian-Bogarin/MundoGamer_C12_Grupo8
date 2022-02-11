let express = require('express')
let router = express.Router()
let controller = require('../controllers/homeController')

router.get("/home", controller.home);

router.get("/", controller.home2)



module.exports = router;