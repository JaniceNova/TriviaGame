var time = 10;
var score2 = 0;
setInterval(function () {
    time--
    $(".timer").html(time)

    if (time === 0) {

        window.location.replace("loser2.html");
    }
}, 1000);

$("#real").click(function () {
    score2 = 1;
    if (score2 = 1) {
        window.location.replace("winner2.html");
        var cat =9;
    }
});
$("#fake").click(function () {
    score2 = 0;
    window.location.replace("loser2.html");
});
