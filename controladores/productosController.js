const {products,writeProductsJSON} = require("../Datos/baseDatos");



const controller = {

    detalle : (req,res) => {
        let productId = req.params.id
        let producto
        for (let index = 0; index < products.length; index++) {
           if(productId == products[index].id){
               producto = products[index]
           }
            
        }
        res.render('products/productDetail', {producto})},



    carrito: (req,res) => {
        res.render('products/productCart') }, 
    crear: (req,res) => {
        res.render('products/crearProductos')},
    almacen: (req,res) => {
        let ejem = req.body
        products.push(ejem)
      writeProductsJSON(products)  
    
    


      res.redirect('/')    },
    editar: (req,res) => {
        res.render('products/productEditar')},
    categorias: (req,res) => {
        res.render('products/categorias')}
}



module.exports = controller;