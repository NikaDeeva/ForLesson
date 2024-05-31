"use strict"
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const arr = ['apple', 12, true, undefined];

// const fruits = ['apple', 'kiwi', 'mango'];
// fruits[0] = 'orange';
// console.log(fruits.length);
// const lastIndex = fruits.length - 1;
// console.log(lastIndex);
// console.log(fruits[0]);
// console.table(fruits);

// const animals = ['cat', 'dog', 'cow'];
// animals[10] = 'fish';
// console.table(animals);
// console.log(animals.length);

// const sports = ['swimming', 'hiking', 'badminton', 'basketball'];
// sports[1] = 'futball';
// sports[3] = 'gymnastics';
// sports[7] = 'dancing';
// console.log(sports.length);
// console.log(sports.length - 1);
// console.table(sports);

// const arrOne = [1, 5, '4', 'hello'];
// const arrTwo = [true, 2, {}, ['a'], 222];
// console.log(arrOne[1]);
// console.log(arrTwo[1]);
// console.log(arrOne[1] + arrTwo[1]);

// const movies = ['Titanic', 'Jumanji', 'Star Wars', 'Spiderman', '1+1', 'Orphan'];
// movies[6] = 'Hobbit';
// console.log(movies[0]);
// console.log(movies.length);
// console.table(movies);

// for 
// 
// for (let i = 0; i < names.length; i += 1){
//     console.log('Name:', names[i]);
// }
// for (const name of names){
//     console.log(name);
// }
// const names = ['Alisa', 'Matvey', 'Dmytro'];
// const nameFind = 'Matvey';
// let message;
// for (const name of names){
//     if (name === nameFind){
//         message = 'User found';
//         break;
//     }
//     message = 'User not found';
// }
// console.log(message);
// const numbers = [133, 2, 67, 77, 84, 12, 765, 8, 943];
// const sum = 15;
// for (let i = 0; i < numbers.length; i += 1){
//     if (numbers[i] < sum){
//         continue;
//     }
//     console.log(`Number is more than ${sum} - ${numbers[i]}`)
//     }
// const arr = [
//     [1, 3, 5], 
//     [200, 5, 30],
//     [36, 98, 80]
// ];
// console.log(arr[0][2]);
// console.log(arr[2][0]);

// const string  = 'GoIteens';
// for (const letters of string ){
//     console.log(letters);
// }

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;
// for (let i = 0; i < cart.length; i += 1){
//     total += cart[i];
//     console.log(total);
// }

const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
let total = 0;
for (let i = 0; i < numbers.length; i += 1){
    if (numbers[i] % 2 === 0){
        total += numbers[i];
    }
}
console.log(total);