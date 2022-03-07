const { check, body } = require('express-validator');

const db = require('../database/models');
const Users = db.User;

module.exports = [

    check('name')
    .notEmpty()
    .withMessage('Debes ingresar tu nombre'),

    check('lastName')
    .notEmpty()
    .withMessage('Debes ingresar tu apellido'), 

    check('email')
    .notEmpty()  
    .withMessage('Debes ingresar un e-mail') 
    .bail()  
    .isEmail()
    .withMessage('Debes ingresar un e-mail válido'),

    body('email').custom((value) => { //custom recibe como parámetro un collback, que recibe como parámetro el value 
        return Users.findOne({
            where: {
                email: value,
            }
        })
        .then((user) => {
            if(user){
            return Promise.reject('Este email ya está registrado')
            }
        })
    }),

    check('pass1')
    .notEmpty()
    .withMessage('Debes escribir tu contraseña')
   /*  .isLength({   //revisar aca
        min: 6,
        max: 10
    })  */
    .withMessage('La contraseña debe tener entre 6 y 10 carácteres'),

    body('pass2').custom((value, {req}) => value !== req.body.pass1 ? false : true) //pass1 es comparado con pass2
    .withMessage('Las contraseñas no coinciden'),

    check('terms')
    .isString('on') //Si tiene este string "on" estaria bien
    .withMessage('Debes aceptar los términos y condiciones')

]
