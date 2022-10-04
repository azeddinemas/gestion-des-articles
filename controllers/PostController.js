const post = require('../models/PostModel');

const AddPost = (req,res)=> {

 /* Destructuring the body of the request. */
 const {body}= req

/* Creating a new post and then returning a message if it was successful or not. */
    post.create( {...body})
    .then(()=>{res.json({msg: 'Article was added seccusefully'})})
    .catch(()=>{res.json({msg: 'error '})})
}

/* Exporting the function `AddPost` so that it can be used in other files. */
module.exports = {
    AddPost
}