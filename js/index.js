"use strict"
//  const callback = () => console.log('Hello');
// //  
// function fun(callback){
//     // ...
//     callback();
// }
// fun(callback());

// const numbers = [11, 32, 31, 54, 58, 36, 57, 8];
// const cost = numbers.map(function(number){
//     return number * 1.6;
// }); console.log(cost);

// function allElements(arr, callback){
// for (let i = 0; i < arr.length; i++){
// if (!callback(arr[i])){
//     return false;
// }
// }
// return true;
// };
// const allEven = allElements([2, 4, 6, 8, 10], function(element){
//     return element % 2 === 0;
// });
// console.log(allEven);

function filterArray(arr, callback){
    const result = [];
    for (let i = 0; i < arr.length; i++){
        if (callback(arr[i])){
            result.push(arr[i]);
        }
    }
    return result;
};
const nums = filterArray([3, 17, 12, 15, 25, 98, 62], function(element){
    return element % 2 !== 0;
});
console.log(nums);