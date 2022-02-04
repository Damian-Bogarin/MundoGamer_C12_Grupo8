module.exports = (sequelize, dataTypes) => {
    const alias = "Clasification";
    const cols = {

        //--------------------
        // FALTA PRODUCT ID
        //---------------------
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nameClassification:{
            type: dataTypes.STRING
        },
        productId:{ // FALTA ESTE EN LA TABLA DE CLASIFICATION
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