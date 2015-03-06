module.exports = function(word) {
  var letters;
  var changedWord;
  var vowelHash = { a: 1, e: 1, i: 1, o:1, u:1, A: 1, E: 1, I: 1, O: 1, U: 1 };
  var wordArray = word.split("");
  //if it starts with a vowel, just add "-hay" and stop here
  if (vowelHash.hasOwnProperty(wordArray[0])) {
    return word + "-hay";
  }
  //if it starts with two consonants
  if (!vowelHash.hasOwnProperty(wordArray[1])) {
    //check to see if it starts with three consonants
    if (!vowelHash.hasOwnProperty(wordArray[2])) {
      //take off the first three consonants and append them to the end of the word, plus ay
      letters = wordArray.splice(0, 3);
      wordArray[0] = wordArray[0].toUpperCase();
      letters[0] = letters[0].toLowerCase();
      changedWord = wordArray.join("") + "-" + letters.join("") + "ay";
      return changedWord;
    }
    //if it starts with two consonants
    letters = wordArray.splice(0, 2);
    wordArray[0] = wordArray[0].toUpperCase();
    letters[0] = letters[0].toLowerCase();
    changedWord = wordArray.join("") + "-" + letters.join("") + "ay";
    return changedWord;
  }
  //otherwise, it starts with one consonant
  letters = wordArray.shift();
  wordArray[0] = wordArray[0].toUpperCase();
  letters = letters.toLowerCase();
  changedWord = wordArray.join("") + "-" + letters + "ay";
  return changedWord;
};
