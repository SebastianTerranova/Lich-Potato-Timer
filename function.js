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

    if (minutes == 1 && seconds == 0){
        warningSound();
    }

    if (seconds < 0 && minutes <= 0){
        timer = false;
        document.getElementById('gameover').innerHTML = "Game Over";
        loseSound();
    } else if (seconds < 0) {
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
    } else if (minutes <= 0){
        timer = false;
        counter = 0;
        running = 0;
        minutes = 0;
        seconds = 0;
        document.getElementById('minuteDis').innerHTML = "00";
        document.getElementById('secondDis').innerHTML = "00";
        document.getElementById('gameover').innerHTML = "Game Over";
        loseSound();
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

function loseSound(){
    console.log("playLose() started");
    mySound = new sound("Fall.mp3");
    mySound.play();
}

function warningSound(){
    console.log("warningSound() started");
    mySound = new sound("Warning.mp3");
    mySound.play();
}

function sound(srcFile){
    //defines sound as audio
    this.sound = document.createElement("audio");
    //uses this file as source
    this.sound.src = srcFile;
    //loads audio file into memory
    this.sound.setAttribute("preload", "audio");
    //controls won't show up when audio is played
    this.sound.setAttribute("controls", "none");
    //makes sure only audio plays
    this.sound.style.display = "none";
    //confirms changes
    document.body.appendChild(this.sound);
    //plays sound
    this.play = function(){
        this.sound.play();
    }
    //pauses sound
    this.stop = function(){
        this.sound.pause();
    }    
}