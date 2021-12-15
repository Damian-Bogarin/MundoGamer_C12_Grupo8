let express = require('express');
let router = express.Router();
let controller = require('../controllers/usersController'); 



router.get('/login', controller.login);

router.get('/register', controller.register);

router.get('/productCart', controller.cart)

/* post - recibe datos del formulario*/
/*router.post('/register', controller.newUser);*/ /*editUser*/



router.get('/myProfile', controller.profile); 




module.exports = router;