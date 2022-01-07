const {products} = require("../data/dataBase");



let controller = {

    create: (req, res) => {
        res.render('admin/productCreate')
    },
    update: (req, res) => {
        let productsID = req.params.id  // Guardo el id 
        let productsToUpdate
        for (let index = 0; index < products.length; index++) {
            if ( productsID == products[index].id) {
               productsToUpdate = products[index];
            } 
            
        }


        res.render('admin/updateProduct', {old: productsToUpdate})
    },
    list: (req, res) => {
        res.render('admin/listProduct', {products: products}) 
    }
};



module.exports = controller;