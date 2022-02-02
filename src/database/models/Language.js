module.exports = (sequelize, dataTypes) => {
    const alias = "language";
    const cols = {
        
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nameLanguages:{
            type: dataTypes.STRING,
            allowNull:false
        }
    }

    const config = {
        tableName: 'languages',
        timestamps: false
    }

    const Languages = sequelize.define(alias, cols, config)

    Languages.associate = (models) => {
        
    }

    return Languages
}