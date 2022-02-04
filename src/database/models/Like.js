module.exports = (sequelize, dataTypes) => {
    const alias = "Like";
    const cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        likeBoolean:{
            type: dataTypes.BOOLEAN
        },
        productId: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false 
        },
        userId:{
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false 
        }

    }

    const config = {
        tableName: 'likes',
        timestamps: false
    }

    const Likes = sequelize.define(alias, cols, config)

    Likes.associate = (models) => {
        Likes.belongsTo(models.User, {
            as: "user",
            foreignKey: 'userId'
        })
        Likes.belongsTo(models.Product, {
            as: "product",
            foreignKey: 'productId'
        })

        
    }

    return Likes
}