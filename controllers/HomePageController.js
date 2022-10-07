const express = require('express');
const app = express();
app.set('view engine', 'ejs');


const index = (req, res) => {
    res.render("../views/pages/home.ejs");
};


const dashboard = (req, res) => {
    res.render("../views/pages/dashboard.ejs");
};

const categories = (req, res) => {
    res.render("../views/pages/categories.ejs");
};

const articles = (req, res) => {
    res.render("../views/pages/Articles.ejs");
};

const addPost = (req, res) => {
    res.render("../views/pages/addPost.ejs");
};



const visiteur = (req, res) => {
    res.render('../views/pages/visiteur.ejs')
}
const commentair = (req, res) => {
    res.render('../views/pages/commentair.ejs')
}











module.exports = {
    index,
    dashboard,
    categories,
    articles,
    addPost,
    visiteur,
    commentair,
}