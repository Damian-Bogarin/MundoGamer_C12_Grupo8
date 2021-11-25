let express = require('express')
let router = express.Router()


router.get("/detalle",(req,res) => {
    res.render('productDetail')
})

router.get("/carrito",(req,res) => {
    res.render('productCart')
})

router.get("/crear",(req,res) => {
    res.render('productCrear')
})


module.exports = router