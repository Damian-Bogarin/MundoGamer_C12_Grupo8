/* module.exports = (sequelize, dataTypes) => {
    const alias = "avatar";
    const cols = {
        id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },

    }

    const config = {
        tableName: '',
    }

    const User = sequelize.define(alias, cols, config)

    User.associate = (models) => {
        
    }

    return User
} */