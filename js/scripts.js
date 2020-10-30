// Business Logic

// User Logic
$(document).ready(function() {
  $("#roboger").submit(function(event) {
    event.preventDefault();

    const number = $("input#number").val();

    $(".roboTalk").after(number);
  });
});