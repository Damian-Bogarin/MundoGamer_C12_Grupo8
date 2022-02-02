module.exports = (sequelize, dataTypes) => {
    const alias = "order";
    const cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        queantity:{
            type: dataTypes.STRING.UNSIGNED,

        },
        totalPrice: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        date: {
            type: dataTypes.DATE
        },
        totalDescount:{
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        cartId:{
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false 
        },

    }

    const config = {
        tableName: 'orders',
    }

    const Order = sequelize.define(alias, cols, config)

    Order.associate = (models) => {
        
    }

    return Order
}