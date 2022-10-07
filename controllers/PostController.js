const post = require('../models/PostModel');
const cats = require('../controllers/CategorieController')
const categorie = require('../models/CategorieModel');

const express = require('express');
const app = express()

const AddPost = (req,res)=> {
 const {body}= req
    post.create( {...body})
    .then(()=>{res.redirect('http://localhost:3000/articles')})
    .catch(()=>{res.json({msg: 'error '})})
}



const GetAllPost = (req,res)=>{
    const allPosts =  post.findAll({attributes: ['title', 'body','categorie' , 'id' ]})
    .then((allPosts)=>{res.render("../views/pages/Articles.ejs" , posts = allPosts ); })
    .catch(()=>{res.json({msg: 'error '})})
}


const newPost = (req,res)=>{
   const cats =  categorie.findAll({attributes: ['title']})
   .then((cats)=>{  res.render("../views/pages/addPost.ejs", cat = cats ); })
   .catch(()=>{res.json({msg: 'error '})})
}


const deletePost = async (req,res)=>{
    const {id} = req.params
       
      
        post.destroy({
          where: { id: id }
        })
          .then(num => {
            if (num == 1) {
                res.redirect('http://localhost:3000/articles')
            
            } else {
              res.send({
                message: `Cannot delete Post with id=${id}. Maybe Tutorial was not found!`
              });
            }
          })
          .catch(err => {
            res.status(500).send({
              message: "Could not delete Post with id=" + id
            });
          });
      
}

const updatePost = async(req,res)=>{
    let id = req.body

    const posts = await post.update(req.body, {where:{id:id}})

    res.status(200).send(posts)
}







/* Exporting the function `AddPost` so that it can be used in other files. */
module.exports = {
    AddPost,
    GetAllPost,
    newPost,
    deletePost,
}