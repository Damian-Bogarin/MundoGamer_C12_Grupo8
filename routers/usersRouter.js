let express = require('express');
let router = express.Router();
let controller = require('../controllers/usersController'); 
let loginValidator = require('../validations/loginValidator');
let registerValidator = require('../validations/registerValidator');
/* let uploadFile = require('../middlewares/uploadAvatar'); */


/* login GET y POST */
router.get('/login', controller.login);
router.post('/login', loginValidator, controller.processLogin);

/* register GET y POST */
router.get('/register', controller.register);
router.post('/register', registerValidator, controller.processRegister); 

/* myProfile GET y POST */
/* router.get('/myProfile', controller.profile); en el medio el middleware */

/* productCart GET y POST */
router.get('/productCart', controller.cart);


module.exports = router;