let express = require('express');
let router = express.Router();
let controller = require('../controllers/usersController'); 
let loginValidator = require('../validations/loginValidator');
let registerValidator = require('../validations/registerValidator');
let uploadFile = require('../middlewares/uploadAvatar');
let userLogMiddlewares = require('../middlewares/userLogMiddlewares')
let guestMiddlewares = require('../middlewares/guestMiddlewares')

/* login GET y POST */
router.get('/login',guestMiddlewares, controller.login);
router.post('/login', loginValidator, controller.processLogin);

/* register GET y POST */
router.get('/register', guestMiddlewares , controller.register);
router.post('/register', uploadFile.single('avatar'), registerValidator, controller.processRegister); // Pasamos el middleware uploadFile, single, por que es un solo archivo y dentro el bombre q pusimos en el campo name

/* logout GET */
router.get('/logout', userLogMiddlewares, controller.logout);

/* myProfile GET y POST */
router.get('/myProfile',userLogMiddlewares , controller.profile); 
router.post('/myProfile', controller.profile); 

/* productCart GET y POST */
router.get('/productCart',userLogMiddlewares, controller.cart);


module.exports = router;