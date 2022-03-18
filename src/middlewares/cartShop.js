const db = require('../database/models')

// Llamo a los modelos
const Products = db.Product; 
const CompatibilityProduct = db.CompatibilityProduct
const LanguageProduct = db.LanguageProduct
const MultiplayerProduct = db.MultiplayerProduct
const SubtitleProduct = db.SubtitleProduct
const GenderUser = db.GenderUser
const UserPreferences = db.UserPreferences
const CartShop = db.CartShop


function  ShopKart(req,res,next){

    let {cantidad} = req.query;
    if(req.params.product){
        CartShop.findOne({
            where:{
                userId: req.session.user.id,
                productId: req.params.product
            }    
        })
        .then( data =>{
            if(data){
                let value;
                if(cantidad){
                    value = data.quantity + cantidad
                }
                else{
                     value = data.quantity + 1
                }
                
                
                    CartShop.update({
                        quantity: value
                    },{
                        where: {
                            userId: req.session.user.id,
                            productId: req.params.product
                        }
                    }).then(data => next())
            }else{
                let value = 1;
               
                CartShop.create({
                    userId: req.session.user.id,
                    productId: req.params.product,
                    quantity: value
                }).then(data => next())

            }
        })

    }else{ next()}


}


module.exports = ShopKart