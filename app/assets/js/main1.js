

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




// 1. As mentioned, you can follow the model in Slide 66. One option would be to create a new endpoint that returns the entire JSON object, and if you hit that endpoint, you insert an h1 element at the top of the page that contains the name of the course.




/*
From the slide:
$(function() {

  $("button").click(function() {
  var url = $(this).attr("id");

    $.get(url, function(response) {
      var resText;

      if(typeof response === "object") {
        resText = response.setup + ": " + response.punchline;
      }else {
          resText = response;
      }

      $(<insert an h1 element through a variable>).text(resText);

    });
  });
});
*/



 $(function() {
  $("button").on('click', function() {
    // grabs 'id' of event element as string
    var whichButton = $(this).attr('id');
    // capitalizes 1st character of string. puts 'id' string in variable syntax
    var capWhichButton = whichButton.charAt(0).toUpperCase() + whichButton.substring(1);
    // create 'id' for all DOM elements for server response
    // from the index.html buttons
    var whichElement = "#show" + capWhichButton;
    $.get(whichButton, function(response) {
      var newH1;
      var anotherH1;
      // conditional cuz different buttons handle the response differently
      if (typeof response === "object") {
        // removes old h1 heading
        $("h1").remove(whichElement);
        // iife to create & add h1 element to top of DOM
        var h1Stuff = (function() {
          var anotherH1, h1Element;
          // removes 1st character for appropriate syntax
          var h1Element = whichElement.substring(1);
          // creates h1 element
          var anotherH1 = $("<h1>").attr('id', h1Element);
          // adds specific h1 to DOM
          $('body').prepend(anotherH1);
          // returns text to add to h1
          var h1Stuff = response.name + ", " + response.level
          return h1Stuff;
        }());


        // adds the text into h1 element
        $(whichElement).text(h1Stuff);

      }else {
        $(whichElement).text(response);
      }
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
