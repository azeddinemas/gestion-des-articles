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
        .then((cats)=>{  res.redirect('http://localhost:3000/articles')})
        .catch(()=>{res.json({msg: 'error '})})
      
}



const updatePost = (req,res)=>{
  const {id} = req.params
 const num = post.findOne({ where: { id: id } })  
  .then((num)=>{  res.render("../views/pages/updatePost.ejs", {num} ); })
   .catch(()=>{res.json({msg: 'error '})})
}


// const insertPost = (req,res)=>{
//   const {id} = req.params
//   post.update({...body},{where:{id:id}})
//   .then((id)=>{ res.redirect('http://localhost:3000/articles') })
//   .catch(()=>{res.json({msg: 'error '})})
// }


const simo = (req,res)=>{

const {body}= req
    let {id}= req.params
    post.update( {...body}, {where:{id:id}})
    .then(()=>{res.redirect('http://localhost:3000/articles')})
    .catch(()=>{res.json({msg: body})})
}



/* Exporting the function `AddPost` so that it can be used in other files. */
module.exports = {
    AddPost,
    GetAllPost,
    newPost,
    deletePost,
    updatePost,
    simo,
}