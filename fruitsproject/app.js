//jshit esversion:6

//install the dependency and map it
const mongoose = require('mongoose');

//connect mongoose to the running mongodb server
mongoose.connect('mongodb://localhost:27017/fruitsDB', {useNewUrlParser:true});

//setup a schema (how fruits will be modeled)
const fruitSchema = new mongoose.Schema({
  name: String,
  rating : Number,
  review : String
});

//create a new collection with schema based on fruitschema
const Fruit = mongoose.model("Fruit", fruitSchema);

//creating an instance based on the model
const fruit = new Fruit({
  name: "apple",
  rating : 7,
  review :"A solid fruit."
});

// fruit.save();

//save a bulk amount of new fruits
//always reference the documentation
const kiwi = new Fruit({
  name: "kiwi",
  rating: 10,
  review : "best fruit"
});

const banana = new Fruit({
  name: "banana",
  rating: 6,
  review : "okay but weird texture"
});

const orange = new Fruit({
  name: "oramge",
  rating: 8,
  review : "too much acid"
});

Fruit.insertMany([kiwi,orange,banana],function(err){
  if(err){
    console.log(err);
  }
  else{
    // console.log('');
  }
});

//finding a fruit
//only log their names
Fruit.find(function(err,  fruits){
  if(err){
    console.log(err);
  }
  else{
    mongoose.connection.close();
    fruits.forEach(function(elem){
          console.log(elem.name);
    });
  }
});


//create person Schema
//name and Age
//create new model
//create person john
//save it to db
const personSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const Person = mongoose.model("Person",personSchema);

const person = new Person({
  name: "John",
  age : 24
});

person.save();

//EOF
