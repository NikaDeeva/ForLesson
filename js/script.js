"use strict"

const name = prompt("Write your name");
alert(`Hello, ${name}!`);

const change = confirm('Yes or no?');
if (change === true){
    alert('Thanks to accept');
}
else{
    alert('Canceled');
}

const danger = confirm('This action is dangerous. Are you sure?');
if (danger === true){
    alert('Action is done');
}
else{
    alert('Action is canceled');
}
