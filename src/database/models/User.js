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
            allowNull: false,
            unique: true
        },
        pass: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        address: {
            type: dataTypes.STRING(100),
            //allowNull: false
        },
        province: {
            type: dataTypes.STRING(100),
            //allowNull: false
        },
        tel: {
            type: dataTypes.STRING(50)
            /* allowNull: false */
        },
        age: {
            type: dataTypes.STRING(2),
            //allowNull: false
        },
        rol_id: {
            type: dataTypes.INTEGER(10).UNSIGNED, 
            foreignKey: true,
           /*  allowNull: false */
        },
        avatar:{
            type: dataTypes.STRING(100)
           /*  allowNull: false */
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
            as: "rol",
            foreignKey: 'rol_id' 
        }) 
    }

    return User;
} 