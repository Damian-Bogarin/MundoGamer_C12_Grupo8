module.exports = (sequelize, dataTypes) => {
    const alias = "multiplayer_product";
    const cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        productId:{ 
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false 
        },
        multiplayerId: {  
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false 
        }

    }

    const config = {
        tableName: 'multiplayer_product',
        timestamps: false
    }

    const MultiplayerProduct = sequelize.define(alias, cols, config)

    MultiplayerProduct.associate = (models) => {
        
    }

    return MultiplayerProduct
}