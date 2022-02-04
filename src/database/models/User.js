module.exports = (sequelize, dataTypes) => {
    const alias = "User";
    //-------------------------
//   FALTA CARTID
    //----------------------
    const cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED, // preguntar a jannete
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: dataTypes.STRING(50),
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
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        address:{
            type: dataTypes.STRING(45),
            allowNull: true,

        },
        rolId: { //rolId  1 -admin  2 - client
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false 
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

        //cartId:{

        



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
       /*  User.hasOne(models.RolUser, {
            as: "rol",
            foreignKey: 'rol'
        }) */
        User.hasMany(models.Stars, {
            as: "stars",
            foreignKey: 'userId'
        })
        User.belongsTo(models.RolUser, {
            as: "rol",
            foreignKey: 'rolId'
        })
        

        
    }

    return User
}