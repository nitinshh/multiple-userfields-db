module.exports = (Sequelize, sequelize, DataTypes) => {
    return sequelize.define("users_work", {
        ...require('./cors') (Sequelize, DataTypes),

        age : {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
}