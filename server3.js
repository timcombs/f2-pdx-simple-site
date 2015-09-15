var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/app/"));


var course = {
  level: 201,
  name: "Foundations II JavaScript",
  lectures: [
    {"topic": "Paperwork, Setup & JavaScript Basics (Part 1)"},
    {"topic": "JavaScript Basics (Part 2) & Intro to Node"},
    {"topic": "Array Methods, Functions & Scope/Hoisting"},
    {"topic": "Object-Oriented Programming in JavaScript and Classes/Inheritance"},
    {"topic": "JavaScript in the Browser & Intro to jQuery"},
    {"topic": "Building a Server & Using Ajax"},
    {"topic": "Build & Deploy an App"},
    {"topic": "Functional Programming with lodash"}
  ],
  labs: [
    {"topic": "A Trip to the Zoo"},
    {"topic": "Loopy Sci-Fi"}
  ]
};

app.get("/schedule", function(req, res) {
  res.json(course); // json object.
});

app.get("/", function(req, res) {
  res.sendFile();
});

app.get("/lectures", function(req, res) {
  res.json(course);
});

app.get("/labs", function(req,res) {
  res.json(course);
});

app.get("/level", function(req, res) {
  res.send(course.level);
});

app.get("/name", function(req, res){
  res.send(course.name);
});

app.listen(port, function() {
  console.log('server started. available at http://localhost:' + port);
});



