module.exports = (sequelize, dataTypes) => {
    const alias = "clasification";
    const cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nameClassification:{
            type: dataTypes.STRING
        },
        productId:{ // FALTA ESTE EN LA TABLA DE GENDER
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false 
        }

    }

    const config = {
        tableName: 'classifications',
        timestamps: false
    }

    const Clasification = sequelize.define(alias, cols, config)

    Clasification.associate = (models) => {
        Clasification.hasMany(models.Product,{
            as:'product',
            foreignKey: 'classificationId'
        })
    }

    return Clasification
}