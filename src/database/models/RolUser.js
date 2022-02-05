module.exports = (sequelize, dataTypes) => {

    const alias = "RolUser";

    const cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nameRol:{
            type: dataTypes.STRING(60),  
            allowNull: false
        },
        userId:{
            type: dataTypes.INTEGER(11),
            foreignKey: true,
            allowNull: false 
        }

    }

    const config = {
        tableName: 'rol_user',
        timestamps: false
    }

    const RolUser = sequelize.define(alias, cols, config)

    RolUser.associate = (models) => {
        RolUser.belongsTo(models.User, {
            as: "user",
            foreignKey: 'userId'
        })
    }

    return RolUser;
}