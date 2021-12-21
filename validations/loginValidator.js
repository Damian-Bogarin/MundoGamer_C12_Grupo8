const { check } = require('express-validator'); //Requiero express-validator, desestructuro y pido el método check

module.exports = [

    check('email')
    .isEmail()  
    .notEmpty()  
    .withMessage('Debes ingresar un e-mail válido'),  

    check('pass')
    .notEmpty()
    .withMessage('Debes escribir tu contraseña')
]

