module.exports = (sequelize, dataTypes) => {
    const alias = "multiplayer";
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
            as: 'multiplayer',
            through: 'multiplayer_product',
            foreignKey: 'productId',
            otherKey:'multiplayerId',
            timestamps:false
        })
        
    }

    return Multiplayer
}