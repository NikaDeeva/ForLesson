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

// function changeColor(button){
// const colors = ['red', 'skyblue', 'green', 'coral'];
// const randomCol = colors[Math.floor(Math.random() * colors.length)];

// button.style.backgroundColor = randomCol;
// }



// document.addEventListener('keydown', event => {
//     console.log('keydown:', event);
// });
// document.addEventListener('keyup', event => {
//     console.log('keyup:', event);
// });

// document.addEventListener('keydown', event => {
// console.log('key', event.key);
// console.log('code', event.code);
// });

// document.addEventListener('keydown', event => {
// event.preventDefault();
// if ((event.ctrlKey || event.altKey) && event.code === 'KeyS'){
//     console.log('ctrl+s or command+s');
// }
// });

// const element = document.getElementById('mouseDown-up');
// element.addEventListener('mousedown', () => {
//     element.textContent = 'Мишку натиснуто';
// });
// element.addEventListener('mouseup', () => {
//     element.textContent = 'Мишку відпущено';
// });

// const element = document.getElementById('mouseOver-out');
// element.addEventListener('mouseover', () => {
//     element.textContent = 'Мишку наведено';
// });
// element.addEventListener('mouseout', () => {
//     element.textContent = 'Мишку відведено';
// });

// const element = document.getElementById('mouseMove');
// element.addEventListener('mousemove', (e) => {
// element.textContent = `Mouse coordinals are: x: ${e.clientX}, y: ${e.clientY}`;
// });

// const block = document.querySelector('.block');

// document.addEventListener('mousemove', e => {
//   const mouseX = e.clientX;
//   const mouseY = e.clientY;
//   const width = block.offsetWidth;
//   const height =  block.offsetHeight;
//   const newBlockX = mouseX - width / 2;
//   const newBlockY = mouseY - height / 2;
//   block.style.left = `${newBlockX}px`;
//   block.style.top = `${newBlockY}px`;
//  });
//  document.addEventListener('click', () => {
//     const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
//     const blockColor = block.style.backgroundColor = `${randomColor}`;
// });


// document.addEventListener('keydown', (event) =>{
//   const cat = document.getElementById('box');
//   const step = 100;
//   let left = parseInt(window.getComputedStyle(cat).left);
//  if (event.key === 'ArrowLeft'){
//   cat.style.left = `${left - step}px`;
//  }
//  else if (event.key === 'ArrowRight'){
//   cat.style.left = `${left + step}px`;
//  }
// });

const keys = ['g', 'w', 'n', 'y', 'e', 'c', 'x', 'z', 'u', 'k'];
let currentKeyIndex = 0;
function startGame(){
  currentKeyIndex = Math.floor(Math.random() * keys.length);
document.getElementById('key').textContent = keys[currentKeyIndex];
};
document.addEventListener('keydown', (e) => {
  if (e.key === keys[currentKeyIndex]){
    document.getElementById('message').textContent = 'Great! Click next key';
    startGame();
  }
  else{
    document.getElementById('message').textContent = 'Try again';
  }
});
document.addEventListener('keypress', (e) => {
e.preventDefault();
});
document.getElementById('resetGame').addEventListener('click', () =>{
  document.getElementById('message').textContent = 'Press corrent key';
  startGame();
});
startGame();