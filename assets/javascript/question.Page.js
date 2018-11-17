// import {m} from './app';
var time = 10;
var score1 = 0;

setInterval(function(){
    time--
    $(".timer").html(time)

    if (time === 0){
window.location.replace("loser1.html");
}
}, 1000);

$( "#flat" ).click(function() {
     score1 = 1; 
    if(score1 = 1){
    window.location.replace("winner1.html");}
  });
  $( "#round" ).click(function() {
      score1 = 0;
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


// console.log(m)
