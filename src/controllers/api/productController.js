

const db = require('../../database/models');

// Llamo a los modelos
const Products = db.Product;
const CompatibilityProduct = db.CompatibilityProduct
const LanguageProduct = db.LanguageProduct
const MultiplayerProduct = db.MultiplayerProduct
const SubtitleProduct = db.SubtitleProduct
const UserPreferences = db.UserPreferences


let controller = {

    
like: (req, res) =>{

    let id = req.params.id
    let user = req.session.user.id

   
    
    UserPreferences.findOne({
        where: {
            productId: id,
            userId: user
        }
    })
    .then((result) => {
    let value
    if(result.likes == 0){
        value = 1
    }
    else{ value = 0}
    UserPreferences.update({
        likes: value
    },{
        where: {
            productId: id,
            userId: user
        }
    }
    )
    })
    
      
    

},

create: (req, res) =>{
    Products.findAll({
        include: [{ association: 'gender'}]
    })
    .then(result =>{
        res.json(result)
    
    })
}


}

module.exports = controller


