module.exports = function(dataNeeded) {

  var course = dataNeeded();

  var randomTopicIndex = Math.floor(Math.random() * 2);
  var randomNoteIndex = Math.floor(Math.random() * course.lectures[randomTopicIndex].notes.length);

  note = course.lectures[randomTopicIndex].notes[randomNoteIndex];

  result = { notes: note };

  return result;
};
