
module.exports = (sequelize, dataTypes) => {
    const alias = "CompatibilityProduct";
    const cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        productId: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false 
        },
        compatibilityId:{
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false 
        }

    }

    const config = {
        tableName: 'compatibility_product',
        timestamps: false
    }

    const CompatibilityProduct = sequelize.define(alias, cols, config)

    CompatibilityProduct.associate = (models) => {
        CompatibilityProduct.belongsTo(models.Product, {
            as: 'product',
            foreignKey: 'productId'
        })
    CompatibilityProduct.belongsTo(models.Compatibility, { 
        as: 'compatibility',
        foreignKey: 'compatibilityId'
    })   
     } 
    return CompatibilityProduct
}