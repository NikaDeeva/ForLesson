"use strict"
// element.querySelector(selector);
// const item = document.querySelector('.list-item');
// const listItems = document.querySelectorAll('.list-items');
// console.log(listItems);

// const listWidth = 
// document.querySelector('#menu');
// listWidth.style.textTransform = 'uppercase';
// listWidth.style.fontSize = '26px';
// listWidth.style.color = 'purple';
// console.log(listWidth);

// document.parentNode();
// document.childNodes('.menu-item');
// document.children();
// document.lastChild();
// document.firstChild();
// document.firstElementChild();
// document.lastElementChild();

// console.log(previousSibling('.btn'));

// const button = document.querySelector('.btn');
// button.style.backgroundColor = 'pink';
// button.style.color = 'white';
// console.log(button.style);

// element.classList.add();
// document.classList.remove('.text');
// elem.classList.replace(old, newCLass);
// elem.classList.contains('.link');

// const title = document.createElement('h1');
// console.log(title);
// title.textContent = 'hello';
// console.log(title);


// const image = document.createElement('img');
// console.log(image);
// image.src = './evel.webp';
// image.alt = 'evel';

const list = document.querySelector('.username');

const lastItem = document.createElement('li');
lastItem.textContent = 'Bob';
list.append(lastItem);

const firstItem = document.createElement('li');
firstItem.textContent = 'Alex';
list.prepend(firstItem);

const text = document.querySelector('.text');
text.remove()