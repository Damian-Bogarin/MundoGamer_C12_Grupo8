var express = require('express');
var router = express.Router();

const userController = require('../../controllers/api/userController')

router.get('/notification', userController.notification)



module.exports = router