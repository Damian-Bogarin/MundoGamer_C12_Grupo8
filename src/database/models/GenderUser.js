module.exports = (sequelize, dataTypes) => {
    const alias = "GenderUser";
    const cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        userId:{ 
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false 
        },
        genderId: {  
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false 
        }

    }

    const config = {
        tableName: 'gender_user',
        timestamps: false
    }

    const GenderUser = sequelize.define(alias, cols, config)

    GenderUser.associate = (models) => {
        GenderUser.belongsTo(models.User, {
            as: "user",
            foreignKey: 'userId'
        })
        GenderUser.belongsTo(models.Gender, { 
            as: 'gender',
            foreignKey: 'genderId'
        })   
    }

    return GenderUser
}