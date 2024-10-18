"use strict"
// const parent = document.getElementById('parent');
// const child = document.getElementById('child');
// const des = document.getElementById('des');

// parent.addEventListener('click', () => {
//   console.log('Parent click');
// });
// child.addEventListener('click', () => {
//   console.log('Child click');
// });
// des.addEventListener('click', () => {
//   console.log('Des click');
// });

// const parent = document.getElementById('parent');

// parent.addEventListener('click', (event) => {
//   console.log( 'target', event.target);
//   console.log('current target', event.currentTarget);
// });

// const parent = document.getElementById('parent');
// const child = document.getElementById('child');
// const des = document.getElementById('des');

// parent.addEventListener('click', () => {
// alert('parent click');
// });
// child.addEventListener('click', () => {
//   alert('child click');
// });
//  des.addEventListener('click', (event) => {
//   event.stopPropagation();
//     alert('des click');
//  });

// const box = document.querySelector('div.box');
// box.addEventListener('click', function (event){
// console.log(event.target);
// });

const palette = document.querySelector('.color-palette');
const output = document.querySelector('.output');
palette.addEventListener('click', selectColor);
function selectColor(event){
    if (event.target.nodeName !== 'BUTTON'){
        return;
    }
    const selectedColor = event.target.dataset.color;
    output.textContent = `Selected color: ${selectedColor}`;
    output.style.color = selectedColor;
}
createPaletteItems();

function createPaletteItems() {
const items = [];
for (let i = 0; i < 60; i++){
    const color = getRandomHexColor();
    let item = document.createElement('button');
    item.type = 'button';
    item.dataset.color = color;
    item.style.backgroundColor = color;
    item.classList.add('item');
    items.push(item);
}
palette.append(...items);
}
function getRandomHexColor(){
    const numbers = '0123456789ABCDEF';
    let col = '#';
    for (let i = 0; i < 6; i++){
        col += numbers[Math.floor(Math.random() * 16)]; 
    }
    return col;
}