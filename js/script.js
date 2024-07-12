"use strict"
// const hotel = {
//     name: 'Hilton',
//     stars: 5,
//     capacity: 250,
// };
// const {name, stars, capacity} = hotel;
// console.log(name, stars, capacity);
// console.log(hotel);

// const {name: hotelName, stars, status: hotelStatus} = hotel;
// console.log(hotelName, stars, hotelStatus);

// const {name, ...rest} = hotel;
// console.log(name);
// console.log(rest);

// const options = {
//     size: {
//         width: 200,
//         height: 300,
//     },
//     items: ['Cake', 'Donut'],
//     extra: true,
// };
// const {size: {width, height}, 
// items: [itemOne, itemTwo], 
// title = 'Menu'
// } = options;
// console.log(title);
// console.log(width);
// console.log(itemOne);
// console.log(itemTwo);

// const rgb = [200, 35, 255];
// const [red, green, blue] = rgb;
// console.log(`Red: ${red}, Green: ${green}, Blue: ${blue}`);

// let red, green, blue;
// [red, green, blue] = rgb;
// console.log(`Red: ${red}, Green: ${green}, Blue: ${blue}`);

// const [red, green, blue, alpha = 0.5] = rgb;
// console.log(`Red: ${red}, Green: ${green}, Blue: ${blue}, Alpha: ${alpha}`);

// const [red, ...colors] = rgb;
// console.log(red);
// console.log(colors);

// const [, , blue] = rgb;
// console.log(blue);

// const user = {
//     name: 'John',
//     age: 30,
//     email: 'john@example.com'
//     }
// const {name, age, email} = user;
// console.log(name, age, email);

const movie = {
    title: 'The Shawshank Redemption',
    director: {
    name: 'Frank Darabont',
    nationality: 'American'
    },
    actors: ['Tim Robbins', 'Morgan Freeman'],
    release_year: 1994,
    ratings: {
    imdb: 9.3,
    rotten_tomatoes: 90
    }
    }
    const {title, director: {name, nationality}, actors: [one, two], release_year, ratings: {imdb, rotten_tomatoes}} = movie;
    console.log(title, name, imdb, two);