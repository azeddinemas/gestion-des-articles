const db = require('../config/dbConfig');
const {Sequelize, DataTypes } = require('sequelize');
    const Post = db.define("post", {
       
        title: {
            type: DataTypes.STRING,
        },
        body: {
            type: DataTypes.TEXT
        },

        categorie: {
            type: DataTypes.STRING
        },
       
       
    
    })


    module.exports = Post;
