const express = require("express"),
    app = express();
const port = 3000;

//setting view engine to ejs
app.set("view engine", "ejs");


// Static Files
app.use(express.static('public'))

//route for index page
app.get("/", function(req, res) {
    res.render("pages/index");
});
// start admin
app.get("/article", function(req, res) {
    res.render("pages/article_page");
});
app.get("/dashboard", function(req, res) {
    res.render("pages/dashboard");
});

app.get("/art", function(req, res) {
    res.render("pages/Articles");
});
app.get("/visiteur", function(req, res) {
    res.render("pages/visiteur");
});
app.get("/categorie", function(req, res) {
        res.render('pages/categories');
    })
    // end  admin
app.get("/home", function(req, res) {
    res.render("pages/home");
});



app.listen(port, function() {
    console.log("Server is running on port 3000 ");
});