module.exports = (sequelize, dataTypes) => {
    
    const alias = "User";

    const cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoincrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        last_name: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(50),
            unique: true,
            allowNull: false
        },
        pass: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        address: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        city: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        tel: {
            type: dataTypes.STRING(50)
        },
        age: {
            type: dataTypes.STRING(2),
            allowNull: false
        },
        createdAt: {
            type: dataTypes.TIMESTAMP,
            allowNull: false
        },
        updatedAt: {
            type: dataTypes.TIMESTAMP,
            allowNull: false
        },
        rol: {
            type: dataTypes.INTEGER(3),
            allowNull: false
        },
        avatar: {
            type: dataTypes.STRING(100)
        }
    }

    const config = {
        tableName: 'users'
    }

    const User = sequelize.define(alias, cols, config)

    /* Asociación */
    User.associate = function(models) {
        /* un usuario pertenece a un rol */
    }

    return User;
}