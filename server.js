const express = require("express"),
    app = express();
    const port = 8080;

//setting view engine to ejs
app.set("view engine", "ejs");


// Static Files
app.use(express.static('public'))

//route for index page
app.get("/", function(req, res) {
    res.render("pages/index");
});

app.get("/article", function(req, res) {
    res.render("pages/article_page");
});
app.get("/admin", function(req, res) {
    res.render("pages/admin");
});

app.get("/art", function(req, res) {
    res.render("pages/Articles");
});
app.get("/visiteur", function(req, res) {
    res.render("pages/visiteur");
});

app.get("/home", function (req, res) {
  res.render("pages/home");
});



app.listen(port, function() {
    console.log("Server is running on port 8080 ");
});