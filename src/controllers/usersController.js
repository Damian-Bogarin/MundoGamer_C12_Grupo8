const { users, writeUsersJSON } = require('../data/dataBase'); 
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

let controller = {

    login: (req, res) => {
        res.render('users/login', {
            session: req.session // La variable session la pasaremos en todas las vistas, ahi tenemos guardados todos los datos
        })
    },

    processLogin: (req, res) => {
        let errors = validationResult(req);
        
        if (errors.isEmpty()) { 
        //Pregunta si errores esta vacio, si no hay errores permitirá loguearse y sino tendrá que mostrar esos errores
        //Iniciamos sesión, pero hace una comparación estricta si es el mismo usuario
            let user = users.find(user => user.email === req.body.email);  
            
            req.session.user = { //datos de la seccion
                id: user.id,
                name: user.name,
                email: user.email,
                rol: user.rol,
                avatar: user.avatar
            }
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
            res.redirect('/') //Recien al haber pasado todo, ahi recien lo enviará al home, y estaria en su session 
        }else{
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
        let errors = validationResult(req);
        
        if (errors.isEmpty()) { 
            let lastId = 1;

            users.forEach(user => {
                if(user.id > lastId){
                   lastId = user.id
                }
            });

            let { name, last_name, email, pass1 } = req.body 
            let newUser = {
                id : lastId + 1,
                name,
                last_name, 
                email, 
                pass: bcrypt.hashSync(pass1, 12), //hashSync recibe dos parametros, pass y la sal
                rol: "ROL_USER",
                address: "",
                city: "",
                province: "",
                CP: "",
                tel: "",
                avatar: req.file ? req.file.filename: "default-img.png", // Si no tiene nada lo toma como false y ejecuta la ultima parte, y coloca la imagen por default
            }
            users.push(newUser) //Al nuevo usuario lo introducimos en el array
            writeUsersJSON(users)
            res.redirect('/users/login')
        }else{
            res.render('users/register', {
                errors: errors.mapped(),
                session: req.session 
            })
        }
    }, 

    logout: (req, res) => {  //cerraria la session, borra los datos del usuario y mata la cookie
        req.session.destroy();
        if(req.cookies.mundoGamer){
            res.cookie('mundoGamer', "", { maxAge: -1 }) //Al darle el string vacio y poner -1 borramos todos esos datos que le estamos dando
        }
        res.redirect('/')
    },

    profile: (req, res) => {   /* acá session: req.session?? */
        res.render('users/myProfile')  /* logica: debe buscar al user */
    },

    cart: (req, res) => {     
        res.render('users/productCart', {
            session: req.session      
        })
    }
};



module.exports = controller;