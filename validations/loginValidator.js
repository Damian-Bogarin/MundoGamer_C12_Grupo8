const { check, body } = require('express-validator'); //Requiero express-validator, desestructuro y pido el método check
const { users } = require('../data/dataBase')

module.exports = [

    check('email')
    .notEmpty()  
    .withMessage('Debes ingresar un e-mail') 
    .bail() //Corta la ejecución 
    .isEmail()
    .withMessage('Debes ingresar un e-mail válido'),

    check('pass')
    .notEmpty()
    .withMessage('Debes escribir tu contraseña'),

    body('custom')
    .custom((value, {req}) => { //Buscará ese usuario en la base de datos, y comparará la contraseña
        let user = users.find(user => user.email == req.body.email);

        if(user){ //Si al usuario en su propiedad pass es igual a lo que me estan mandando en el formulario
            if(user.pass === req.body.pass){
                return true
            }else{
                return false
            }
        }else{
            return false
        }
    }).withMessage('Credenciales inválidas')
]

