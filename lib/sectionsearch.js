module.exports = function(section, dataNeeded) {

  var course = dataNeeded();

  var buttonInfo = function(section) {
    var sectionList = "";

    // for the title
    // text to add to span with class .course-name
    var h1Title = course.name + ", " + course.level;

        // for the list
        // ul to add to div
        for (var i = 0; i < course[section].length; i++) {
          sectionList += "<li>" + course[section][i].topic + "</li>";
        }
        sectionList = "<ul>" + sectionList + "</ul>";

        // array that holds text & list to be added to
        var buttonInfo = [ h1Title, sectionList ];

        return buttonInfo;
  };

   return buttonInfo(section);

};
