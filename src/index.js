import './sass/main.scss';


const startBTn = document.querySelector('data-start')
const stopBTn = document.querySelector('data-stop')
const PROMT_DELAY = 1000
let timeOutId = null
let isActive = false;

startBTn.addEventListener('click', startClick)
startBTn.addEventListener('click', stopClick)




function startClick() {
    if (isActive) {
        return;
    }
    isActive = true;
    intervalId = setInterval(changeBodyBgcolor, PROMT_DELAY)
};

function changeBodyBgcolor() {
    console.log(document.body.style.background = `#${Math.floor(Math.random() * 16777215).toString(16)}`);
}

function stopClick() {
    clearInterval(intervalId);
    isActive = false;
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
