module.exports = (sequelize, dataTypes) => {
    const alias = "rolUser";
    const cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nameRol:{
            type: dataTypes.STRING(6),  //puede ser "admin" o "client"
            allowNull:false
        },
        userId:{
            type: dataTypes.INTEGER(11).UNSIGNED,
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

    return RolUser
}

/* const cols = {
    id: {
        type: dataTypes.INTEGER(11).UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: dataTypes.STRING(45),
        allowNull: false,
    },
    last_name: {
        type: dataTypes.STRING(45),
        allowNull: false,
    }, 
    email: {
        type: dataTypes.STRING(60),
        allowNull: false,
        unique: true
    }, 
    pass: {
        type: dataTypes.STRING(70),
        allowNull: false,
    },  
    phone: {
        type: dataTypes.STRING(30),
    },
    rol: {
        type: dataTypes.INTEGER(2).UNSIGNED,
        allowNull: false
    },
    avatar: {
        type: dataTypes.STRING(100), 
    }

} */