let express = require('express');
let router = express.Router();
let controller = require('../controllers/usersController'); 
let loginValidator = require('../validations/loginValidator');
let registerValidator = require('../validations/registerValidator');
let uploadFile = require('../middlewares/uploadAvatar');
let userLogMiddlewares = require('../middlewares/userLogMiddlewares')
let guestMiddlewares = require('../middlewares/guestMiddlewares')
let cartShop = require('../middlewares/cartShop')

/* login GET y POST */
router.get('/login', guestMiddlewares, controller.login);
router.post('/login', loginValidator, controller.processLogin);

/* register GET y POST */
router.get('/register', guestMiddlewares, controller.register);
router.post('/register', registerValidator, controller.processRegister); 

/* logout GET */
router.get('/logout', userLogMiddlewares, controller.logout);

/* myProfile GET y PUT */
router.get('/myProfile',  userLogMiddlewares, controller.profile); 
router.put('/myProfile/:id', uploadFile.single('avatar'), controller.updateProfile);   
// Pasamos el middleware uploadFile, single, por que es un solo archivo y dentro el nombre q pusimos en el campo name

/* productCart GET y POST */
router.get('/productCart/:product?',userLogMiddlewares, cartShop, controller.cart);


module.exports = router;