//jshit esversion:6

//install the dependency and map it
const mongoose = require('mongoose');

//connect mongoose to the running mongodb server
mongoose.connect('mongodb://localhost:27017/fruitsDB', {useNewUrlParser:true});

//setup a schema (how fruits will be modeled)
const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true,'Why no name?']
  },
  rating : {
    type: Number,
    min: 1,
    max: 10
  },
  review : String
});

//create a new collection with schema based on fruitschema
const Fruit = mongoose.model("Fruit", fruitSchema);

//creating an instance based on the model
const apple = new Fruit({
  name: "apple",
  rating : 7,
  review :"A solid fruit."
});

apple.save();

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
// Fruit.find(function(err,  fruits){
//   if(err){
//     console.log(err);
//   }
//   else{
//     mongoose.connection.close();
//     fruits.forEach(function(elem){
//           console.log(elem.name);
//     });
//   }
// });

//updating a record
// Fruit.updateOne({
//  _id: "5c803a24d58278738a35ee19"
// }, {name :"peach"}, function(err){
//   if(err){
//     console.log(err);
//   }
//   else{
//     console.log('updated id');
//   }
// });
//
// Fruit.deleteOne({_id: "5c803a24d58278738a35ee19"}, function(err){
//   if(err){
//     console.log(err);
//   }
//   else{
//     console.log('updated id');
//   }
// });

//create person Schema
//name and Age
//create new model
//create person john
//save it to db
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema
});

const Person = mongoose.model("Person",personSchema);

const pineapple = new Fruit({
  name:"Pineapple",
  score: 9,
  review : "great fruit"
});

pineapple.save();

const person = new Person({
  name: "John",
  age : 23,
});

// const person = new Person({
//   name: "Amy",
//   age : 12,
//   favoritefruit : pineapple
// });

// person.save();

Person.updateOne({name:"John"}, {favoriteFruit: apple}, function(err){
  if(err){
    console.log(err);
  }
  else{
    console.log('updated johns favorite fruit');
  }
});

Person.updateOne({name:"Amy"}, {favoriteFruit: pineapple}, function(err){
  if(err){
    console.log(err);
  }
  else{
    console.log('updated amys favorite fruit');
  }
});


//delete all people who are named John
// Person.deleteMany({name: "John"}, function(err){
//   if(err){
//     console.log(err);
//   }
//   else{
//     console.log('deleted john');
//   }
// });
//EOF
