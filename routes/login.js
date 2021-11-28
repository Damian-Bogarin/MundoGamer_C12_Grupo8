let express = require('express')
let router = express.Router()
let controller = require('../controladores/usersController.js')

router.get("",controller.login)



module.exports = router