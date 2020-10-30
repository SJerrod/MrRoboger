// Business Logic
function checkNumber(number) {
  if (number < 1) {
    alert ("Number must be greater then 0");
    cancelFormSubmission();
  }
}


// User Logic
$(document).ready(function() {
  $("#roboger").submit(function(event) {
    event.preventDefault();

    const number = $("input#number").val();
    let result = checkNumber(number);

    $(".roboTalk").after(result);
  });
});