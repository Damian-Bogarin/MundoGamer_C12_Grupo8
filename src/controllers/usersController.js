const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const fs = require('fs');


const db = require('../database/models');
const Users = db.User;
const Products = db.Product;
const CompatibilityProduct = db.CompatibilityProduct
const LanguageProduct = db.LanguageProduct
const MultiplayerProduct = db.MultiplayerProduct
const SubtitleProduct = db.SubtitleProduct
const UserPreferences = db.UserPreferences
const CartShop = db.CartShop
const Notification = db.Notification

let controller = {

    login: (req, res) => {
        res.render('users/login', {
            session: req.session // La variable session la pasaremos en todas las vistas, ahi tenemos guardados todos los datos
        })
    },

    processLogin: (req, res) => {
        let errors = validationResult(req);
        //res.send(req.body)
        if (errors.isEmpty()) { 
            Users.findOne({
                where: {
                    email: req.body.email
                },
                include: [{association: 'rol'}]
            })     
            .then(user => {
                //res.send(user)
                 req.session.user = { 
                    id: user.id,
                    name: user.name,
                    lastName: user.lastName,
                    email: user.email,
                    rol: user.rol.nameRol, 
                    avatar: user.avatar
                } 
                //res.send(req.session.user)
            })
            .then((result)=>{
                 //Si la persona marcó el "recordarme" (cookie)
           if(req.body.remember){ //Si existe, es decir si marcó el recordar es cuando se crea la cookie
                const timeMiliseconds = 60000 //1min -> buena práctica, asignarlo a una variable
                res.cookie("mundoGamer", req.session.user, { //Si es asi tendra como respuesta una cookie, que tendra 3 parámetros
                expires: new Date(Date.now() + timeMiliseconds),  //configuración de la cookie
                httpOnly: true, //http configura y accede a ellas
                secure: true
                })
            }
            
            res.locals.user = req.session.user;
            //res.send(res.locals.user)
            if(req.session.user.rol == 'admin'){
                res.redirect('/admin')
            }
            else{
                 res.redirect('/') //Recien al haber pasado todo, ahi recien lo enviará al home, y estaria en su session 
            }       
            })
           
        }else{ 
            console.log(errors.mapped())
            res.render('users/login', {
                
                errors: errors.mapped(), //Envia a la vista los errores como un objeto
                session: req.session
               
            })
        }
    },

    register: (req, res) => {
        res.render('users/register', {
            session: req.session 
        })
    },

    processRegister: (req, res) => {
        const errors = validationResult(req);
        
        if (errors.isEmpty()) { 

            const { name, lastName, email, pass1 } = req.body 
            Users.create({
                name,
                lastName, 
                email, 
                pass: bcrypt.hashSync(pass1, 12), //hashSync recibe dos parametros, pass y la sal
                rol_id: 2,              /* false */
                //address, /* en myProfile */  
                //province,
                //locality,
                //tel,
                //age,
                avatar: "default-img.png"
            })
            .then((data) => {
                Notification.create({
                    userId: data.id,
                    see: 0,
                    message: `Bienvenido ${data.name}!`,
                    link: '#'
                })

                res.redirect('/users/login')
            })
            .catch(error => console.log(error))
            
        }else{
            res.render('users/register', {
                errors: errors.mapped(),
                old: req.body,
                session: req.session 
            })
        }
    }, 

    logout: (req, res) => { 
        req.session.destroy();
        if(req.cookies.mundoGamer){
            res.cookie('mundoGamer', "", { maxAge: -1 }) //Al darle el string vacio y poner -1 borramos todos esos datos que le estamos dando
        }
        res.redirect('/')
    },

    profile: (req, res) => { 

        Users.findByPk(req.session.user.id/*,  {
            include: [{association: 'rol'}]
        }*/) 
        .then((user) => {
            res.render('users/myProfile', {
                user,
                session: req.session
            })
        })
        .catch(error => console.log(error))
    },

    updateProfile: (req, res) => {

        const { name, lastName, age, tel, address, province, locality } = req.body 
        
        Users.update({
            name,
            lastName,
            age,
            tel,
            address,
            province,         
            locality,
            avatar: req.file ? req.file.filename : req.session.user.avatar,
        },{ 
            where: {
                id: req.session.user.id
            }
        })
        .then(result => {
            
                if(req.file){
                    
                    if(fs.existsSync('public/img/avatars/' + req.session.user.avatar) && req.session.user.avatar != "default-img.png"){
                        fs.unlinkSync('public/img/avatars/' + req.session.user.avatar)
                    }
                    req.session.user.avatar = req.file.filename
                }
                res.redirect('/')              
        })
        .then(errors => {
            errors.mapped()
            if(req.fileValidationError) {

                errors = {
                    ...errors,
                    avatar : {
                        msg: req.fileValidationError
                    }
                }
            }
        })
        .catch(error => console.log(error))
    }, 

    cart: (req, res) => {  
        
        CartShop.findAll({
            where:{
                userId:req.session.user.id
            },
            include:[{association: 'product'}]
            
        })
        .then(product =>{
            let empty = false
            let total = 0
            if(product.length == 0){
                let empty = true
            }
            if(product.length > 0){
                product.forEach(elem =>{ total += elem.product.priceEnd})
            }
            

            //res.send(product)
              res.render('users/productCart', {session: req.session,product, empty,total})
        })
    
      
    }
};



module.exports = controller;