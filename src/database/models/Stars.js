const { products } = require("../../data/dataBase");

module.exports = (sequelize, dataTypes) => {
    const alias = "Stars";
    const cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        value:{
            type: dataTypes.INTEGER,

        },
        productId:{
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false 
        },
        userId:{
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false 
        }

    }

    const config = {
        tableName: 'starts',
        timestamps: false
    }

    const Stars = sequelize.define(alias, cols, config)

    Stars.associate = (models) => {
        Stars.belongsTo(models.User, {
            as: "user",
            foreignKey: 'userId'
        })
        Stars.belongsTo(models.Product, {
            as: "product",
            foreignKey: 'productId'
        })
    }

    return Stars
}