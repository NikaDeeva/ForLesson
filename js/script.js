"use strict"
// const sum = function(a, b, c){
//     return a + b + c;
// }

// const add = (a, b, c) => a + b + c;

// const a = x => {return x + 5};

// const b = () => {
//     console.log('Hello');
// }

// const arr = [1, 2, 3, 4, 5];
// function sumArray(arr, callback) {
//    let sum = 0;
//    for (let i = 0; i < arr.length; i++){
// sum += callback(arr[i]);
//    }
//    return sum;
//     };
//     function cb (elements){
//         return elements;
//     }
//     console.log(sumArray(arr, cb));

// const add = (...arg) => {
//    console.log(arg);
// }
// add(1, 2, 3, 4, 5);

// const myNewArrowFunction = (...arg) => {
//    console.log(arg);
// }
// myNewArrowFunction(1, 2, 3);
// myNewArrowFunction(100, 200, 300, 400, 500);
// myNewArrowFunction("Js", "Python", "Java", "PHP", "C++");

// const helloOne = () => 'Hello JavaScript';
// console.log(helloOne());

// const helloTwo = (name) => `Hello ${name}`;
// console.log(helloTwo());

const mul = (n, m) => {
   return {
      sum: n + m,
      mult: n * m,
      riz: n - m
   };
};
console.log(mul(2, 3));