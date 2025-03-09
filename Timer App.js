let timer;
let timeLeft = 25 * 60;
let isRunning = false;

function Display() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    document.getElementById("timer").innerText =
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                Display();
            } else {
                clearInterval(timer);
                isRunning = false;
            }
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    stopTimer();
    timeLeft = 25 * 60;
    Display();
}

function setTimer(minutes) {
    stopTimer();
    timeLeft = minutes * 60;
    Display();
}