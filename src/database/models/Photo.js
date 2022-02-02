

module.exports = (sequelize, dataTypes) => {
    const alias = "photo";
    const cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        image:{
            type: dataTypes.STRING,

        },
        productId:{
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false 
        }
    }

    const config = {
        tableName: 'photo',
        timestamps: false
    }

    const Photo = sequelize.define(alias, cols, config)

    Photo.associate = (models) => {
        
    }

    return Photo
}