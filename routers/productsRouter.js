let express = require('express')
let router = express.Router()
let controller = require('../controllers/productsController')


router.get("/detail/:id", controller.detail)
/* router.post("") */


 router.post("/store", controller.store)

 router.put("/store/:id", controller.update)

 router.delete("/delete/:id",controller.delete)

router.get("/categorias",controller.categorias)



module.exports = router;
