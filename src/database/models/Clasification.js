module.exports = (sequelize, dataTypes) => {
    const alias = "clasification";
    const cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nameClassification:{
            type: dataTypes.STRING
        }

    }

    const config = {
        tableName: 'classifications',
        timestamps: false
    }

    const Clasification = sequelize.define(alias, cols, config)

    Clasification.associate = (models) => {
        
    }

    return Clasification
}