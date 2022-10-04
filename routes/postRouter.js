const post= require('../controllers/PostController');
const {Router} = require('express')
const route=Router()

route.post('/add', post.AddPost );

module.exports = route