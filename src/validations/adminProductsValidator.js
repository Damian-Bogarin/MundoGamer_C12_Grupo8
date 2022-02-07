const { check, body } = require('express-validator')
const req = require('express/lib/request')

module.exports = [
    check('name')
    .notEmpty()
    .withMessage('El campo nombre es obligatorio')
    /* .isLength({ min: 4, max: 50 })
    .withMessage('El nombre tiene que tener entre 4 y 50 caracteres') */
    /* .isAlphanumeric()
    .withMessage('Ingresa un nombre válido')*/, 

    check('gender')
    .notEmpty()
    .withMessage('Debes elegir una categoría').bail()
    .isIn(["1","2","3", "4", "5","6", "7", "8"])
    .withMessage('Debes elegir una categoría')
,
    /* check('stars')
    .notEmpty()
    .withMessage('Debes elegir un nivel de estrellas'), */

    check('clasification')
    .notEmpty()
    .withMessage('Debes elegir una clasificación')
    .isIn(["1","2","3", "4"]) //este es el validator de CLASIFICATION
    .withMessage('Debes elegir una clasificación'),

    check('console')
    .notEmpty()
    .withMessage('Debes elegir almenos una consola compatible'),
    
    check('language')
    .notEmpty()
    .withMessage('Debes elegir almenos un idioma'),


    check('conexion')
    .notEmpty()
    .withMessage('Debes elegir una opción'),

    check('integratedShopping')
    .notEmpty()
    .withMessage('Debes elegir una opción')
    ,
    check('multiplayer')
    .notEmpty()
    .withMessage('Debes elegir una opción')
    ,

    check('stock')
    .notEmpty()
    .withMessage('Debes escribir la cantidad a ingresar').bail()
    .isNumeric( {min: 1})
    .withMessage('Sólo números mayores a 0')
    
    ,

    check('price')
    .notEmpty()
    .withMessage('Debes ingresar un precio').bail()
    .isNumeric()
    .withMessage('Sólo números'),

     body('descount')
        .custom((value, {req}) => {
            if(req.body.descount < 100){
                return true
            } else 
                return false
            
        }).withMessage('La oferta no puede ser mayor al 100%'), 
   
   
      

    check('description')
    .isLength({ min: 10 , max: 5000 })
    .withMessage('La descripción tiene que tener almenos 10 hasta 5000 caracteres')

]