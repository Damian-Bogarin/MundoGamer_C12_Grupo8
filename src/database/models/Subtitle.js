module.exports = (sequelize, dataTypes) => {
    const alias = "Subtitle";
    const cols = {

        // FALTA LA TABLA PIVOT SUBTITLE-PRODUCT
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nameSubtitle: {
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