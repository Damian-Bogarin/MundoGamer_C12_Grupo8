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