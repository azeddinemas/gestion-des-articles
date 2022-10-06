const db = require('../config/dbConfig');
const { DataTypes } = require('sequelize');

const commentair = db.define("commentair", {
    name: {
        type: DataTypes.STRING
    },
    commentair: {
        type: DataTypes.STRING
    }
});

module.exports = commentair;