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
    const {body}= req
    categorie.findByPk(id)
    .then(Categorie=>{
        Categorie.title = body.title
        Categorie.save()
    })
    .catch(()=>{
        res.json({msg: 'error.'})
    });

    // const onecategorie = categorie.findByPk(id)
    // .then(onecategorie => {
    //     res.render("../views/pages/categories.ejs", onecategorie);

    // })
    // .catch(()=>{
    //     res.json({msg: 'error.'})
    // });
};

const getAllCategorie = (req,res) => {
    const allcategorie = categorie.findAll({ attributes: ['id','title'] })
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
    AddCategorie, getAllCategorie, deletecategorie, getonecategorie
}