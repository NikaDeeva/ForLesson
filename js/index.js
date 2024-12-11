// const dog = {
//     name: 'Bobik',
//     age: 5,
//     isGoodBoy: false,
//     bark() {
//         console.log('Woof');
//     }
// }
// const json = JSON.stringify(dog);
// console.log(json);

// const jsonNew = JSON.stringify(() => {
//     console.log('Hello');
// });
// console.log(jsonNew);
// console.log(JSON.parse("5"));
// console.log(JSON.parse("true"));

// const jsonTwo = '{"name": "Bobik","age": 5, "isGoodBoy": false}';
// const dogNew = JSON.parse(jsonTwo);
// console.log(dogNew);
// console.log(dogNew.name);

const book = `{"name": "Eat Pray Love", "author": "Elizabeth", "year": 2006, "genre": "dramma"}`;
console.log(JSON.parse(book));

const name = prompt('Your name?');
const age = prompt('Your age?');
const data = {
    name: name,
    age: parseInt(age, 10),
};
const jsonData = JSON.stringify(data);
console.log(JSON.parse(jsonData));