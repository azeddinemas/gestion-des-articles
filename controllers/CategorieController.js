const categorie = require('../models/CategorieModel');
const express = require('express');
const Categorie = require('../models/CategorieModel');
const app = express()

const AddCategorie = (req,res)=> {
 const {body}= req

    categorie.create( {...body})
    .then(()=>{res.json({msg: 'Article was added seccusefully'})})
    .catch(()=>{res.json({msg: 'error '})})
}

const getAllCategorie = (req,res) => {
    const categories = categorie.findAll()
    .then(categories =>{
        res.json(categories)
    })
    .catch(()=>{
        res.json({msg: 'error.'})
    });

};









module.exports = {
    AddCategorie, getAllCategorie, UpdateCategorie, DeleteCategorie
}