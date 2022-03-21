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


/* errors = errors.mapped()
            if(req.fileValidationError) {
                //console.log(req.fileValidationError)
                errors = {
                    ...errors,
                    image : {
                        msg: req.fileValidationError
                    }
                }
            }
 */


            /* 
            
            updateProfile: (req, res) => {

            const { name, lastName, age, tel, address, province, locality } = req.body 
            
            Users.update({
                name,
                lastName,
                age,
                tel,
                address,
                province,         
                locality,
                avatar: req.file ? req.file.filename : req.session.user.avatar,
            },{ 
                where: {
                    id: req.session.user.id
                }
            })
            .then(result => {
                
                    if(req.file){
                        
                        if(fs.existsSync('public/img/avatars/' + req.session.user.avatar) && req.session.user.avatar != "default-img.png"){
                            fs.unlinkSync('public/img/avatars/' + req.session.user.avatar)
                        }
                        req.session.user.avatar = req.file.filename
                    }
                    res.redirect('/')              
            })
            .catch(error => console.log(error))
        }, 
        
        */