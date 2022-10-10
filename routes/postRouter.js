const post = require("../controllers/PostController");
const home = require("../controllers/HomePageController");
const categorie = require("../controllers/CategorieController");
const commentair = require("../controllers/CommentairController");
const { Router } = require("express");
const app = require("express")();

const route = Router();

route.post("/addpost", post.AddPost);
route.get("/addpost", post.newPost);

route.get("/articles", post.GetAllPost);
route.post("/articles/:id", post.deletePost);
route.get("/", home.index);
route.get("/dashboard", home.dashboard);

route.post('/addpost', post.AddPost);
route.get('/', home.index);
route.get('/dashboard', home.dashboard);

route.get('/articles', home.articles);
route.get('/articles', post.GetAllPost);
route.get('/addpost', home.addPost);

route.get('/update/:id', post.updatePost)
route.post('/update/:id', post.simo)




// route.get('/getAllcategorie', categorie.getAllCategorie );
route.post('/categories', categorie.AddCategorie);
route.get('/categories', categorie.getAllCategorie);
route.post('/categories/:id', categorie.deletecategorie)
route.post('/categorie/:id', categorie.getonecategorie)

route.get('/postpage', home.postPage)
    // commentair
route.get('/commentaire', commentair.getall);
route.post('/addCom', commentair.Addcommentair);
route.post('/deleteComm/:id', commentair.deletecom);

module.exports = route