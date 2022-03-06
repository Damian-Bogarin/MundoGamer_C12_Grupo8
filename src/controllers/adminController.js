

const db = require('../database/models')
const Products = db.Product

let controller = {

    create: (req, res) => {
        res.render('admin/productCreate')
    },
    update: (req, res) => {

        Products.findByPk(req.params.id, {
            include: [{ association: 'gender'} ,
                    {association: 'clasification'},
                {association: 'compatibility'},
                {association: 'language'},
                {association: 'subtitle'},
                {association: 'multiplayer'}
             ] 
            
                   
                
            
        })
        .then((productsToUpdate) => {
            //res.send(productsToUpdate)
            res.render('admin/updateProduct', {old: productsToUpdate})
        })
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