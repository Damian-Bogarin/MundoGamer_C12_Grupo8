module.exports = (sequelize, dataTypes) => {
    const alias = "product";
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
            allowNull:false
        },
        compatibilityId:{ //falta la tabla intermedia
            type: dataTypes.INTEGER,
            allowNull: false
        },
        conexion:{
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
        Products.hasMany( models.Like, {
            as:'likes',
            foreignKey: 'productId'
        })
        Products.hasMany( models.Stars, {
            as:'likes',
            foreignKey: 'productId'
        })
        Products.belongsTo(models.Gender, {
            as: "gender",
            foreignKey: 'genderId'
        })
        Products.belongsTo(models.Clasification, {
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
        Products.belongsTo(models.Gender,{
            as:'gender',
            foreignKey: 'genderId'

        })
        Products.hasOne(models.Gender,{
            as: 'gender',
            foreignKey: 'productId'

        })
        Products.hasOne(models.Clasification,{
            as: 'clasification',
            foreignKey: 'productId'

        })
        }


    return Products
}