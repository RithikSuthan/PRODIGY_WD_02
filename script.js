let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;
let isPaused=false;

function startWatch() {
    if (!timer || isPaused) {
        timer = setInterval(updateDisplay, 1000);
        isPaused = false;
    }
}

function pauseWatch() {
    clearInterval(timer);
    isPaused = true;
}

function stopWatch() {
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
}

function updateDisplay() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    const formattedTime = `${pad(hours)}Hrs:${pad(minutes)}mins:${pad(seconds)}sec`;
    document.getElementById("display").innerHTML = `<span>${formattedTime}</span>`;
}

function pad(value) {
    return value < 10 ? `0${value}` : value;
}