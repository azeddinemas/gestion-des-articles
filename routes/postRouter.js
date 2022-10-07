const post= require('../controllers/PostController');
const home= require('../controllers/HomePageController');
const categorie = require('../controllers/CategorieController');
const {Router} = require('express');
const app = require('express')();



const route = Router()

route.post('/addpost', post.AddPost );
route.get('/', home.index );
route.get('/dashboard', home.dashboard );

route.get('/articles', home.articles );
route.get('/articles', post.GetAllPost );
route.get('/addpost', home.addPost );


// route.get('/getAllcategorie', categorie.getAllCategorie );
route.post('/categories', categorie.AddCategorie );
route.get('/categories', categorie.getAllCategorie );
route.post('/categories/:id', categorie.deletecategorie)
route.post('/categorie/:id', categorie.getonecategorie)

module.exports = route