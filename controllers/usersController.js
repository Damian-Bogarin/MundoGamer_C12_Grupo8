/* const { users } = require('../data/dataBase'); */

let controller = {

    login: (req, res) => {
        res.render('users/login')
    },
    register: (req, res) => {
        res.render('users/register')
    },
    profile: (req, res) => {
        res.render('users/myProfile')
    },
    cart: (req, res) => {
        res.render('users/productCart')
    }
};


module.exports = controller;