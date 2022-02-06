//const { products, writeProductsJSON } = require("../data/dataBase");
let { validationResult } = require('express-validator')

const db = require('../database/models');


const Products = db.Product; 
const Photo = db.Photo

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
        /* res.send(req.body) 
        COMPATIBILITY DEBE SER UN ID
        */
        let conexiontrue = +conexion
        let date = new Date
        let priceEndtrue = price * ((100 - descount) / 100) ;
        
        let gendertrue = +gender;
        let clasificationtrue = +clasification
        let integratedShop = +integratedShopping
        let compatibility = +console

        Products.create({
            name,
            description,
            date: date,
            compatibility: compatibility,
            conexion : conexiontrue, // Verificar si da un 0 o 1
            integratedShop: integratedShop,
            price,
            descount,
            priceEnd: priceEndtrue,
            sold: 0,
            stock,
            genderId: gendertrue,
            classificationId: clasificationtrue
        })
         .then((product) => {
            Photo.create({
                image: req.file ? req.file.filename : 'default-image.png',
                productId: product.id
            })
        
        }) 
        .then( res.redirect("/"));
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
        
        if(errors.isEmpty()){
        
        
        
        let productId = req.params.id;
        const {name, price,descount ,stock,clasification,stars,language,subtitle, gender,description, multiplayer, integratedShopping,console,conexion} = req.body

        products.forEach(product => {
            if(product.id == productId){
                product.id = product.id,
                product.name = name ,
                product.sales = product.sales, 
                product.clasification = clasification,
                product.language = language,
                product.subtitle = subtitle,
                product.price = +price,
                product.gender = gender,
                product.stars = +stars,
                product.stock = +stock,
                product.conexion = conexion,
               product.descount = +descount,
                product.description = description,
                product.multiplayer = multiplayer,
                product.console = console,
                product.integratedShopping = integratedShopping,
                product.photo = req.file ? [req.file.filename] : product.photo
            
            }
        })

        writeProductsJSON(products)
        
       
        res.redirect("/admin") 
    } else{
    
        console.log(errors.mapped())
        req.body["id"] = req.params.id
        
        let productsID = req.params.id  // Guardo el id 
        let productsToUpdate
        for (let index = 0; index < products.length; index++) {
            if ( productsID == products[index].id) {
               productsToUpdate = products[index];
            } 
            
        }

       
        res.render('admin/updateProduct', {old: req.body,
         errors : errors.mapped()})
        
        
       /*  res.render('admin/updateProduct', {



            old:req.body, 

           
        }) */ 

        
        
    }
    
    }
        
    
    ,

    delete: (req,res) =>{

        
         let deleteProductID = req.params.id

         
       let productsFilter = products.filter((product) => product.id != deleteProductID) 
       
        writeProductsJSON(productsFilter)
        res.redirect("/") 

    },

    category: (req, res) => {
        res.render('products/category', {
            session: req.session
        })
    }
}




module.exports = controller;