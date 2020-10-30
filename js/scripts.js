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
    let robo = i.toString();
    if (robo.includes(3)) {
      beepBoop.push("Won't you be my neighbor?")
    } else if (robo.includes(2)) {
      beepBoop.push("Boop!")
    } else {
      beepBoop.push(i);
    }
  }
  return beepBoop
}


// User Logic
$(document).ready(function() {
  $("#roboger").submit(function(event) {
    event.preventDefault();

    const number = $("input#number").val();
    checkNumber(number);
    let result = (roboSpeak(number)).toString();

    $(".roboTalk").after(result);
    $(".translation").show();
  });
});