"use strict"
const isActive = true;

const one = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (isActive){
            resolve('Person is active');
        } else{
            reject('Person is not active');
        }
    }, 2000);
});
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

one
.then(value => {
    console.log(value);
})
.catch(error => {
    console.log(error);
})