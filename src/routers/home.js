let express = require('express')
let router = express.Router()
let controller = require('../controllers/homeController')

router.get("/", controller.home);

router.get("/home", controller.home2)



module.exports = router;