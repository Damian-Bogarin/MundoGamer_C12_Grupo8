module.exports = (sequelize, dataTypes) => {
    const alias = "Product";
    const cols = {
        
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false 
        },
        name: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
         description: {
            type: dataTypes.STRING(250),
        },
       
         date:{
            type: dataTypes.DATEONLY,
            allowNull: true
        },
       /*  compatibilityId:{ //falta la tabla intermedia pc, play 1-productos productos-play1 play 2 
            type: dataTypes.INTEGER,
            allowNull: false
        }, */
        conexion:{ // USA O NO INTERNET
            type: dataTypes.BOOLEAN,
            allowNull:false,

        },
        integratedShop:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
       
        price: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        priceEnd:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        sold:{
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        descount: {
            type: dataTypes.INTEGER,
            allowNull: true
        },
        stock:{
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull:true,
        },
       
        genderId: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        classificationId: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
        
        
    }

    const config = {
        tableName: 'products',
        timestamps: true 
    }

    const Products = sequelize.define(alias, cols, config)

    Products.associate = (models) => {
        Products.hasOne(models.Photo,{
            as:'photo',
            foreignKey: 'productId'
        })
        Products.hasMany( models.Like, {
            as:'likes',
            foreignKey: 'productId'
        })
        Products.hasMany( models.Stars, {
            as:'stars',
            foreignKey: 'productId'
        })
        Products.hasOne( models.Gender, {
            as:'genderproduct', // este borro?
            foreignKey: 'productId'
        })

         Products.belongsTo(models.Gender, { // 
            as: 'gender',
            foreignKey: 'genderId'
        }) 
         Products.belongsTo(models.Clasification, {  //ACA
            as: "clasification",
            foreignKey: 'classificationId'
        }) 
        Products.belongsToMany(models.Multiplayer, {
            as: 'multiplayer',
            through: 'multiplayer_product',
            foreignKey: 'productId',
            otherKey:'multiplayerId',
            timestamps:false
        })
        Products.belongsToMany(models.Order, {
            as: 'order',
            through: 'order_product',
            foreignKey: 'productId',
            otherKey:'orderId',
            timestamps:false
        })
        Products.belongsToMany(models.Language, {
            as: 'language',
            through: 'language_product',
            foreignKey: 'productId',
            otherKey:'languageId',
            timestamps:false
        })
        }


    return Products
}