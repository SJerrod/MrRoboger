// Business Logic
function checkNumber(number) {
  if (number < 1) {
    alert ("Number must be greater then 0");
    cancelFormSubmission();
  }
}

function roboSpeak(number, name) {
  let beepBoop = [];
  for (i=0; i <= number; i ++) {
    let robo = i.toString();
    if (robo.includes(3)) {
      beepBoop.push("Won't you be my neighbor " + name + "?")
    } else if (robo.includes(2)) {
      beepBoop.push("Boop!")
    } else if (robo.includes(1)) {
      beepBoop.push("Beep!")
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

    let name = $("input#name").val();
    const number = $("input#number").val();
    checkNumber(number);
    let result = (roboSpeak(number, name)).toString();
  

    $(".name").text(name + ",");
    $(".roboTalk").text(result); 
    $(".translation").show();
  });
});