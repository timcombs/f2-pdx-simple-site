
module.exports = function(searchText, dataNeeded) {

  var course = dataNeeded();

  // takes multiple entries and calls findPhrase to search for each one
  var findPhrases = function(wholeString) {
    var notes = [];

    // code splits wholeString into an array of strings
    phraseArray = wholeString.split(",");

    // removes white space from each string and adds to notes array
    for (var i = 0; i < phraseArray.length; i++) {
      phrase = phraseArray[i].trim();
      notes = notes.concat(findPhrase(phrase));
    }

    // remove duplicate entries from notes array
    for (var j = 0; j < notes.length; j++) {
      for (var k = 0; k < notes.length; k++) {
        if (notes[j] === notes[k] && j !== k) {
          notes.splice(j, 1);
        }
      }
    }

    // return no results msg
    if (notes.length === 0) {
      notes = ([ "Your search returned zero results" ]);
    }

    results = { notes: notes };

    return results;
  };

  var findPhrase = function(phrase) {
    var results = {
      lectures: [],
      labs: []
    };

    var notes = [];

    notes = searchCourseSection("lectures", phrase);
    notes.concat(searchCourseSection("labs", phrase));

    // results =  { notes: notes }; // original code. should go in findPhrases?
    return notes; // changed from return results
  };

  var searchCourseSection = function(section, phrase) {
    var results = [],
        noteLc = "";

    for (var i = 0; i < course[section].length; i++) {
      if (course[section][i].notes && course[section][i].notes.constructor === Array) {
        for (var j = 0; j < course[section][i].notes.length; j++) {
          noteLc = course[section][i].notes[j].toLowerCase();
          if (noteLc.indexOf(phrase.toLowerCase()) >= 0) { // a positive number or -1 if the phrase does not exist
            var resultsObj = {
              note: course[section][i].notes[j],
              section: section,
              topic: course[section][i].topic
            };

            results.push(resultsObj.note);
          }
        }
      }
    }

    return results;
  };

  return findPhrases(searchText); // changed from findPhrase

};
