const categorie = require('../models/CategorieModel');
const express = require('express');
const app = express()


const AddCategorie = (req,res)=> {
 const {body}= req
    categorie.create( {...body})
    .then(()=>{res.redirect('http://localhost:3000/categories')})
    .catch(()=>{res.json({msg: 'error '})})
}

const getonecategorie = (req,res) => {
    const {id} = req.params
    const oncategorie = categorie.findByPk(id)
    .then((oncategorie)=> {res.render("../views/pages/updateCategorie.ejs", {oncategorie})
    })
    .catch(()=>{
        res.json({msg: 'error.'})
    });
    
}

const updatecategorie = (req, res) => {
    const {body}= req
    const {id}= req.params
    categorie.update( {...body}, {where:{id:id}})
    .then(()=>{res.redirect('http://localhost:3000/categories')})
    .catch(()=>{
        res.json({msg: 'error.'})
    });
}    


const getAllCategorie = (req,res) => {
    const allcategorie = categorie.findAll()
    .then(allcategorie=>{
        res.render("../views/pages/categories.ejs", categories = allcategorie);
    })
    .catch(()=>{
        res.json({msg: 'error.'})
    });
};

const deletecategorie =(req,res) => {

    const {id} = req.params
    categorie.destroy({where :{id : id} })
    .then(()=>{
        res.redirect('http://localhost:3000/categories')
    })
    .catch(()=>{
        res.json({msg: 'error.'})
    });
}




module.exports = {
    AddCategorie, getAllCategorie, deletecategorie, getonecategorie, updatecategorie,
}