module.exports = (sequelize, dataTypes) => {
    
    const alias = "User";

    const cols = {
        id: {
            type: dataTypes.INTEGER(11), 
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: dataTypes.STRING(50),
            allowNull: false,
        },
        lastName: {
            type: dataTypes.STRING(50),
            allowNull: false,
        },
        email: {
            type: dataTypes.STRING(50),
            unique: true,
            allowNull: false
        },
        pass: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        address: {
            type: dataTypes.STRING(100),
            allowNull: false,

        },
        city: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        tel: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        age: {
            type: dataTypes.STRING(2),
            allowNull: false
        },
        rol: {
            type: dataTypes.INTEGER(3), 
            allowNull: false,
        },
        avatar:{
            type: dataTypes.STRING(100),
            allowNull: false
        }
    }

    const config = {
        tableName: 'users',
        timestamps: true
    }

    const User = sequelize.define(alias, cols, config)

    User.associate = (models) => {

        User.hasOne(models.Cart, {
            as: "cart",
            foreignKey: 'userId'
        })
        User.hasMany(models.Like, {
            as: "likes",
            foreignKey: 'userId'
        })
        User.hasMany(models.Stars, {
            as: "stars",
            foreignKey: 'userId'
        })
        User.belongsTo(models.RolUser, {
            as: "Rol",  /* Rol */
            foreignKey: 'userId'
        })
    }

    return User;
}