//const { users, writeUsersJSON } = require('../data/dataBase'); 
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const db = require('../database/models');
const Users = db.User;

let controller = {

    login: (req, res) => {
        res.render('users/login', {
            session: req.session // La variable session la pasaremos en todas las vistas, ahi tenemos guardados todos los datos
        })
    },

    processLogin: (req, res) => {
        let errors = validationResult(req);
        
        if (errors.isEmpty()) { 
            Users.findOne({
                where: {
                    email: req.body.email
                }
            })     
            .then(user => {
                req.session.user = { 
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    rol: user.rol, /* --------- */
                    avatar: user.avatar
                }

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
            })       
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

            let { name, lastName, email, pass1 } = req.body 
            Users.create({
                name,
                lastName, /* last_name */ 
                email, 
                pass: bcrypt.hashSync(pass1, 12), //hashSync recibe dos parametros, pass y la sal
                rol: "ROL_USER", 
                address: "", /* "", y los siguientes dos */
                city: "",
                tel: "",
                age: "",
                avatar: req.file ? req.file.filename: "default-img.png", // Si no tiene nada lo toma como false y ejecuta la ultima parte, y coloca la imagen por default
            })
            .then(() => {
                res.redirect('/users/login')
            })
            .catch(error => console.log(error))/* -------------------------catch??----------------------- */
            
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

        Users.findByPk(req.session.user.id, {
            include: [{association: 'rols'}] /* ---incluir las otras asociaciones de like, starts y cart ??------ */
        })
        .then((user) => {
            res.render('users/myProfile', {
                user,
                session: req.session
            })
        })
    },
    cart: (req, res) => {     
        res.render('users/productCart', {
            session: req.session      
        })
    }
};



module.exports = controller;