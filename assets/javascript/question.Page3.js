var time = 10;

setInterval(function(){
    time--
    $(".timer").html(time)

    if (time === 0){
window.location.replace("loser3.html");
}
}, 1000);

$( "#Sunday" ).click(function() {
    window.location.replace("winner3.html");
  });
  $( "#VladLad" ).click(function() {
    window.location.replace("loser3.html");
  });
