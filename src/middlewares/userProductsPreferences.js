const db = require('../database/models')

// Llamo a los modelos
const Products = db.Product; 
const CompatibilityProduct = db.CompatibilityProduct
const LanguageProduct = db.LanguageProduct
const MultiplayerProduct = db.MultiplayerProduct
const SubtitleProduct = db.SubtitleProduct
const GenderUser = db.GenderUser
const UserPreferences = db.UserPreferences

function userProductsPreferences (req,res,next){
    if(req.session.user && req.session.user.rol == "ROL_USER"){


        let productResult

        Products.findOne({
            where: {id: req.params.id},
            include: [{ association: 'gender'}]
        })
        .then((product)=>{
            
            productResult = product
            UserPreferences.findOne({
            where:{
                userId: req.session.user.id,
                genderId: product.gender.id,
                productId: product.id
            }}).then((result)=>{
           //console.log(result)
              if (result == null){
                UserPreferences.create({
                    userId: req.session.user.id,
                    genderId: productResult.gender.id,
                    productId: product.id,
                    views: 1,
                    buy: 0,
                    likes: 0,
                })
            }else{
                sumarviews = result.views + 1
                UserPreferences.update({                 
                     views: sumarviews
                },
                {
                    where: {
                        userId: req.session.user.id,
                        genderId: productResult.gender.id,
                        productId: product.id}
                })
            }
        })
            
         })    
        .then((nose)=>{
            next()
        })

    }
    else{
        next()
    }
}



module.exports = userProductsPreferences