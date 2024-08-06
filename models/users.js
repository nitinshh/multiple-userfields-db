module.exports = (Sequelize, sequelize, DataTypes) => {
    return sequelize.define("users", {
        ...require('./cors') (Sequelize, DataTypes),

        batch : {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        tableName:"users"
    });
}