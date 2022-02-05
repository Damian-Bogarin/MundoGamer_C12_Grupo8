/* const {products} = require("../data/dataBase"); */

const db = require('../database/models')
const Products = db.Product

let controller = {

    create: (req, res) => {
        res.render('admin/productCreate')
    },
    update: (req, res) => {

        Products.findByPk(req.params.id, {
            include: [{
                association: 'gender'
               
            },{association: 'clasification'} ] 
            
                   
                
            
        })
        .then((productsToUpdate) => {
            //res.send(productsToUpdate)
            res.render('admin/updateProduct', {old: productsToUpdate})
        })

        /* let productsID = req.params.id  // Guardo el id 
        let productsToUpdate
        for (let index = 0; index < products.length; index++) {
            if ( productsID == products[index].id) {
               productsToUpdate = products[index];
            } 
            
        } */


       
    },
    list: (req, res) => {

        Products.findAll( {
            include: [{ association: 'gender' }]
        } )
        
        .then((products)=> {
            //res.send(products)
            res.render('admin/listProduct', {products})  
        }) 

        
    }
};



module.exports = controller;