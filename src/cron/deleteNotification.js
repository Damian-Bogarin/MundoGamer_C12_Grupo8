

const db = require('../database/models');
const Users = db.User;
const Products = db.Product;
const CompatibilityProduct = db.CompatibilityProduct
const LanguageProduct = db.LanguageProduct
const MultiplayerProduct = db.MultiplayerProduct
const SubtitleProduct = db.SubtitleProduct
const UserPreferences = db.UserPreferences
const CartShop = db.CartShop
const Notification = db.Notification

module.exports = function(){
    
    Notification.destroy({
        where: {
            see: 1
        }
    })
}


