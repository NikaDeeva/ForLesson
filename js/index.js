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
// const animal = {
//     eats: true,
// }
// const dog = Object.create(animal);
// dog.barks = true;
// for (const key in dog){
//     if (!dog.hasOwenProperty(key)) continue;
//     console.log(key);
// }
// const dog = Object.create(animal);
// dog.barks = true;
// const keysDog = Object.keys(dog);
// console.log(keysDog);

// class User {
//     #mail;
// constructor({name, age, mail}){
//     this.name = name;
//     this.age = age;
//     this.#mail = mail;
// }
// getMail() {
//     return this.#mail;
// }
// changeMail(newMail){
// return this.#mail = newMail;
// }
// }
// const a = new User('Bob', 22);
// console.log(a)
// const b = new User('Nika', 15);
// console.log(b);

// const a = new User({
//     name: 'Bob',
//     age: 22,
//     mail: 'bob@gmail.com'
// });
// a.changeMail('newbob@gmail.com');
// console.log(a.getMail());
// console.log(a.#mail);

// const b = new User({
//     name: 'Nika',
//     age: 15,
// });
// console.log(b);


// class User{
//     static Roles = {
//         ADMIN: 'admin',
//         USER: 'user',
//     }
//     #mail;
//     #role;
//     constructor({name, age, mail, role}){
//     this.name = name;
//     this.age = age;
//     this.#mail = mail;
//     this.#role = role;
//     }
//     get role(){
//      return this.#role;
//     }
//     set role(newrole){
//       if (newMail === ''){
//         console.log('error');
//         return;
//       }
//       this.role = newrole;
//     }
// }
// const c = new User({
//     mail: 'c@gmail.com',
//     role: User.Roles.ADMIN,
// });
// console.log(c.role);
// c.role = User.Roles.USER;
// console.log(c.role);

// class User{
//   static #emails = [];
//   static isEmails(email){
//     return User.#emails.includes(email);
//   }
//   #email;
//   constructor({email}){
//     this.#email = email;
//     User.#emails.push(email);
//   }
// }
// const newMail = new User({ email: 'test@gmail.com'});
// console.log(User.isEmails('test@gmail.com'));

class User {
  #email;
  constructor(email){
    this.#email = email;
  }
  get email(){
    return this.#email;
  }
  set email(newEmail){
    this.#email = newEmail;
  }
};
class Admin extends User{
  constructor({email, post}){
    super(email);
    this.post = post;
  }
}
const admin = new Admin ({email: 'test@gmail.com', post: []});
console.log(admin);
console.log(admin.email);