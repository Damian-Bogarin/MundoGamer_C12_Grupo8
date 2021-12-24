const { users, writeUsersJSON } = require('../data/dataBase'); 
const { validationResult } = require('express-validator');

let controller = {

    login: (req, res) => {
        res.render('users/login')
    },

    processLogin: (req, res) => {
        let errors = validationResult(req);
       
        if (errors.isEmpty()) {  //Pregunta si errores esta vacio, si no hay errores permitirá loguearse y sino tendrá que mostrar esos errores
            let user = users.find(user => user.email == req.body.email);  //Iniciamos sesión
            req.session.user = { //datos de la seccion
                id: user.id,
                name: user.name,
                email: user.email,
                rol: user.rol,
                avatar: user.avatar
            }
            res.locals.user = req.session.user;
            res.redirect('/') //Recien al haber pasado todo, ahi recien lo enviaria al home, y estaria en su session 
        }else{
            res.render('users/login', {
                errors: errors.mapped() //Envia a la vista los errores como un objeto
            })
        }
    },

    register: (req, res) => {
        res.render('users/register')
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

            let { name, email, pass1 } = req.body /* pass1 */
            let newUser = {
                id : lastId + 1,
                name,
                /* lastName, */
                email, 
                pass: pass1, /* funcionó que pusiera pass1, pero muestra contraseña en el json*/
                rol: "ROL_USER",
                address: "",
                city: "",
                province: "",
                CP: "",
                tel: "",
                avatar: req.file ? req.file.filename: "default-img.png",
            }
            users.push(newUser) //Al nuevo usuario lo introducimos en el array
            writeUsersJSON(users)
            res.redirect('/users/login')
        }else{
            res.render('users/register', {
                errors: errors.mapped() 
            })
        }
    }, 

    profile: (req, res) => {
        res.render('users/myProfile')
    },

    cart: (req, res) => {
        res.render('users/productCart')
    }
};


module.exports = controller;