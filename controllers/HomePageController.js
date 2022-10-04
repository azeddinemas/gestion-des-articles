const express = require('express');
const app = express();
app.set('view engine', 'ejs');


const index = (req,res)=> {
    res.render("../views/pages/home.ejs"); 
};



module.exports = {
    index,
}