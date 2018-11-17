var time = 10;

setInterval(function(){
    time--
    $(".timer").html(time)

    if (time === 0){
window.location.replace("loser2.html");
}
}, 1000);

$( "#real" ).click(function() {
    window.location.replace("winner2.html");
  });
  $( "#fake" ).click(function() {
    window.location.replace("loser2.html");
  });
