module.exports = (sequelize, dataTypes) => {
    
    const alias = "CartShop";

    const cols = {
        id: {
            type: dataTypes.INTEGER(11), 
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        userId:{ 
            type: dataTypes.INTEGER(11),
            allowNull: false 
        },
        productId: {  
            type: dataTypes.INTEGER(11),
            allowNull: false 
        },
        quantity: {
            type: dataTypes.INTEGER(11),
            //allowNull: false,
        }
        
    }

    const config = {
        tableName: 'cartShop',
        timestamps: false
    }

    const CartShop = sequelize.define(alias, cols, config)

    CartShop.associate = (models) => {

        
        CartShop.belongsTo(models.Product, {
            as: "product",
            foreignKey: 'productId' 
        })
        CartShop.belongsTo(models.User, {
            as: "user",
            foreignKey: 'userId' 
        })  
        
    }

    return CartShop;
} 