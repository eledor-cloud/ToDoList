 //jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js")

const newItems = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];

const app = express();

app.use(bodyParser.urlencoded({extended: true,}));

app.use(express.static("public"));

app.set('view engine', 'ejs');

app.get("/", function(req, res) {
  const day = date.getDay()
  res.render("index", {
    listTitle: day,
    newListItems: newItems
  });
});

app.post("/", function (req, res) {
  item = req.body.newItem;
  if (req.body.index === "Work"){
    workItems.push(item);
    res.redirect("/work");
  }else{
    newItems.push(item);
    res.redirect("/");
  }
});

app.get("/work", function (req, res) {
  res.render("index", {
    listTitle: "Work List",
    newListItems: workItems
  });
});

app.get("/about", function (req, res) {
  res.render("about")
})

app.listen(3000, function() {
  console.log("Server running at port 3000");
});
