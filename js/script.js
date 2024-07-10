"use strict"
// const user = {
//     name: 'Bob',
//     age: 15,
//     class: 10,
// }
// for (const key in user){
//     console.log('Keys', key);
// }
// for (const key in user){
//     console.log('Values', user[key]);
// }
// const keys = Object.keys(user);
// console.log(keys);

// const values = Object.values(user);
// console.log(values);

// const entries = Object.entries(user);
// console.log(user);

// const hotel = {
//     name: 'Hilton',
//     stars: 5,
//     capacity: 350,
// }
// const keys = Object.keys(hotel);
// console.log(keys);
// for (const key of keys){
//     console.log(hotel[key]);
// }

// const entries = Object.entries(hotel);
// console.log(entries);
// for (const entry of entries){
//     const key = entry[0];
//     const value = entry[1];
//     console.log(`${key}: ${value}`);
// }

// const goods = {
//     apples: 7,
//     oranges: 10,
//     kiwi: 5,
//     grapes: 8,
// }
// const values = Object.values(goods);
// let total = 0;
// for (const value of values){
//     total += value;
// }
// console.log(total);

// const tem = [33, 30, 28];
// const min = Math.min(tem);
// console.log(min);

// const minTemp = Math.min(...tem);
// console.log(minTemp);

// const names = ['Bogdan', 'Yulia', 'David', 'Roman', 'Sofia', 'Dmytro'];
// const spreadNames = [...names];
// console.log(names);
// console.log(spreadNames);
// console.log(spreadNames === names);
// const sliceNames = names.slice();
// console.log(names);
// console.log(sliceNames);
// const newNames = [...names, 'Artur'];
// console.log(newNames);
// const num = [1, 2, 3];
// const letters = ['a', 'b', 'c'];
// const sumArr = [...num, ...letters];
// (sumArr);

// const names = ['Sara', 'Nick', 'Din', 'Alex'];
// const newNames = [...names, 'Bob'];
// console.log(newNames);

// const names = ['Sara', 'Nick', 'Din', 'Alex'];
// const num = [2, 5, 8, 4];
// const arr = [...names, ...num];
// console.log(arr);

// const nums = [3, 5, 4, 1];
// const newNums = [...nums, 3];
// console.log(newNums);

// const names = ['Sara', 'Nick', 'Din', 'Alex'];
// const newNames = [...names.slice(0, 1), 'Bob', ...names.slice(3)];
// console.log(newNames);

// const a = {
//     x: 5,
//     y: 10,
// }
// const b = {
//     x: 20,
//     c: 25,
// }
// const d = Object.assign({}, a, b);
// console.log(d);

// const d = { r: 25, ...a, t: 30, ...b};
// console.log(d);

let a = 10;
let b = 15;
a = 20;
console.log(a);
console.log(b);

const c = ['Bob'];
const d = c;
console.log(c);
console.log(d);
c.push('Nick');
console.log(c);
console.log(d);