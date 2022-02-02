module.exports = (sequelize, dataTypes) => {
    const alias = "gender";
    const cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nameGender:{
            type: dataTypes.STRING
        }

    }

    const config = {
        tableName: 'genders',
        timestamps: false
    }

    const Genders = sequelize.define(alias, cols, config)

    Genders.associate = (models) => {
        
    }

    return Genders
}