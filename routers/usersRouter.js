let express = require('express');
let router = express.Router();
let controller = require('../controllers/usersController'); 


/* login GET y POST */
router.get('/login', controller.login);
router.post('/login', controller.processLogin);

/* register GET y POST */
router.get('/register', controller.register);
/* router.post('/register', controller.processRegister); */

/* productCart GET y POST */
router.get('/productCart', controller.cart);


/* myProfile GET y POST */
router.get('/myProfile', controller.profile); 




module.exports = router;