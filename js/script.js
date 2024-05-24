"use strict"
// let number = 0;
// while (number < 10){
//     console.log('number:', number);
//     number += 10;
// }
// let clientCounter = 10;
// const maxClient = 20;
// while (clientCounter < maxClient){
//     console.log(clientCounter);
//     clientCounter += 1;
// }
// let password = '';
// do{
// password = prompt('Write password more than 5 symbols', '')
// } while (password.length < 6);
// console.log('Password', password);

// const maxSign = 5; 
// for (let i = 0; i < maxSign; i += 1;){
// console.log(i);
// }

// const target = 3;
// let sum = 0;
// for (let i = 0; i <= target; i += 1;) {
//     sum += i;
// }
// console.log(sum);

// for (let i = 0; i < 10; i += 1){
//     if (i === 6){
//         break;
//     }
// }

const sum = 10;
for (let i = 0; i < sum; i += 1){
    if (i % 2 === 0){
        continue;
    }
    console.log('nopairs:', i);
}