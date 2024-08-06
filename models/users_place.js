module.exports = (Sequelize, sequelize, DataTypes) => {
    return sequelize.define("users_place", {
        ...require('./cors') (Sequelize, DataTypes),

        place : {
            type: DataTypes.STRING(255),
            allowNull: false
        }
    });
}