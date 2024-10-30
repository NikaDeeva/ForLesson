"use strict"
// console.log(_);
// console.log(_.sum([1 , 2 , 3 , 4 , 5]));

// window.addEventListener('scroll', _.throttle(() => {
//     console.log('Scroll 300mm');
// }, 3000),
// );
// const output = document.querySelector('.output');
// let scrollCounter = 0;

// document.addEventListener('scroll', () => {
//     scrollCounter++;
//     output.textContent = scrollCounter;
// });

// const vanillaOutput = document.querySelector('.output.vanilla');
// const throttleOutput = document.querySelector('.output.throttle');
// const debounceOutput = document.querySelector('.output.debounce');

// const eventCounter = {
//     vanilla: 0,
//     throttle: 0,
//     debounce: 0,
// };
// document.addEventListener('scroll', () => {
// eventCounter.vanilla += 1;
// vanillaOutput.textContent = eventCounter.vanilla;
// });
// document.addEventListener('scroll', _.throttle(() => {
//     eventCounter.throttle += 1;
//     throttleOutput.textContent = eventCounter.throttle;
// }, 300),
// );
// document.addEventListener('scroll', _.debounce(() => {
//     eventCounter.debounce += 1;
//     debounceOutput.textContent = eventCounter.debounce;
// }, 300),
// );

// const input = document.querySelector('#input');
// input.addEventListener('input', _.throttle((event) => {
//     const text = event.target.value;
//     console.log('Send to server:', text);
// }, 2500)
// );
// function candleInput(event){
// const text = event.target.value;
// console.log('Send to server:', text);
// };
// const throttleInput = _.throttle(candleInput, 1500);
// const input = document.querySelector('#input');
// input.addEventListener('input', throttleInput);
// const input = document.querySelector('#input');
// input.addEventListener('input', _.debounce((event) => {
//     const text = event.target.value;
//     console.log('Send to server:', text);
// }, 2500)
// );
// document.addEventListener('mousemove', _.debounce((event) => {
//     console.log(event.clientX, event.clientY);
// }, 100));
const welcome = document.querySelector('#welcome');
const name = document.querySelector('#name');
name.addEventListener('input', _.debounce((event) => {
    const text = event.target.value;
    welcome.textContent = `Welcome, ${text}`;
}, 1000));