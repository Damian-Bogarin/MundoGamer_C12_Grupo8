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
            /* allowNull: false */
        }
    }

    const config = {
        tableName: 'rols', 
        timestamps: false
    }

    const RolUser = sequelize.define(alias, cols, config)

    RolUser.associate = (models) => {
        RolUser.hasOne(models.User, {
            as: "user",
            foreignKey: 'rol_id' /* userId */
        })
    }

    return RolUser;
} 