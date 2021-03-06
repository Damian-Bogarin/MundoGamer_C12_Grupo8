module.exports = (sequelize, dataTypes) => {
    const alias = "Order";
    const cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        quantity:{
            type: dataTypes.STRING,
            

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
        Order.belongsTo(models.Cart,{
            as: 'cart',
            foreignKey: 'cartId'
        })
        Order.belongsToMany(models.Product, {
            as: 'product',
            through: 'multiplayer_product',
            foreignKey: 'productId',
            otherKey:'multiplayerId',
            timestamps:false
        })
        
    }

    return Order
}