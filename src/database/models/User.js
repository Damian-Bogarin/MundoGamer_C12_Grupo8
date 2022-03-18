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
        },
        province: {
            type: dataTypes.STRING(100),
        },
        locality: {
            type: dataTypes.STRING(100),
        },
        tel: {
            type: dataTypes.STRING(50),
            //allowNull: false,
        },
        age: {
            type: dataTypes.DATE,
            //allowNull: false
        },
        avatar:{
            type: dataTypes.STRING(100),
            //allowNull: false 
        },
        rol_id: {
            type: dataTypes.INTEGER(10).UNSIGNED, 
            foreignKey: true,
            allowNull: false 
        },
       
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
        User.belongsToMany(models.Gender, {
            as: 'gender',
            through: 'gender_user',
            foreignKey: 'userId',
            otherKey:'genderId',
            timestamps:false
        })
    }

    return User;
} 