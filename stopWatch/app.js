let resumeButton = document.querySelector('#pause');
let stopButton = document.querySelector('#stop');
let resetButton = document.querySelector('#reset');
let time = document.querySelector('.time')
let hours = 0;
let minutes = 0;
let seconds = 0;
let timer;
let isPaused = false;

function stopWatch() {
    if (!isPaused) {
        seconds++;
        if (seconds === 60) {
            minutes++;
            seconds = 0;
        }
        if (minutes == 60) {
            hours++;
            minutes = 60;
        }
        let h = (hours < 10 ? "0" + hours : hours)
        let m = (minutes < 10 ? "0" + minutes : minutes)
        let s = (seconds < 10 ? "0" + seconds : seconds)
        time.innerHTML = h + ":" + m + ":" + s;
    }
}
function startWatch() {
    clearInterval(timer);
    timer = setInterval(stopWatch, 1000);
}

function resetWatch() {
    if (time.innerHTML != "00:00:00") {
        clearInterval(timer);
        hours = 0;
        seconds = 0;
        minutes = 0;
        time.innerHTML = "00:00:00";
        isPaused = true;
    }
}

resumeButton.addEventListener('click', function () {
    isPaused = false;
    startWatch();
})

stopButton.addEventListener('click', function () {
    isPaused = true;
})

resetButton.addEventListener('click', function () {
    resetWatch()
})