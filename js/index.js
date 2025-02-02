"use strict"
// const isActive = true;

// const one = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (isActive){
//             resolve('Person is active');
//         } else{
//             reject('Person is not active');
//         }
//     }, 2000);
// });
// console.log('Before one.then()');
// one.then(
//     value => {
//         console.log('oneResolve one.then()');
//         console.log(value);
//     },
//     error => {
//         console.log('oneReject, one.then()');
//         console.log(error);
//     }
// );
// console.log('After one.then()')

// one
// .then(value => {
//     console.log(value);
// })
// .catch(error => {
//     console.log(error);
// })

// const fetchUser = (username, onSuccess, onError) => {
//     setTimeout(() => {
//         const isSuccess = false;

//         if(isSuccess){
//             onSuccess('Success value');
//         } else {
//             onError('Error');
//         }
//     }, 1500)
// }
// const onFetchSuccess = user => {
//     console.log(user);
// }
// const onFetchError = error => {
//     console.error(error);
// }
// fetchUser('Bob', onFetchSuccess, onFetchError);

// const fetchUser = username => {
//     return new Promise((resolve, reject) => {
// console.log('Fetching ' + username);
// setTimeout(() => {
//     const isSuccess = true;
//     if(isSuccess){
//         resolve('Success value')
//     } else{
//         reject('Error');
//     }
// }, 1500)
//     })
// }
// fetchUser('Bob')
// .then(user => console.log(user))
// .catch(error => console.error(error));

// function addNums(a, b) {
//     return new Promise((resolve, reject) => {
//         if (typeof(a) !== 'number' || typeof(b) !== 'number'){
//             reject('Data no value');
//         } else{
//             resolve(a + b);
//         }
//     })
// }

// addNums(25, 66)
// .then(result => console.log(result))
// .catch(error => console.error(error));

const numbers = [2, 4, 6, 8, 10];
function checkEven(numbers){
    return new Promise((resolve, reject) => {
        if (!Array.isArray(numbers) || numbers.some(num => typeof(num) !== 'number')){
            reject('Data no value');
        } else if(numbers.some(num => num % 2 !== 0)){
            reject('There are onn numbers');
        } else {
            resolve('All nums are even', () => {
                return numbers.reduce((acc, num) => acc + num, 0);
            });
        }
    })
}
checkEven(numbers)
.then((message, sumNums) => console.log(message, sumNums))
.catch(error => console.error(error));