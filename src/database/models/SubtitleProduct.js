module.exports = (sequelize, dataTypes) => {
    const alias = "SubtitleProduct";
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
        subtitleId: {  
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false 
        }

    }

    const config = {
        tableName: 'subtitle_product',
        timestamps: false
    }

    const SubtitleProduct = sequelize.define(alias, cols, config)

    SubtitleProduct.associate = (models) => {
        SubtitleProduct.belongsTo(models.Product, {
            as: "product",
            foreignKey: 'productId'
        })
        SubtitleProduct.belongsTo(models.Subtitle, { 
            as: 'subtitle',
            foreignKey: 'subtitleId'
        })   
    }

    return SubtitleProduct
}