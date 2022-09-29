const express = require("express"),
    app = express();

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



app.listen(8080, function() {
    console.log("Server is running on port 8080 ");
});