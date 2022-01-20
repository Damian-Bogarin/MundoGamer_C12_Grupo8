const { check, body } = require('express-validator');
const { users } = require('../data/dataBase');

module.exports = [

    check('name')
    .notEmpty()
    .withMessage('Debes ingresar tu nombre'),

    check('email')
    .notEmpty()  
    .withMessage('Debes ingresar un e-mail') 
    .bail() 
    .isEmail()
    .withMessage('Debes ingresar un e-mail válido'),

    body('email').custom((value) => { //custom recibe como parámetro un collback, que recibe como parámetro el value 
        let user = users.find(user => {
            return user.email == value //Si existe este usuario en nuestra base de datos
        })

        if(user){
            return false //En el caso de que no esté el usuario en la base de datos tirará el mensaje de que ya está registrado el email
        }else{
            return true
        }
    }).withMessage('Este email ya está registrado'),

    check('pass1')
    .notEmpty()
    .withMessage('Debes escribir tu contraseña')
    .isLength({ //largo de carácteres
        min: 6,
        max: 10
    })
    .withMessage('La contraseña debe tener entre 6 y 10 carácteres'),

    body('pass2').custom((value, {req}) => value !== req.body.pass1 ? false : true) //pass1 es comparado con pass2
    .withMessage('Las contraseñas no coinciden'),

    check('terms')
    .isString('on') //Si tiene este string "on" estaria bien
    .withMessage('Debes aceptar los términos y condiciones')

]