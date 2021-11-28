let express = require('express')
let router = express.Router()
let controller = require('../controladores/homeController')

router.get("",controller.home
)



module.exports = router