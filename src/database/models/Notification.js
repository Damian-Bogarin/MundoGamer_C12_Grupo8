module.exports = (sequelize, dataTypes) => {
    
    const alias = "Notification";

    const cols = {
        id: {
            type: dataTypes.INTEGER(11), 
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        userId:{ 
            type: dataTypes.INTEGER(11),
            allowNull: false 
        },
       
        see: {
            type: dataTypes.INTEGER(11),
            //allowNull: false,
        },
        message: {
            type: dataTypes.INTEGER(11),
            //allowNull: false
        },
        link: {
            type: dataTypes.INTEGER(11),
            //allowNull: false
        }
        
    }

    const config = {
        tableName: 'notification',
        timestamps: false
    }

    const Notification = sequelize.define(alias, cols, config)

    Notification.associate = (models) => {

        Notification.belongsTo(models.User, {
            as: "user",
            foreignKey: 'userId' 
        })  
        
    }

    return Notification;
} 