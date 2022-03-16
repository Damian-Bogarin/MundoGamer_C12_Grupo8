
const db = require('../../database/models');

// Llamo a los modelos
const Products = db.Product;
const CompatibilityProduct = db.CompatibilityProduct
const LanguageProduct = db.LanguageProduct
const MultiplayerProduct = db.MultiplayerProduct
const SubtitleProduct = db.SubtitleProduct
const UserPreferences = db.UserPreferences
const Notification = db.Notification
//llamo al operador para OR y AND
//operador para los where
const Op = db.Sequelize.Op

let controller = {

    notification: (req,res)=>{

      if(req.session.user){  
          userId = req.session.user.id

        Notification.findAll({
            where:{
                userId: userId
            }
        })
        .then(result =>{
            res.json(result)
        
        })}

    }
}


module.exports = controller


