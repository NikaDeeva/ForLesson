"use strict"
const horses = ['Henry', 'Sam', 'Alice', 'George', 'Luisa'];
let raceCounter = 0;
const refs = {
    startBtn: document.querySelector('.js-start-race'),
    winnerField: document.querySelector('.js-winner'),
    progress: document.querySelector('.js-progress'),
    tableBody: document.querySelector('.js-table-body'),
};
refs.startBtn.addEventListener('click', onStart);
function onStart(){
    raceCounter++;
    const promises = horses.map(run);
    updateWinnerField('');
    updateProgressField('Race has already begun');
    determineWinner(promises);
    waitForAll(promises);
}
function determineWinner(promises){
    Promise.race(promises).then(({horse, time}) => {
        updateWinnerField(`Winner ${horse} finished in ${time}`);
        updateResultsTable({horse, time, raceCounter});
    })
};
function waitForAll(promises){
Promise.all(promises).then(() => {
    updateProgressField('Race has finished');
})
};
function updateWinnerField(message){
    refs.winnerField.textContent = message;
};
function updateProgressField(message){
    refs.progress.textContent = message;
}
function updateResultsTable({horse, time, raceCounter}){
    const tr = `<tr><td>${raceCounter}</td><td>${horse}</td><td>${time}</td>`;
    refs.tableBody.insertAdjacentHTML('beforeend', tr)
};
function run(horse){
    return new Promise(resolve => {
        const time = getRandomTime(1500, 3000);
        setTimeout(() => {
            resolve({horse, time});
        }, time)
    })
};
function getRandomTime(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}