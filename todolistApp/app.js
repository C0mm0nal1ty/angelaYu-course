//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/todolistDB", {useNewUrlParser:true});

const ItemSchema = new mongoose.Schema({
  name:{
    type: String,
    required: [true,'Why no name?']
  }
});

const Item = mongoose.model("Item",ItemSchema);

const item1 = new Item({
  name: "First item"
});

const item2 = new Item({
  name: "Workout for an hour."
});

const item3 = new Item({
  name: "eat lunch"
});

const defaultItems = [item1,item2,item3];

Item.insertMany(defaultItems , function(err){
  if(err){
    console.log(err);
  }
  else{
    console.log("Entered default items into todolist.");
  }
})

app.get("/", function(req, res) {
  Item.find({}, function(err,foundItems) {
    res.render("list", {listTitle: "Today", newListItems: foundItems});
  });

});

app.post("/", function(req, res){

  const item = req.body.newItem;

  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", function(req,res){
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.get("/about", function(req, res){
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});