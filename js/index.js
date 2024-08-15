"use strict"
const title = document.querySelector('.article .title');
title.innerHTML = 'New title';

const technos = ['HTML', 'CSS', 'JavaScript', 'React', 'Noda'];
const list = document.querySelector('.list');

const markUp = technos
.map(techno => `<li class='list-item'>${techno}</li>`)
.join('');
console.log(markUp);
list.innerHTML = markUp;


const saveBtn = document.querySelector('button[data-action = "save"]');
console.log(saveBtn.dataset.action);
const closeBtn = document.querySelector('button[data-action = "close"]');
console.log(closeBtn.dataset.action);