var time = 10;
var score2 = 2;
setInterval(function(){
    time--
    $(".timer").html(time)

    if (time === 0){
       
window.location.replace("loser2.html");
}
}, 1000);

$( "#real" ).click(function() { 
    score2=1;
    window.location.replace("winner2.html");
  });
  $( "#fake" ).click(function() {
      score2 = 0;
    window.location.replace("loser2.html");
  });
