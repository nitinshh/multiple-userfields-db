module.exports = (Sequelize, sequelize, DataTypes) => {
    return sequelize.define("users_name", {
        ...require('./cors') (Sequelize, DataTypes),

        name : {
            type: DataTypes.STRING(255),
            allowNull: false
        }
    });
}