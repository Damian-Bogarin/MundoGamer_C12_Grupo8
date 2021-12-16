let express = require('express');
let router = express.Router();
let controller = require('../controllers/usersController'); 



router.get('/login', controller.login);

router.get('/register', controller.register);

router.get('/productCart', controller.cart)


router.get('/myProfile', controller.profile); 




module.exports = router;