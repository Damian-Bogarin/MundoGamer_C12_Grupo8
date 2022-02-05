module.exports = (sequelize, dataTypes) => {
    const alias = "Cart";
    const cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        orderId:{
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false 
        },
        userId:{
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false 
        }

    }

    const config = {
        tableName: 'cart',
        timestamps: false
    }

    const Cart = sequelize.define(alias, cols, config)

    Cart.associate = (models) => {
        Cart.belongsTo(models.User, {
            as: "user",
            foreignKey: 'userId'
        })
        Cart.hasMany(models.Order, {
            as: "order",
            foreignKey: 'cartId'
        })
        
    }

    return Cart
}