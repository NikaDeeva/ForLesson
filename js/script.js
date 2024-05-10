"use strict"
// let value = 'hello';
// console.log(Boolean(value));

// let ch = null;
// console.log(Boolean(ch));


// &&

// const number = 15;
// const result = number > 16 && number < 20;
// console.log(result);

// ||

// const number = 15;
// const result = number < 20 || number > 30;
// console.log(result);

// console.log(!0);
// console.log(!true);

// let cost = 0;
// const sub = 'normal';
// if (sub === 'pro'){
//     cost = 100;
// }
// console.log(cost);

// let cost;
// const sub = 'normal';
// if (sub === 'pro'){
//     cost = 100;
// } 
// else {
//     cost = 0;
// }
// console.log(cost);

// let cost;
// const sub = 'premium';
// if (sub === 'normal'){
//     cost = 0;
// }
// else if(sub === 'pro'){
//     cost = 100;
// }
// else if(sub === 'free'){
//     cost = 200;
// }
// else{
//     alert('Error');
// }
// console.log(cost);
let sub = prompt('Your subscribe?')
let free = 'free';
let pro = 'pro';
let vip = 'vip';
if (sub === free){
    alert('Not allowed');
}
else if(sub === pro){
    alert('Allowed');
}
else if(sub === vip){
    alert('Allowed');
}
console.log(sub);