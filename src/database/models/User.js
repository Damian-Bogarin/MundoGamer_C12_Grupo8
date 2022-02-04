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
        createdAt: {
            type: dataTypes.TIMESTAMP,
            allowNull: false
        },
        updatedAt: {
            type: dataTypes.TIMESTAMP,
            allowNull: false
        },
        rol: {
            type: dataTypes.STRING(3), 
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
        User.hasOne(models.RolUser, {
            as: "rol",
            foreignKey: 'rol'
        })
        User.hasMany(models.Stars, {
            as: "stars",
            foreignKey: 'userId'
        })
        User.belongsTo(models.RolUser, {
            as: "rol",
            foreignKey: 'rol'
        })
        

        
    }

    return User;
}