/* const { users } = require('../data/dataBase'); */

let controller = {

    login: (req, res) => {
        res.render('users/login')
    },
    processLogin: (req, res) => {

        







    },
    register: (req, res) => {
        res.render('users/register')
    },
   /*  processRegister: (req, res) => {

    }, */
    profile: (req, res) => {
        res.render('users/myProfile')
    },
    cart: (req, res) => {
        res.render('users/productCart')
    }
};


module.exports = controller;