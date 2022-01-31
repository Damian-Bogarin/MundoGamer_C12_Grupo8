module.exports = (sequelize, dataTypes) => {

    const alias = "Rol";

    const cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            //autoincrement: true, /* --------------------- */
            allowNull: false
        },
        nameRol: {
            type: dataTypes.STRING(60),
            allowNull: false
        },
        userId: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
            foreignKey: true /* ----------- */
        }
    }

    const config = {
        tableName: 'rol_user'
    }

    const Rol = sequelize.define(alias, cols, config)

    Rol.associate = function(models) {
        
    }

    return Rol;

}