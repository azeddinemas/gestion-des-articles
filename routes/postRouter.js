const post= require('../controllers/PostController');
const home= require('../controllers/HomePageController');
const categorie = require('../controllers/CategorieController');
const {Router} = require('express');
const app = require('express')();



const route = Router()

route.post('/addpost', post.AddPost );
route.get('/', home.index );
route.get('/dashboard', home.dashboard );
route.get('/categories', home.categories );
route.get('/articles', post.GetAllPost );
route.get('/getAllcategorie', categorie.getAllCategorie );
route.post('/addcategorie', categorie.AddCategorie );

route.get('/articles', post.GetAllPost );
route.get('/addpost', post.newPost );



module.exports = route