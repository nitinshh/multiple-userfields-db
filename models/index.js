const Sequelize = require("sequelize");
const sequelize = require('../dbconnection').sequelize

module.exports = {
    userModel : require('./users')(Sequelize, sequelize,Sequelize.DataTypes),
    userNameModel : require('./users_name')(Sequelize, sequelize, Sequelize.DataTypes),
    userAgeModel : require('./users_age')(Sequelize, sequelize,Sequelize.DataTypes),
    userPlaceModel : require('./users_place')(Sequelize, sequelize, Sequelize.DataTypes),
    userWorkModel : require('./users_work')(Sequelize, sequelize, Sequelize.DataTypes),
};