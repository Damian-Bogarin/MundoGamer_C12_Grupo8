const {products, writeProductsJSON} = require("../data/dataBase");



const controller = {

    detail: (req,res) => {
        let productId = req.params.id //Creo variable y le guardo el valor del params.id
        let producto // creo variable y no le doy valor.
        for (let index = 0; index < products.length; index++) {  //recorro  con for el array de productos
           if(productId == products[index].id){                  // Si, la variable productID == al id de la posicion del array recorrido entonces guardo ese array 
               producto = products[index]                        // en la variable producto, guardo el valor del array.
           }
            
        }
        res.render('products/productDetail', {producto: producto})}, // mando la vista, junto a la variable producto.

   
     store: (req,res) => {
        let newProduct = req.body
        products.push(newProduct)
      writeProductsJSON(products)   
    
    


      res.redirect('/')    },
    
    categorias: (req,res) => {
        res.render('products/categorias')}
}




module.exports = controller;