const db = require('../config/dbConfig');
const {Sequelize, DataTypes } = require('sequelize');
    const Categorie = db.define("categorie", {
       
        title: {
            type: DataTypes.STRING,
        },
    
    })


    module.exports = Categorie;