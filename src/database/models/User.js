module.exports = (sequelize, dataTypes) => {
    const alias = "user";
    const cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: dataTypes.STRING(45),
            allowNull: false,
        },
        lastName: {
            type: dataTypes.STRING(45),
            allowNull: false,
        },
        email: {
            type: dataTypes.STRING(45),
            allowNull: false,
            unique: true
        },
        pass: {
            type: dataTypes.STRING(45),
            allowNull: false,
        },
        address:{
            type: dataTypes.STRING(45),
            allowNull: true,

        },
        rol: {
            type: dataTypes.STRING(6), 
            allowNull: false,
        },
        tel: {
            type: dataTypes.STRING(45),
            unique: true
        },
        age:{
            type: dataTypes.INTEGER,

        },
        avatar:{
            type: dataTypes.STRING(45)
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

    return User
}