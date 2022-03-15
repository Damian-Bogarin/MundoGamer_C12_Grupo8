const { check } = require('express-validator');

const db = require('../database/models');
const Users = db.User;

module.exports = [

    check('name')
    .notEmpty() /* No vacio */
    .withMessage('Debes ingresar tu nombre'),

    check('lastName')
    .notEmpty()
    .withMessage('Debes ingresar tu apellido'),

    check('age')
    .notEmpty()
    .withMessage('Debes rellenar este campo')
    .bail() /* corta la ejecución */
    .isNumeric()
    .withMessage('Debes ingresar solo números'),

    check('tel')
    .notEmpty()
    .withMessage('Debes rellenar este campo'),

    check('address')
    .notEmpty()
    .withMessage('Debes ingresar tu dirección'),

    check('province')
    .notEmpty()
    .withMessage('Debes seleccionar una provincia'),

    check('locality')
    .notEmpty()
    .withMessage('Debes seleccionar una localidad')

]

/* check('telefono')
    .isLength({min:1})
    .withMessage('Ingrese su número de teléfono, por favor.') */

  /*   module.exports = [
        check('phone')
        .isInt()
        .withMessage('Debe ingresar un numero de telefono válido'),
    
        check('dateOfBirth')
        .isDate()
        .withMessage('Debe ingresar una fecha válida'),
    
        check('address')
        .isString()
        .withMessage('Formato de dirección invalido'),
    
        check('country')
        .isString()
        .withMessage('Debe elegir un país existente'),
    
        check('province')
        .isString()
        .withMessage('Debe elegir una provincia existente'),
    
        check('city')
        .isString()
        .withMessage('Debe elegir una ciudad existente')
    ] */