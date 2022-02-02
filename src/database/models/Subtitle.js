module.exports = (sequelize, dataTypes) => {
    const alias = "subtitle";
    const cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nameLanguage: {
            type: dataTypes.STRING,
            allowNull: false
        }

    }

    const config = {
        tableName: 'subtitle',
        timestamps: false
    }

    const Subtitle = sequelize.define(alias, cols, config)

    Subtitle.associate = (models) => {
        
    }

    return Subtitle
}