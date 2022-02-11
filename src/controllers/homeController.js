const {products} = require("../data/dataBase");


const db = require('../database/models')
const Products = db.Product
const Op = db.Sequelize.Op

/* let cincoEstrellas = products.filter( products => products.estrellas >= 4) */

const controller = {

    home: (req,res) => {


        res.render('home', {productos: products, session: req.session})
    },

    home2: (req,res) => {
        Products.findAll( {
            limit: 5,
            where: {descount: {[Op.gt]: 0}},
            include: [{ association: 'gender'} ,
                    {association: 'clasification'},
                {association: 'compatibility'},
                {association: 'language'},
                {association: 'subtitle'},
                {association: 'multiplayer'}
             ] 
            
                   
                
            
        })
        .then((Off)=>{
            //res.send(Off)
            res.render('home2', {Off, session: req.session})
        })
        
    }
   
    

}



module.exports = controller;