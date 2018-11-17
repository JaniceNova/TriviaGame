
var time = 10;
var score1 = 0;

setInterval(function () {
    time--
    $(".timer").html(time)

    if (time === 0) {
        window.location.replace("loser1.html");
    }
}, 1000);

$("#flat").click(function () {
    score1 = 1;
    if (score1 = 1) {
        window.location.replace("winner1.html");
        score1= score1;
        console.log(score1);
        $("#q1").html(1);

    }
});
$("#round").click(function () {
    score1 = 0;
    window.location.replace("loser1.html");
    $("#q1").html(0);
});



