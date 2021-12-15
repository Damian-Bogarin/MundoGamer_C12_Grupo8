const {products} = require("../data/dataBase");



let controller = {

    create: (req, res) => {
        res.render('admin/productCreate')
    },
    update: (req, res) => {
        res.render('admin/updateProduct')
    },
    list: (req, res) => {
        res.render('admin/listProduct', {products: products})
    }
};



module.exports = controller;