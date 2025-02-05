"use strict"
// const makePromise = (text, delay) => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(text), delay)
//     })
// }
// const promiseOne = makePromise('promise one', 1500);
// const promiseTwo = makePromise('promise two', 3000);

// Promise.all([promiseOne, promiseTwo])
// .then((value) => {
//     console.log(value);
// })
// .catch((error) => console.log('error'));

// const makePromise = (text, delay) => {
//         return new Promise(resolve => {
//             setTimeout(() => resolve(text), delay)
//         })
//     }
//     const promiseOne = makePromise('promise one', 1500);
//     const promiseTwo = makePromise('promise two', 3000);
    
//     Promise.race([promiseOne, promiseTwo])
//     .then((value) => {
//         console.log(value);
//     })
//     .catch((error) => console.log('error'));

// Promise.any([
//     new Promise((resolve, reject) => setTimeout(() => reject(new Error('Oops!')), 1000)),
//     new Promise((resolve, reject) => setTimeout(() => resolve('Great!'), 1500)),
//     new Promise((resolve, reject) => setTimeout(() => reject(new Error('Error')), 2000))
// ]).then(value => console.log(value))
// .catch(error => {
//     console.log(error);
// });

// new Promise(resolve => resolve('success')).then(value => console.log(value));
// Promise.resolve('success').then(value => console.log(value));

// new Promise((resolve, reject) => reject(error)).catch(error => console.log(error));
// Promise.reject(error).catch(error => console.log(error));

// const makePromise = guestName => {
//     if (guestName === '' || guestName === undefined){
//         return {
//             success: false,
//             message: 'Error guest name',
//         }
//     } 
//     return {
//         success: true,
//         message: `Welcome ${guestName}`,
//     };
// }
// const result = makePromise('');

// if (result.success){
//     console.log(result.message);
// } else {
//     console.error(result.message);
// }

// const makePromise = (guestName, onSuccess, onError) => {
//     if (guestName === '' || guestName === undefined){
//         return(onError('Error guest name'));
//     }
//     onSuccess(`Welcome ${guestName}`);
// }
// makePromise('', 
//     success => console.log(success),
//     error => console.log(error)
// );

const makePromise = guestName => {
    if (guestName === '' || guestName === undefined){
        return Promise.reject('Error guest name')
    }
    return Promise.resolve(`Welcome ${guestName}`);
}
makePromise('Bob')
.then(value => console.log(value))
.catch(error => console.error(error));