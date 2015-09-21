var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

// populates req.body
var bodyparser = require("body-parser");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/app/"));

var f2search = require("./lib/f2search");
var sectionSearch = require("./lib/sectionSearch");
var luckyChecked = require("./lib/luckyChecked");
var dataNeeded = require("./lib/dataModule");

app.post("/search", function(req, res) {
  var searchResults = f2search(req.body.searchText, dataNeeded);
  res.json(searchResults);
});

app.get("/lectures", function(req, res) {
  var sectionInfo = sectionSearch("lectures", dataNeeded);
  res.json(sectionInfo);
});

app.get("/labs", function(req, res) {
  var sectionInfo = sectionSearch("labs", dataNeeded);
  res.json(sectionInfo);
});

app.get("/course_name", function(req, res) {
  res.json(course.name);
});

app.post("/get_lucky", function(req, res) {
  var randomNote = luckyChecked(dataNeeded);
  res.json(randomNote);
});

app.get("/", function(req, res) {
  res.sendFile();
});

app.listen(port, function() {
  console.log("server started on port " + port);
});
