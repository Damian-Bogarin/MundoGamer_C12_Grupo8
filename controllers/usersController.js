const { users, writeUsersJSON } = require('../data/dataBase'); 
const { validationResult } = require('express-validator');

let controller = {

    login: (req, res) => {
        res.render('users/login')
    },

    processLogin: (req, res) => {
        let errors = validationResult(req);

        if (errors.isEmpty()) {  //Pregunta si errores esta vacio, si no hay errores permitirá loguearse y sino tendrá que mostrar esos errores
            res.send('algoo')
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