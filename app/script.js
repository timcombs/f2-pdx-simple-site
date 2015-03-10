$(function() {

  $("button").click(function() {
    var url = $(this).attr("id");
    $.get(url, function(response) {
      var resText;
      if (typeof response === "object") {
        resText = response.setup + ": " + response.punchline;
      } else {
        resText = response;
      }
      $("#ajax-text").text(resText);
    });
  });

  $("#piglatin").on("submit", function(e) {
    e.preventDefault();

    var firstname = $("input[name=firstname]").val();
    var lastname = $("input[name=lastname]").val();
    var name = { firstname: firstname, lastname: lastname };
console.log(name.firstname);
console.log(name.lastname);

    $.post("piglatin", name, function(response) {
      var piglatinified = response.firstname + " " + response.lastname;
      $("#piglatinified").text(piglatinified);
    });

  });

});
