var express = require("express");
var app = express();
var bodyparser = require("body-parser");
var port = process.env.PORT || 3000;
var piglatinify = require("./lib/piglatinify.js");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
extended: true
}));

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


// function piglatinify(word) {
//   var letters;
//   var changedWord;
//   var vowelHash = {a: 1, e: 1, i: 1, o:1, u:1, A: 1, E: 1, I: 1, O: 1, U: 1};
//   var wordArray = word.split('');
//   //if it starts with a vowel, just add "-hay" and stop here
//   if (vowelHash.hasOwnProperty(wordArray[0])) {
//     return word + "-hay";
//   }
//   //if it starts with two consonants
//   if (!vowelHash.hasOwnProperty(wordArray[1])) {
//     //check to see if it starts with three consonants
//     if (!vowelHash.hasOwnProperty(wordArray[2])) {
//       //take off the first three consonants and append them to the end of the word, plus ay
//       letters = wordArray.splice(0, 3)
//       wordArray[0] = wordArray[0].toUpperCase();
//       letters[0] = letters[0].toLowerCase();
//       changedWord = wordArray.join("") + "-" + letters.join("") + "ay";
//       return changedWord;
//     }
//     //if it starts with two consonants
//     letters = wordArray.splice(0, 2)
//     wordArray[0] = wordArray[0].toUpperCase();
//     letters[0] = letters[0].toLowerCase();
//     changedWord = wordArray.join("") + "-" + letters.join("") + "ay";
//     return changedWord;
//   }
//   //otherwise, it starts with one consonant
//   letters = wordArray.shift();
//   wordArray[0] = wordArray[0].toUpperCase();
//   letters = letters.toLowerCase();
//   changedWord = wordArray.join("") + "-" + letters + "ay";
//   return changedWord;
// }

app.get("/joke", function(req, res) {
  var randomIndex = Math.floor(Math.random() * jokes.length);
  res.json(jokes[randomIndex]);
});

app.get("/quote", function(req, res) {
  var randomIndex = Math.floor(Math.random() * quotes.length);
  res.send(quotes[randomIndex]);
});

app.post("/piglatin", function(req, res) {
  var firstname = piglatinify(req.body.firstname);
  var lastname = piglatinify(req.body.lastname);
  var piglatined = {firstname: firstname, lastname: lastname};
  res.json(piglatined);
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
