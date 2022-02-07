module.exports = (sequelize, dataTypes) => {
    const alias = "Compatibility";
    const cols = {
        
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nameCompatibility:{
            type: dataTypes.STRING,
            allowNull:false
        }
    }

    const config = {
        tableName: 'compatibility',
        timestamps: false
    }

    const Compatibility = sequelize.define(alias, cols, config)

    Compatibility.associate = (models) => {
        Compatibility.belongsToMany(models.Product, {
            as: 'product',
            through: 'compatibility_product',
            foreignKey: 'compatibilityId',
            otherKey:'productId',
            timestamps:false
        })

        
    }
      return Compatibility
}