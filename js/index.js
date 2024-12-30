"use strict"
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
let timer;

startBtn.addEventListener('click', () => {
    timer = setInterval(() => {
        console.log(`${Math.random()}`);
}, 1000)
});
stopBtn.addEventListener('click', () => {
    clearInterval(timer);
    console.log('Interval stopped');
});