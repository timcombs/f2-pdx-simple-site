$(function() {

  $(".get-info").click(function(e) {
    e.preventDefault();

    // grabs 'id' of event element as string
    var section = $(this).attr("id");

    // construct string for id of new div for list
    var whichSection = "#show-" + section;

    $.get("http://localhost:3000/" + section, function(response) {
      $("#show-" + section).text(response[0].topic);

      // removes old div list related to specific h2 heading
      $("ul, whichList").remove(); // not sure if i need it

      // adds the course name and level into the span with class .course-name
      $(".course-name").text(response[0]);

      // adds the list into div element for the specific button
      $(whichSection).html(response[1]);
    });
 });

  // Code Challenge 1:
  // When the user clicks the "Find It" button,
  // let's get back all the Lectures notes and display them.

  $("#search").on("submit change", function(e) {
    e.preventDefault();

    var searchParam = $("input[name=searchText]").val();
    var lucky = $("input[name=lucky]").is(":checked");  // use pseudoclass = checked??
    console.log(lucky);
    var data = { searchText: searchParam, lucky: lucky };
    var url = "";

    if (lucky && !$("input[name=searchText]").val()) {
      url = "http://localhost:3000/get_lucky";
    }else if ($("input[name=searchText]").val()) {
      url = "http://localhost:3000/search";
    }else {
      alert("please input search terms");
      return false;
    }

    // console.log(data); // this will be a sanity check to see that we're getting the data
    $.post(url, data, function(response) {
      var lectures,
          output = "";

      console.log(typeof response.notes.constructor);

      if (response.notes && response.notes.constructor === Array) {
        for (var i = 0; i < response.notes.length; i++) {
          output += "<li>" + response.notes[i] + "</li>";
        }
      }else {
        output = response.notes;
      }

      output = "<ul>" + output + "</ul>";

      // adding class to make text red if no results
      if (response.notes[0] === "Your search returned zero results") {
        $("#search-results").addClass("noResults");
      }else {
        $("#search-results").removeClass("noResults");
      }

      $("#search-results").html(output);
    });
  });

});
