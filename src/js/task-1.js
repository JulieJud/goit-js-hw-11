const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');


startBtn.addEventListener('click', clickOnStart);
stopBtn.addEventListener('click', clickOnStop);

const PROMT_DELAY = 1000
let timeOutId = null
let isActive = false;
function clickOnStart() {
    if (isActive) {
        return;
    }
    isActive = true;
    intervalId = setInterval(changeBodyBgcolor, PROMT_DELAY)
};

function changeBodyBgcolor() {
    console.log(document.body.style.background = `#${Math.floor(Math.random() * 16777215).toString(16)}`);
}

function clickOnStop() {
    clearInterval(intervalId);
    isActive = false;
}

