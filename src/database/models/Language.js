module.exports = (sequelize, dataTypes) => {
    const alias = "Language";
    const cols = {
        
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nameLanguages:{
            type: dataTypes.STRING,
            allowNull:false
        }
    }

    const config = {
        tableName: 'languages',
        timestamps: false
    }

    const Languages = sequelize.define(alias, cols, config)

    Languages.associate = (models) => {
        Languages.belongsToMany(models.Product, {
            as: 'product',
            through: 'language_product',
            foreignKey: 'languageId',
            otherKey:'productId',
            timestamps:false
        })

        
    }

    return Languages
}