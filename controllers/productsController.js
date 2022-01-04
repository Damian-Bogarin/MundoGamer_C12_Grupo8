const { products, writeProductsJSON } = require("../data/dataBase");



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

        let lastId = 1;

        products.forEach(product => {
            if(product.id > lastId){
                lastId = product.id
            }
        });

        const {name, price, descount,stock ,clasification,stars,language,subtitle, gender,description, multiplayer, integratedShopping,console,conexion} = req.body

        let newProduct = {
            id: lastId + 1,
            name: name.trim(),
            clasification:clasification,
            language:(language != null ? language : ["No Tiene Idiomas"] ),
            subtitle:(subtitle != null ? subtitle : ["No Tiene subtitulos"] ),
            price: +price.trim(),
            descount: +descount.trim(),
            gender: gender,
            stars: (stars != null ? +stars : ["No Tiene compatibles"] ),
            new: true,
            conexion:conexion,
            stock: +stock,
            sales: 0,
            description: description.trim(),
            multiplayer: multiplayer,
            console:(console != null ? console : ["No Tiene compatibles"] ),
            integratedShopping: integratedShopping,
            photo: req.file ? [req.file.filename] : ["default-image.png"]
        }

        products.push(newProduct)

        writeProductsJSON(products)



        res.redirect('/')
    },
    update: (req, res) => { 
        
        
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
        
       
        res.redirect("/admin/list") 
    },

    delete: (req,res) =>{

        
         let deleteProductID = req.params.id

         
       let productsFilter = products.filter((product) => product.id != deleteProductID) 
       
        writeProductsJSON(productsFilter)
        res.redirect("/") 

    },

    categorias: (req, res) => {
        res.render('products/categorias', {
            session: req.session
        })
    }
}




module.exports = controller;