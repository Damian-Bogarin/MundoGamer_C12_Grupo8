const controller = {

    detalle : (req,res) => {
        res.render('products/productDetail')},
    carrito: (req,res) => {
        res.render('products/productCart') }, 
    crear: (req,res) => {
        res.render('products/productCrear')},
    editar: (req,res) => {
        res.render('products/productEditar')}

}



module.exports = controller;