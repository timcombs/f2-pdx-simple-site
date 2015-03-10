var express = require("express");
var app = express();
var bodyparser = require("body-parser");
var port = process.env.PORT || 3000;
var piglatinify = require("./lib/piglatinify.js");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/app/"));

var quotes = [
  "I have not failed. I've just found 10,000 ways that won't work. - Thomas Edison",
  "No matter where you go, there you are.",
  "If it is a good idea, go ahead and do it. It is much easier to apologize than to get permission. - Rear Admiral Grace Hopper, USN, Ph.D"
];

var jokes = [
  { setup: "What's the difference between a guitar and a fish?",
    punchline: "You can't tuna fish." },
  { setup: "What do you get when you cross a cow and a duck?",
    punchline: "Milk and quackers." },
  { setup: "How many tickles does it take to make an octopus laugh?",
    punchline: "Ten Tickles" }
];

app.post("/piglatin", function(req, res) {
  console.log(req);
  console.log(req.body);
  var firstname = piglatinify(req.body.firstname);
  var lastname = piglatinify(req.body.lastname);
  var piglatined = { firstname: firstname, lastname: lastname };
  res.json(piglatined);
});

app.get("/joke", function(req, res) {
  var randomIndex = Math.floor(Math.random() * jokes.length);
  res.json(jokes[randomIndex]);
});

app.get("/quote", function(req, res) {
  var randomIndex = Math.floor(Math.random() * quotes.length);
  res.send(quotes[randomIndex]);
});

app.get("/", function(req, res) {
  res.sendFile("index.html");
});

app.listen(port, function() {
  console.log("server starting. available at http://localhost:" + port);
});

// app.get("/", function(req, res) {
//   res.send("hello, universe");
// });
