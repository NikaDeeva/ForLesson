"use strict"
// const user = {
//    name: 'Bob',
//    age: 20
// };
// console.log(user.name);
// console.log(user['name']);

// user.name = 'Alex';
// console.log(user.name);
// user['age'] = 21;
// console.log(user['age']);
// console.log(user);

// user.dirrection = 'Av. javascript';
// console.log(user);
// console.log(user.class);

// const hotel = {
//    name: 'Hitel',
//    stars: 5,
//    capacity: 250,
//    guests: ['Ana', 'Bob', 'Nick']
// }
// delete hotel.stars;
// console.log(hotel);

// let name = 'Hilton';
// let stars = 5;
// const newHotel = {
//    name: name,
//    stars: stars,
// }
// const hotelNew = {
//    name,
//    stars,
//    capacity: 250,
// }
// console.log(hotelNew);

// const myArray = {
//    name: 'Nika',
//    age: 13,
//    city: 'Madrid',
//    occupation: 'Student',
// }
// myArray.age = 14;
// myArray.city = 'Valencia';
// console.log(myArray);
// delete myArray.age;
// console.log(myArray);
// myArray.dirrection = 'Av. javascript';
// console.log(myArray);

// const key = 'person';
// const age = 'old'
// const object = {};
// object[key] = 'Bob';
// object[age] = 15;
// console.log(object);

// const key = 'person';
// const getKey = function(){
//    return 'age';
// }
// const object = {
//    [key]: 'Nick',
//    [getKey()]: 15,
// }
// console.log(object);

// let key = 'login';
// let wordKey = 'password';
// const object = {
//    [key]: 'Java',
//    [wordKey]: 'Hello',
//    name: 'Sara',
// }
// console.log(object);

// const hotel = {
//     name: 'Hilton',
//     stars: 5,
//     get: function(){
//         console.log('Hello');
//     },

//     getOne() {
//         console.log('Hello');
//     }
// }
// hotel.get();

// const me = {
//     name: "Nika",
//     age: 13,
//     hobby: 'Reading',
// };
// console.log(me);

// const car = {
//     brand: 'BMV',
//     model: 4,
//     year: 2014,
//     color: 'pink',
//     get: function(){
//         const info = `Brand: ${this.brand}; Model: ${this.model}; Year: ${this.year}; Color: ${this.color}`;
//         document.getElementById('carInfo').innerText = info;
//     }
// };
// car.get()

const restaurant = {
    name: 'Ginos',
    cuisiner: 'Italian',
    address: 'Av. America',
    rating: 4,
    updateInfo(addressUp, ratingUp){
     this.address = addressUp;
     this.rating = ratingUp;
     this.displayInfo();
    },
    displayInfo(){
        document.getElementById('name').innerText = 'Name: ' + this.name;
        document.getElementById('cuis').innerText = 'Cuisiner: ' + this.cuisiner;
        document.getElementById('address').innerText = 'Address: ' + this.address;
        document.getElementById('rating').innerText = 'Rating: ' + this.rating;
    },
};
restaurant.displayInfo();
function updateRestaurant(){
    const addressUp = document.getElementById('addressUp').value;
    const ratingUp = parseFloat(document.getElementById('ratingUp').value);
    if (addressUp && !isNaN(ratingUp)){
        restaurant.updateInfo(addressUp, ratingUp);
    }
    else{
        alert('Write correct info');
    }
}