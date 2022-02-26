module.exports = (sequelize, dataTypes) => {
    
    const alias = "UserPreferences";

    const cols = {
        id: {
            type: dataTypes.INTEGER(11), 
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        userId:{ 
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false 
        },
        genderId: {  
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false 
        },
        productId: {  
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false 
        },
        views: {
            type: dataTypes.INTEGER(11),
            //allowNull: false,
        },
        stars: {
            type: dataTypes.INTEGER(11),
            //allowNull: false
        },
        likes: {
            type: dataTypes.INTEGER(11),
            //allowNull: false
        },
        buy: {
            type: dataTypes.INTEGER(11)
            /* allowNull: false */
        }
        
    }

    const config = {
        tableName: 'user_preferences',
        timestamps: false
    }

    const UserPreferences = sequelize.define(alias, cols, config)

    UserPreferences.associate = (models) => {

        
        UserPreferences.belongsTo(models.Gender, {
            as: "gender",
            foreignKey: 'genderId' 
        }) 
        UserPreferences.belongsTo(models.Product, {
            as: "product",
            foreignKey: 'productId' 
        })
        UserPreferences.belongsTo(models.User, {
            as: "user",
            foreignKey: 'userId' 
        })  
        
    }

    return UserPreferences;
} 