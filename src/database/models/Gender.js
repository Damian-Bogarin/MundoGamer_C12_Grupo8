module.exports = (sequelize, dataTypes) => {
    const alias = "Gender";
    const cols = {

 
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nameGender:{
            type: dataTypes.STRING
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
        Genders.belongsToMany(models.User, {
            as: 'user',
            through: 'gender_user',
            foreignKey: 'genderId',
            otherKey:'userId',
            timestamps:false
        })

    }

    return Genders
}