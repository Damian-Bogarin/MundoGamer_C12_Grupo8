/* rutas de productCreate and updateProduct */

let express = require('express'); 
let router = express.Router();
let controller = require('../controllers/adminController'); 
let adminLogMiddlewares = require('../middlewares/adminLogMiddlewares')

router.get('/',  adminLogMiddlewares,  controller.list); /* devuelve la vista listProduct */

router.get('/create', adminLogMiddlewares,  controller.create); /*devuelve la vista para crear un producto */
/* router.post('/productCreate', controller.newProduct); */ 

router.get('/update/:id',adminLogMiddlewares,  controller.update); /* devuelve la vista en donde actualizo el producto (edito) */
/* router.post('/updateProduct', controller.editProduct); */ 



module.exports = router;