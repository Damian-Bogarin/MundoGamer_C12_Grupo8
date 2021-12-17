let express = require('express')
let router = express.Router()
let controller = require('../controllers/productsController')
let uploadFile = require('../middlewares/upLoadProductFile')
  

router.get("/detail/:id", controller.detail)

 router.post("/store", uploadFile.single('photo'), controller.store)

 router.put("/store/:id", uploadFile.single('photo'), controller.update)

 router.delete("/delete/:id",controller.delete)

router.get("/categorias",controller.categorias)



module.exports = router;