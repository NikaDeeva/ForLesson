// "use strict"
// // імперативний
// const nums = [1, 2, 3, 4, 5, 6];
// const filterNum = [];
// for (let i = 0; i < nums.length; i++){
//   if (nums[i] > 3){
//     filterNum.push(nums[i]);
//   }
// }
// console.log(filterNum);

// // декларативний
// const numbers = [1, 2, 3, 4, 5, 6];
// const filterNumbers = numbers.filter(value => {
//   return value > 3;
// });
// console.log(filterNumbers);


// const a = (array, value) => {
//   for (let i = 0; i < array.length; i++){
//     array[i] = array[i] * value;
//   }
// }
// const number = [1, 2, 3, 4, 5, 6];
// a(number, 2);
// console.log(number);

// const pure = (array, value) => {
//   const result = [];
//   for (let i = 0; i < array.length; i++){
//     result.push(array[i] * value);
//   }
//   return result;
// }
// const arr = [1, 2, 3, 4, 5, 6];
// const doubleNums = pure(arr, 2);
// console.log(arr);
// console.log(doubleNums);

// const arr = [1, 2, 3, 4, 5, 6];

// arr.forEach(num => console.log(num));
// arr.forEach((num, index) => console.log(index, num));

// const doubled = arr.map(num => num * 2);
// console.log(doubled);

const users = [ 
  {name: 'Bob', age: 15},
  {name: 'Nick', age: 27},
  {name: 'Alex', age: 47}
];
const names = users.map(user => user.name);
console.log(names);