"use strict"
// const singleBtn = document.getElementById('single');
// const handleClick = () => alert('hello');
// singleBtn.addEventListener('click', handleClick);

// const multyBtn = document.getElementById('multiple');
// const firstCall = () => alert('First callback');
// const secondCall = () => alert('Second callback');
// const thirdCall = () => alert('Third callback');
// multyBtn.addEventListener('click', firstCall);
// multyBtn.addEventListener('click', secondCall);
// multyBtn.addEventListener('click', thirdCall);

// const addBtn = document.querySelector('button[data-action="add"]');
// const removeBtn = document.querySelector('button[data-action="remove"]');
// const btn = document.getElementById('btn');

// const handleClick = () => {
//     alert('Click event listener alert')
// };
// addBtn.addEventListener('click', () => {
//     btn.addEventListener('click', handleClick);
// });
// removeBtn.addEventListener('click', () => {
//     btn.removeEventListener('click', handleClick);
// });

// const btn = document.querySelector('#btn');

// const handleClick = event =>{
//      console.log('event:', event);
//      console.log('event type:', event.type);
//     };
// btn.addEventListener('click', handleClick);

function changeColor(button){
const colors = ['red', 'skyblue', 'green', 'coral'];
const randomCol = colors[Math.floor(Math.random() * colors.length)];

button.style.backgroundColor = randomCol;
}