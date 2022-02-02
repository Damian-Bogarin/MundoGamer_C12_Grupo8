module.exports = (sequelize, dataTypes) => {
    const alias = "orderProduct";
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
        orderId:{
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false 
        },

    }

    const config = {
        tableName: 'order_product',
    }

    const orderProduct = sequelize.define(alias, cols, config)

    orderProduct.associate = (models) => {
        
    }

    return orderProduct
}