const express = require("express"),
  app = express();

//setting view engine to ejs
app.set("view engine", "ejs");

//route for index page
app.get("/", function (req, res) {
  res.render("index");
});



app.listen(8080, function () {
  console.log("Server is running on port 8080 ");
});