var time = 10;
var score3 = 0;
setInterval(function () {
  time--
  $(".timer").html(time)

  if (time === 0) {
    window.location.replace("loser3.html");
  }
}, 1000);

$("#Sunday").click(function () {
  score3 = 1;

  if (score3 = 1) {
    window.location.replace("winner3.html");
  }
});
$("#VladLad").click(function () {
  score3 = 0;
  window.location.replace("loser3.html");
});
