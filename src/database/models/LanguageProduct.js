

module.exports = (sequelize, dataTypes) => {
    const alias = "LanguageProduct";
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
        languageId:{
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false 
        }

    }

    const config = {
        tableName: 'language_product',
        timestamps: false
    }

    const LanguageProduct = sequelize.define(alias, cols, config)

    LanguageProduct.associate = (models) => {
        LanguageProduct.belongsTo(models.Product, {
            as: "product",
            foreignKey: 'productId'
        })
        LanguageProduct.belongsTo(models.Language, { 
            as: 'language',
            foreignKey: 'languageId'
        })   
    }

    return LanguageProduct
}