/* rutas de productCreate and updateProduct */

let express = require('express'); 
let router = express.Router();
let controller = require('../controllers/adminController'); 


router.get('/', controller.list); /* devuelve la vista listProduct */

router.get('/create', controller.create); /*devuelve la vista para crear un producto */
/* router.post('/productCreate', controller.newProduct); */ /* <- todavia no esta echa...guardaria el producto en la base de datos */

router.get('/update/:id', controller.update); /* devuelve la vista en donde actualizo el producto (edito) */
/* router.post('/updateProduct', controller.editProduct); */ /* <- todavia no esta echa... guardaria el producto actualizado, editado en la base de datos */



module.exports = router;