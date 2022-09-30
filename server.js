const express = require("express"),
    app = express();
    const port = 3000;

//setting view engine to ejs
app.set("view engine", "ejs");


// Static Files
app.use(express.static('public'))

//route for index page
app.get("/", function(req, res) {
    res.render("index");
});

app.get("/article", function(req, res) {
    res.render("article_page");
});
app.get("/admin", function(req, res) {
    res.render("admin");
});

app.get("/art", function(req, res) {
    res.render("Articles");
});
app.get("/visiteur", function(req, res) {
    res.render("visiteur");
});

app.get("/home", function (req, res) {
  res.render("home");
});



app.listen(port, function() {
    console.log("Server is running on port 8080 ");
});