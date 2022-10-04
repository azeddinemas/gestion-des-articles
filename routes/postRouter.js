const post= require('../controllers/PostController');
const home= require('../controllers/HomePageController');
const {Router} = require('express');
const app = require('express')();


const route = Router()

route.post('/addpost', post.AddPost );
route.get('/', home.index );


module.exports = route