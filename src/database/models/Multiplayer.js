module.exports = (sequelize, dataTypes) => {
    const alias = "Multiplayer";
    const cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        type: {
            type:dataTypes.STRING,
            allowNull:false
        }

    }

    const config = {
        tableName: 'multiplayers',
        timestamps: false
    }

    const Multiplayer = sequelize.define(alias, cols, config)

    Multiplayer.associate = (models) => {
        Multiplayer.belongsToMany(models.Product, {
            as: 'product',
            through: 'multiplayer_product',
            foreignKey: 'multiplayerId',
            otherKey:'productId',
            timestamps:false
        })
        
    }

    return Multiplayer
}