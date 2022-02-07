const { check, body } = require('express-validator'); //Requiero express-validator, desestructuro y pido el método check
//const { users } = require('../data/dataBase');
const bcrypt = require('bcryptjs');
const db = require('../database/models');
const Users = db.User;


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
        return Users.findOne({
            where: {
                email: req.body.email
            }
        })
    
    .then(user => {
        if(!bcrypt.compareSync(req.body.pass, user.dataValues.pass)){
            return Promise.reject()
        }
    })
    .catch(() => {
        return Promise.reject("Credenciales inválidas")
    })
})
]

/* if(fs.existsSync("./public/images/products/", product.img) && (product.img != "default-image.jpg")){ 
    fs.unlinkSync(`./public/images/products/${product.img}`)
} */
