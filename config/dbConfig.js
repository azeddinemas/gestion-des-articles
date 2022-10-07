 const Sequelize = require("sequelize");
 const sequelize = new Sequelize('express-app', 'root', '', {
     host: 'localhost',
     dialect: 'mysql'
 });

 module.exports = sequelize