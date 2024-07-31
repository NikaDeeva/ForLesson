"use strict"
// const baseSalary = 200000;
// const overTime = 15;
// const rate = 20;
// const getWage = (baseSalary, overTime, rate) => {
//     return baseSalary + overTime * rate;
// };
// getWage(baseSalary, overTime, rate);


// const employee = {
//     baseSalary: 200000,
//     overTime: 15,
//     rate: 20,
//     getWage(){
//         return this.baseSalary + this.overTime * this.rate;
//     }
// };
// employee.getWage()


// const animal = {
//     legs: 4,
// }
// const cat = Object.create(animal);
// cat.name = 'Bob';
// console.log(cat);
const animal = {
    eats: true,
}
// const dog = Object.create(animal);
// dog.barks = true;
// for (const key in dog){
//     if (!dog.hasOwenProperty(key)) continue;
//     console.log(key);
// }
const dog = Object.create(animal);
dog.barks = true;
const keysDog = Object.keys(dog);
console.log(keysDog);