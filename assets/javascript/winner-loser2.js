var timer = 3;

setInterval(function () {
    timer--

    if (timer === 0) {
        window.location.replace("third-question.html");
    }
}, 1000);