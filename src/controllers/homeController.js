const {products} = require("../data/dataBase");


/* let cincoEstrellas = products.filter( products => products.estrellas >= 4) */

const controller = {

    home: (req,res) => {
       
        res.render('home', {productos: products, session: req.session})
    } 
   
    

}



module.exports = controller;