const post = require('../models/PostModel');
const express = require('express');
const app = express()

const AddPost = (req,res)=> {

 /* Destructuring the body of the request. */
 const {body}= req

/* Creating a new post and then returning a message if it was successful or not. */
    post.create( {...body})
    .then(()=>{res.redirect()})
    .catch(()=>{res.json({msg: 'error '})})
}



const GetAllPost = (req,res)=>{
    const allPosts =  post.findAll({attributes: ['title', 'body']})
    .then((allPosts)=>{res.json(allPosts)})
    .catch(()=>{res.json({msg: 'error '})})
}





/* Exporting the function `AddPost` so that it can be used in other files. */
module.exports = {
    AddPost,
    GetAllPost,
}