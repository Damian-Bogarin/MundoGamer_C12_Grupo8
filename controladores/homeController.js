const {products} = require("../Datos/baseDatos");


/* let cincoEstrellas = products.filter( products => products.estrellas >= 4) */

const controller = {

    home : (req,res) => {
       
        res.render('home' , {productos: products})} ,
   
    

}



module.exports = controller;