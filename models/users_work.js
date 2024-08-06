module.exports = (Sequelize, sequelize, DataTypes) => {
    return sequelize.define("users_work", {
        ...require('./cors') (Sequelize, DataTypes),

        work : {
            type: DataTypes.STRING(255),
            allowNull: false
        }
    });
}