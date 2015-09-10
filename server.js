var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

var course = {
  level: "201",
  name: "Foundations II JavaScript",
  lectures: [
    {topic: "Paperwork, Setup & JavaScript Basics (Part 1)"},
    {topic: "JavaScript Basics (Part 2) & Intro to Node"},
    {topic: "Array Methods, Functions & Scope/Hoisting"},
    {topic: "Object-Oriented Programming in JavaScript and Classes/Inheritance"},
    {topic: "JavaScript in the Browser & Intro to jQuery"},
    {topic: "Building a Server & Using Ajax"},
    {topic: "Build & Deploy an App"},
    {topic: "Functional Programming with lodash"}
  ],
  labs: [
    {topic: "A Trip to the Zoo"},
    {topic: "Loopy Sci-Fi"},
  ]
};

app.listen(port, function() {
  console.log('server started. available at http://localhost:' + port);
});

app.get("/", function(req, res) {
  res.send("hello universe!");
});

app.get("/coursework", function(req, res) {
  var randomIndex = Math.floor(Math.random()*course.lectures.length);
  res.send(course.lectures[randomIndex].topic);
});
