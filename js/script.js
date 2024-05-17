"use strict"
// let cost;
// const sub = 'premium';
// switch (sub){
//     case 'free':
//         cost = 0;
//         break;
//     case 'pro':
//         cost = 50;
//         break;
//     case 'premium':
//         cost = 200;
//         break;
//     default:
//         console.log('No value');
// }
// console.log(cost);

// const x1 = 10;
// const x2 = 30;
// const number = 45;
// if (number < x1){
// console.log('Num is less');
// }
// else if (number > x2){
//     console.log('Num is more');
// }
// else if (number >= x1 && number <= x2){
//     console.log('Number is in limits');
// }
// else{
//     console.log('Idk');
// }

// const stars = 1;
// let price;
// if (stars === 1){
//     price = 20;
// }
// else if (stars === 2){
//     price = 30;
// }
// else if (stars === 3){
//     price = 50;
// }
// else if (stars === 4){
//     price = 100;
// }
// else if (stars === 5){
//     price = 150;
// }
// else {
//     console.log ('Underfined');
// }
// switch (stars){
//     case 1:
//     price = 20;
//     break;
//     case 2:
//     price = 30;
//     break;
//     case 3:
//     price = 50;
//     break;
//     case 4:
//     price = 100;
//     break;
//     case 5:
//     price = 150;
//     break;
//     default:
//     console.log('Underfined');
//     break;

// }
// let browser = prompt('Your browser?');
// switch (browser){
//     case 'Edge':
//     alert('You have got Edge!');
//     break;
//     case 'Safari':
//     case 'Opera':
//     case 'Chrome':
//     case 'Firefox':
//     alert('We have this browser too');
//     break;
//     default:
//     alert('We hope the website is ok');
//     break;
// }
// let aa = prompt('Your num?');
// switch (aa){
//     case '0':
//     console.log('0');
//     case '1':
//     console.log('1');
//     break;
//     case '2':
//     case '3':
//     console.log('2 or 3');
//     break;
//     default:
//     console.log('Num unknown');
//     break;
// }
// let age = prompt('Your age?');
// if (age >= 0 && age <= 16){
//     alert('Child');
// }
// else if (age >= 17 && age <= 60){
//     alert('Adult');
// }
// else if (age >= 61){
//     alert('Old');
// }
// else{
//     alert('Age unknown');
// }
let option = prompt('What option do you choose?');
switch (option){
    case 'self':
        alert('Ви зможете забрати товар завтра з 12:00 в нашому офісі');
    break;
    case 'curier':
        alert('Кур"єр доставить замовлення завтра з 9:00 до 18:00');
    break;
    case 'pocket':
        alert('Посилка буде відправлена сьогодні');
    break;
    default:
        alert('Вам передзвонит менеджер');
    break;
}