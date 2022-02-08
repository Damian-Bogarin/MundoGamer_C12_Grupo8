module.exports = (sequelize, dataTypes) => {
    const alias = "Subtitle";
    const cols = {

        
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nameLanguage: { //en la data BAse debo cambiarlo a nameSubtitle
            type: dataTypes.STRING,
            allowNull: false
        }

    }

    const config = {
        tableName: 'subtitles',
        timestamps: false
    }

    const Subtitle = sequelize.define(alias, cols, config)

    Subtitle.associate = (models) => {
        Subtitle.belongsToMany(models.Product, {
            as: 'product',
            through: 'subtitle_product',
            foreignKey: 'subtitleId',
            otherKey:'productId',
            timestamps:false
        })
    }

    return Subtitle
}