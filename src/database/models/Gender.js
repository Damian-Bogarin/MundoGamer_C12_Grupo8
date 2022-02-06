module.exports = (sequelize, dataTypes) => {
    const alias = "Gender";
    const cols = {

        //--------------
        // FALTA PRODUCT ID
        //------------------
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nameGender:{
            type: dataTypes.STRING
        },
         productId:{ // borro esto ??
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
        Genders.hasMany(models.Product,{ //este lo dejo
            as:'gender',
            foreignKey: 'genderId'
        })
         Genders.belongsTo(models.Product,{ //este lo borro
            as:'product',
            foreignKey: 'productId'
        }) 
    }

    return Genders
}