const post = require('../models/PostModel');
const cats = require('../controllers/CategorieController')
const categorie = require('../models/CategorieModel');

const express = require('express');
const app = express()

const AddPost = (req,res)=> {

 /* Destructuring the body of the request. */
 const {body}= req

/* Creating a new post and then returning a message if it was successful or not. */
    post.create( {...body})
    .then(()=>{res.redirect('http://localhost:3000/articles')})
    .catch(()=>{res.json({msg: 'error '})})
}



const GetAllPost = (req,res)=>{
    const allPosts =  post.findAll({attributes: ['title', 'body','categorie' ]})
    .then((allPosts)=>{res.render("../views/pages/Articles.ejs", posts = allPosts ); })
    .catch(()=>{res.json({msg: 'error '})})
}

const newPost = (req,res)=>{
   const cats =  categorie.findAll({attributes: ['title']})
   .then((cats)=>{  res.render("../views/pages/addPost.ejs", cat = cats ); })
   .catch(()=>{res.json({msg: 'error '})})
}



/* Exporting the function `AddPost` so that it can be used in other files. */
module.exports = {
    AddPost,
    GetAllPost,
    newPost,
}