

/*
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
*/

/*
If you really want to play with the Ajax, you could look up how to pass data to the server with $.get()and request a specific lecture number when you click the button. Then you would have to use that on the server to get the correct element from the Lectures array. Hint: The "request" object in server.js, which we're calling req, is an object that contains all the request data. You could use req.query.yourParamName to access the data you passed up from $.get()in your main.js file.
*/


 $(function() {
  $("button").on('click', function() {
    // grabs 'id' of event element as string
    var whichButton = $(this).attr('id');

    // construct string for id for specific h2 heading
    var whichHeading = "#" + whichButton + "Heading";
    // construct string for id of new h1 for title
    var whichTitle = "#" + whichButton + "Title";
    // construct string for id of new div for list
    var whichList = "#" + whichButton + "List";

    $.get(whichButton, function(response) {
      var anotherH1;

      // removes old h1 title related to specific h2 heading
      $("h1, whichTitle").remove();
      // removes old div list related to specific h2 heading
      $("ul, whichList").remove();

      // iife to create & add h1 element above h2 element related to button
      // and to create & add div element below h2 element related to button
      var buttonInfo = (function() {
        var anotherH1, h1Element, anotherUl, ulElement;
        var ulList = "";

        // for the title
        // removes 1st character for appropriate syntax
        var h1Element = whichTitle.substring(1);
        // creates h1 element
        var anotherH1 = $("<h1>").attr('id', h1Element);
        // adds specific h1 to DOM before specific h2 heading
        $(whichHeading).before(anotherH1);
        // text to add to h1
        var h1Title = response.name + ", " + response.level

        // for the list
        // removes 1st character for appropriate syntax
        var ulElement = whichList.substring(1);
        //creates div element
        var anotherUl = $("<ul>").attr('id', ulElement);
        //adds specific div to DOM after specific h2 heading
        $(whichHeading).after(anotherUl);
        // list to add to ul
        for (var i = 0; i < response[whichButton].length; i++) {
          ulList += "<li>" + response[whichButton][i].topic + "</li>";
        }

        // array that holds text & list to be added to
        var buttonInfo = [h1Title, ulList];

        return buttonInfo;
      }());

      // adds the text into h1 element above specific heading
      $(whichTitle).text(buttonInfo[0]);
      // adds the list into div element below specific heading
      $(whichList).html(buttonInfo[1]);
    });
 });
});


//
// Example 1: getElementsByTagName()
//
// Vanilla JS Task:
//        Using JavaScript, add a descriptive page title.


//
// Example 2: getElementById()
//
// Vanilla JS Task:
//       Use getElementById to add a style attribute to the <ul>
//       that removes the bullets to the left of the images.
//
// Resources:
// https://developer.mozilla.org/en-US/docs/Web/API/Element.setAttribute
// https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type
//


// Alternate:
// picsUl.setAttribute("style", "list-style-type: none;");

//
// Example 3: querySelectorAll()
//
// Vanilla JS Task:
//       Make the images all have a maximum width of 200px.
//


//
// Example 4: querySelector() + createElement() + appendChild()
//
// Vanilla JS Task:
//       Find another picture to illustrate one of the labs.
//       Use JavaScript to add a new <li> element in your existing <ul>.
//       Then add a new <img> element to the <li> and specify its src.
//       You can use the URL of the image you found as the src,
//       or you can download the new image to your assets/img folder.
//
// You’ll need: document.createElement() and element.appendChild()
//


//
// Example 5: window.addEventListener("load")
//
// Vanilla JS Task:
//        Open an alert dialog on page load to welcome the user to the page.
//

//
// Example 6: Handling the resize event
//
//            resize = An event on the window object.
//            Signifies the user changed the viewing dimensions.
//            Use it to implement "responsive design": adjust layout, styling, and element visibility.
//
// Vanilla JS Task:
//        Make the images half the window width each time the resize event triggers.
//
// You’ll need: window.innerWidth and window.innerHeight
//


//
// jQuery Task:
//        Repeat the previous task, this time using jQuery.
//
// You'll need: $(window).on()
//              $(window).width()
//              $(element).height(desiredHeight)


//
// Example 7: Handling a click event
//
//            click = An event on a DOM element.
//            Signifies the user clicked that element with a mouse or trackpad.
//            Use it to interact with the user: open a menu,respond to a button-click, etc.
//
// Vanilla JS Task:
//        Every time an image is clicked, move it to the end of the <ul>.
//
// You’ll need: event.target.parentNode
//              element.remove()
//              element.appendChild()
//

//
// jQuery Task:
//        Repeat the previous task, this time using jQuery.

//
// jQuery Task:
//       Hide all the lab images on page load.
//       When a button is clicked, show the corresponding list item (and only that list item)
//
