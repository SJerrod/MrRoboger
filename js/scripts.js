// Business Logic
function checkNumber(number) {
  if (number < 1) {
    alert ("Number must be greater then 0");
    cancelFormSubmission();
  }
}

function roboSpeak(number) {
  let beepBoop = [];
  for (i=0; i <= number; i ++) {
    beepBoop.push(i);
  }
  console.log(beepBoop);
  return beepBoop
}


// User Logic
$(document).ready(function() {
  $("#roboger").submit(function(event) {
    event.preventDefault();

    const number = $("input#number").val();
    checkNumber(number);
    let result = roboSpeak(number);

    $(".roboTalk").after(result);
  });
});