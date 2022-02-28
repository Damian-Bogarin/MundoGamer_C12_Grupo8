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
                    rol: user.rol.nameRol, /* --------- */
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
            if(req.session.user.rol = 'admin'){
                res.redirect('/admin')
            }
            else{
                 res.redirect('/') //Recien al haber pasado todo, ahi recien lo enviará al home, y estaria en su session 
            }
           
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
        const errors = validationResult(req);
        
        if (errors.isEmpty()) { 

            const { name, lastName, email, pass1 } = req.body 
            Users.create({
                name,
                lastName, /* last_name */ 
                email, 
                pass: bcrypt.hashSync(pass1, 12), //hashSync recibe dos parametros, pass y la sal
                rol_id: 2, 
                //address, /* "", y los siguientes dos */  //ESTOS DATOS DEBERIAN LLENARSE EN EL EDITAR PROFILE QUE TENIA GRETA, pero que no paso :C
                //city,
                //tel,
                //age,
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

    profile: (req, res) => { /* ---incluir las otras asociaciones de like, starts y cart ??------ */

        Users.findByPk(req.session.user.id, {
            include: [{association: 'rol'}] /* ---incluir las otras asociaciones de like, starts y cart ??------ */
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