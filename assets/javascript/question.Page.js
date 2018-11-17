var time = 10;

setInterval(function(){
    time--
    $(".timer").html(time)

    if (time === 0){
window.location.replace("loser1.html");
}
}, 1000);

$( "#flat" ).click(function() {
    window.location.replace("winner1.html");
  });
  $( "#round" ).click(function() {
    window.location.replace("loser1.html");
  });


//   if(window.location("winner1.html")){
//     setInterval(function(){
//         var time = 3;
//         time--
//         $(".timer").html(time)
    
//         if (time === 0){
//     window.location.replace("loser1.html");
//     }
//     }, 1000);

//   }



