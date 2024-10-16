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

const box = document.querySelector('div.box');
box.addEventListener('click', function (event){
console.log(event.target);
});