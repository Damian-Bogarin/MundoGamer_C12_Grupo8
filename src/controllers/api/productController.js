

const db = require('../../database/models');

// Llamo a los modelos
const Products = db.Product;
const CompatibilityProduct = db.CompatibilityProduct
const LanguageProduct = db.LanguageProduct
const MultiplayerProduct = db.MultiplayerProduct
const SubtitleProduct = db.SubtitleProduct
const UserPreferences = db.UserPreferences
//llamo al operador para OR y AND
//operador para los where
const Op = db.Sequelize.Op

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
stars: (req,res) =>{
    let id = req.params.id
    let user = req.session.user.id
    let value = req.params.value

   
    
 
    UserPreferences.update({
        stars: value
    },{
        where: {
            productId: id,
            userId: user
        }
    }
    )
    }
    


,

create: (req, res) =>{
    Products.findAll({
        include: [{ association: 'gender'}]
    })
    .then(result =>{
        res.json(result)
    
    })
},

category: (req, res) =>{
    //extraigo los valores de la query
     let {g, c, l, s, min,max} = req.query
     
    let queryObject = {};
    queryObject.where = {}
    queryObject.include = [] //  aca podrian ir los include

    //si g (GENDER) existe, pregunto si es UN solo gender o, si es un array, le sumo el Op.or
    if(g){
        g.length == 1 ? queryObject.where.genderId = g : queryObject.where.genderId = {[Op.or]: g}
        
    }
    if(c){
        //   si el length es 1, solo hago un where, si son muchos, hago un include, association compatibility, where: (como son muchos, uso el Op.or y le paso el array "c")
        c.length == 1 ? queryObject.include.push({association: "compatibility", where:{id: c}}) : queryObject.include.push({association: "compatibility", where:{id: {[Op.or] : c}}})
       

    }
    if(l){
        //   si el length es 1, solo hago un where, si son muchos, hago un include, association compatibility, where: (como son muchos, uso el Op.or y le paso el array "c")
        l.length == 1 ? queryObject.include.push({association: "language", where:{id: l}}) : queryObject.include.push({association: "language", where:{id: {[Op.or] : l}}})
       

    }
    if(s){
        //   si el length es 1, solo hago un where, si son muchos, hago un include, association compatibility, where: (como son muchos, uso el Op.or y le paso el array "c")
        s.length == 1 ? queryObject.include.push({association: "subtitle", where:{id: s}}) : queryObject.include.push({association: "subtitle", where:{id: {[Op.or] : s}}})
       

    }
    if(min){
        queryObject.where.priceEnd = {[Op.gte]: min};
    }

    if(max){
        queryObject.where.priceEnd = {[Op.lte]: max};
    }


    
    console.log(queryObject)
     Products.findAll(queryObject)
     .then(result =>{
        res.json(result)
    
    })
   
}


}

module.exports = controller


