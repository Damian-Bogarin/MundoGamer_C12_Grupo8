module.exports = (sequelize, dataTypes) => {
    const alias = "gender";
    const cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nameGender:{
            type: dataTypes.STRING
        },
        productId:{ // FALTA ESTE EN LA TABLA DE GENDER
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false 
        }

    }

    const config = {
        tableName: 'genders',
        timestamps: false
    }

    const Genders = sequelize.define(alias, cols, config)

    Genders.associate = (models) => {
        Genders.hasMany(models.Product,{
            as:'product',
            foreignKey: 'genderId'
        })
        Genders.belongsTo(models.Product,{
            as:'product',
            foreignKey: 'productId'
        })
    }

    return Genders
}