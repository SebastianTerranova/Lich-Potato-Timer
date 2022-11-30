let minutes = 5;
let seconds = 0;
let counter = 0;
let running = 0;

function timerStart(){
    if (timer) {
        counter++;

    if (counter == 100) {
        seconds--;
        counter = 0;
    }

    if (seconds == 0 && minutes <= 0){
        timer = false;
        document.getElementById('gameover').innerHTML = "Game Over";
    } else if (seconds == 0) {
        minutes--;
        seconds = 59;
    }

    let minString = minutes;
    let secString = seconds;

    if (minutes < 10) {
        minString = "0" + minutes;
    }

    if (seconds < 10) {
        secString = "0" + seconds;
    }

    document.getElementById('minuteDis').innerHTML = minString;
    document.getElementById('secondDis').innerHTML = secString;
    setTimeout(timerStart, 10);
    }
}

function start(){
    if (running == 0){
    timer = true;
    timerStart();
    running = 1;
    }
}

function increase(){
    console.log("Increased time by one minute");
    minutes = minutes + 1;
    if (minutes < 10){
        document.getElementById('minuteDis').innerHTML = "0" + minutes;
    } else {
        document.getElementById('minuteDis').innerHTML = minutes;
    }
    console.log(minutes + ":" + seconds);
}

function decrease(){
    if (minutes > 0){
        console.log("Decreased time by one minute");
        minutes = minutes - 1;
        if (minutes < 10){
            document.getElementById('minuteDis').innerHTML = "0" + minutes;
        } else {
            document.getElementById('minuteDis').innerHTML = minutes;
        }
        console.log(minutes + ":" + seconds);
    }
}

function reset(){
    console.log("reset started");
    timer = false;
    document.getElementById('gameover').innerHTML = "";

    minutes = 5;
    seconds = 0;
    counter = 0;
    running = 0;

    let minString = minutes;
    let secString = seconds;

    if (minutes < 10) {
        minString = "0" + minutes;
    }

    if (seconds < 10) {
        secString = "0" + seconds;
    }

    document.getElementById('minuteDis').innerHTML = minString;
    document.getElementById('secondDis').innerHTML = secString;
}

function pause(){
if (running == 1){
    timer = false;
    running = 0;
}
}

//Reset Button

//audio
