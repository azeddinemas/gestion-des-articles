const post= require('../controllers/PostController');
const home= require('../controllers/HomePageController');
const {Router} = require('express');
const app = require('express')();


const route = Router()

route.post('/addpost', post.AddPost );
route.get('/', home.index );
route.get('/dashboard', home.dashboard );
route.get('/categories', home.categories );
route.get('/articles', home.articles );



module.exports = route