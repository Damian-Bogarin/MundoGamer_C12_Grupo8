

module.exports = (sequelize, dataTypes) => {
    const alias = "language_product";
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
        
    }

    return LanguageProduct
}