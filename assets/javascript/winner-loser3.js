var timer = 3;

setInterval(function () {
    timer--

    if (timer === 0) {
        window.location.replace("end.html");
    }
}, 1000);