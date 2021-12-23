const { check, body } = require('express-validator');
const { users } = require('../data/dataBase');

module.exports = [

    check('name')
    .notEmpty()
    .withMessage('Se necesita pasar un nombre'),

    check('email')
    .notEmpty()  
    .withMessage('Debes ingresar un e-mail') 
    .bail() 
    .isEmail()
    .withMessage('Debes ingresar un e-mail válido'),

    body('email').custom(value => { //custom recibe como parámetro una función 
        let user = users.filter(user => {
            return user.email == value
        })
    }),
]