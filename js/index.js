"use strict"
// console.log(_);
// console.log(_.sum([1 , 2 , 3 , 4 , 5]));

window.addEventListener('scroll', _.throttle(() => {
    console.log('Scroll 300mm');
}, 300),
);
const output = document.querySelector('.output');
let scrollCounter = 0;

document.addEventListener('scroll', () => {
    scrollCounter++;
    output.textContent = scrollCounter;
});