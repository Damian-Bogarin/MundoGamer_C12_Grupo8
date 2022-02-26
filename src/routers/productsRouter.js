let express = require('express')
let router = express.Router()
let controller = require('../controllers/productsController')
let uploadFile = require('../middlewares/upLoadProductFile')
let adminProductsValidator = require('../validations/adminProductsValidator')
let adminEditProductsValidator = require('../validations/adminEditProductsValidator')
let userProductsPreferences = require('../middlewares/userProductsPreferences')

router.get("/detail/:id", userProductsPreferences,controller.detail)

 router.post("/store", uploadFile.single('photo'), adminProductsValidator, controller.store)

 router.put("/store/:id", uploadFile.single('photo'), adminEditProductsValidator ,controller.update)

 router.delete("/delete/:id",controller.delete)

router.get("/category",controller.category)



module.exports = router;