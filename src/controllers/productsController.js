//const { products, writeProductsJSON } = require("../data/dataBase");
let { validationResult } = require('express-validator')

const db = require('../database/models');
// const LanguageProduct = require('../database/models/LanguageProduct');


const Products = db.Product; 
const CompatibilityProduct = db.CompatibilityProduct
const LanguageProduct = db.LanguageProduct
const MultiplayerProduct = db.MultiplayerProduct
const SubtitleProduct = db.SubtitleProduct

const controller = {

    detail: (req, res) => {
        let productId = req.params.id //Creo variable y le guardo el valor del params.id
        let producto // creo variable y no le doy valor.
        for (let index = 0; index < products.length; index++) {  //recorro  con for el array de productos
            if (productId == products[index].id) {                  // Si, la variable productID == al id de la posicion del array recorrido entonces guardo ese array 
                producto = products[index]                        // en la variable producto, guardo el valor del array.
            }

        }
        res.render('products/productDetail', { producto: producto, session: req.session })
    }, // mando la vista, junto a la variable producto.


    store: (req, res) => {
        let errors = validationResult(req);
        
        if(errors.isEmpty()){
        const {name, price, descount,stock ,clasification,stars,language,subtitle, gender,description, multiplayer, integratedShopping,console,conexion} = req.body
        //res.send(req.body) 

        let conexiontrue = +conexion
        let date = new Date
        let priceEndtrue = price * ((100 - descount) / 100) ;
        
        let gendertrue = +gender;
        let clasificationtrue = +clasification
        let integratedShop = +integratedShopping

        Products.create({
            name,
            description,
            date: date,
            conexion : conexiontrue, // Verificar si da un 0 o 1
            integratedShop: integratedShop,
            price,
            descount,
            priceEnd: priceEndtrue,
            sold: 0,
            stock,
            genderId: gendertrue,
            classificationId: clasificationtrue,
            photo: req.file ? req.file.filename : 'default-image.png',
        })
        .then((productCreate)=>{
            for (let i = 0; i < console.length; i++) {
                CompatibilityProduct.create({
                compatibilityId: +console[i],
                productId: productCreate.id
            });
            
            } 
             for (let i = 0; i < language.length; i++) {
                LanguageProduct.create({
                languageId: +language[i],
                productId: productCreate.id
            });
                
            } 
            for (let i = 0; i < multiplayer.length; i++) {
                MultiplayerProduct.create({
                multiplayerId: +multiplayer[i],
                productId: productCreate.id
            });
                
            } 
            for (let i = 0; i < subtitle.length; i++) {
                SubtitleProduct.create({
                subtitleId: +subtitle[i],
                productId: productCreate.id
            });
                
            } 
            
        })
      
        /* .catch(error => console.log(error)) */

        .then( res.redirect("/"))
        
        } else {
            console.log(errors)
            console.log(errors.mapped())
            console.log(req.body)
            res.render('admin/productCreate', {
                
                old:req.body, 

                errors : errors.mapped()
            }) 

            
            
        }
        
    },
    update: (req, res) => { 

        let errors = validationResult(req);
        // res.send(req.body)
        const {name, price,descount ,stock,clasification,stars,language,subtitle, gender,description, multiplayer, integratedShopping,console,conexion} = req.body
        
        
        if(errors.isEmpty()){
            let conexiontrue = +conexion
            let date = new Date
            let priceEndtrue = price * ((100 - descount) / 100) ;
        
            let gendertrue = +gender;
            let clasificationtrue = +clasification
            let integratedShop = +integratedShopping
            Products.update({
                name,
                description,
                
                conexion : conexiontrue, // Verificar si da un 0 o 1
                integratedShop: integratedShop,
                price,
                descount,
                priceEnd: priceEndtrue,
                sold: 0,
                stock,
                genderId: gendertrue,
                classificationId: clasificationtrue,
                photo: req.file ? req.file.filename : 'default-image.png',


            },
            {
                where: {id: req.params.id}
            })
            .then((productEdit)=>{
                CompatibilityProduct.destroy({where: {
                    productId: req.params.id
                }})
                LanguageProduct.destroy({where: {
                    productId: req.params.id
                }})
                MultiplayerProduct.destroy({where: {
                    productId: req.params.id
                }})
                SubtitleProduct.destroy({where: {
                    productId: req.params.id
                }})
                for (let i = 0; i < console.length; i++) {
                    CompatibilityProduct.create({
                    compatibilityId: +console[i],
                    productId: req.params.id
                });
                
                } 
                for (let i = 0; i < language.length; i++) {
                    LanguageProduct.create({
                    languageId: +language[i],
                    productId: req.params.id
                });
                    
                } 
                for (let i = 0; i < multiplayer.length; i++) {
                    MultiplayerProduct.create({
                    multiplayerId: +multiplayer[i],
                    productId: req.params.id
                });
                    
                } 
                if (subtitle) { //evaluar
                    for (let i = 0; i < subtitle.length; i++) {
                    SubtitleProduct.create({
                    subtitleId: +subtitle[i],
                    productId: req.params.id
                });
                    
                } 
                }
                



            })

        res.redirect("/admin") 
    } else{
    
        //console.log(errors.mapped())
        
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
            res.render('admin/updateProduct', {old: productsToUpdate,
            errors : errors.mapped()})
        })
      /*   req.body["id"] = req.params.id
        
        let productsID = req.params.id  // Guardo el id 
        let productsToUpdate
        for (let index = 0; index < products.length; index++) {
            if ( productsID == products[index].id) {
               productsToUpdate = products[index];
            } 
            
        } */

       
       /*  res.render('admin/updateProduct', {old: req.body,
        })
         */
        
       /*  res.render('admin/updateProduct', {



            old:req.body, 

           
        }) */ 

        
        
    }
    
    }
        
    
    ,

    delete: (req,res) =>{

        Products.destroy({
            where: {id: req.params.id}
        })
        
        CompatibilityProduct.destroy({where: {
                productId: req.params.id
            }})
        LanguageProduct.destroy({where: {
                productId: req.params.id
            }})
        MultiplayerProduct.destroy({where: {
                productId: req.params.id
            }})
        SubtitleProduct.destroy({where: {
                productId: req.params.id
            }})
        
        .then((result)=>{res.redirect("/") })
        

    },

    category: (req, res) => {
        res.render('products/category', {
            session: req.session
        })
    }
}




module.exports = controller;