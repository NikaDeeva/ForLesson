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

// const movie = {
//     title: 'The Shawshank Redemption',
//     director: {
//     name: 'Frank Darabont',
//     nationality: 'American'
//     },
//     actors: ['Tim Robbins', 'Morgan Freeman'],
//     release_year: 1994,
//     ratings: {
//     imdb: 9.3,
//     rotten_tomatoes: 90
//     }
//     }
//     const {title, director: {name, nationality}, actors: [one, two], release_year, ratings: {imdb, rotten_tomatoes}} = movie;
//     console.log(title, name, imdb, two);

// const books = {
//     count: 3,
//     list: [
//     {
//     title: 'The Great Gatsby',
//     author: 'F. Scott Fitzgerald',
//     year: 1925
//     },
//     {
//     title: 'To Kill a Mockingbird',
//     author: 'Harper Lee',
//     year: 1960
//     },
//     {
//     title: '1984',
//     author: 'George Orwell',
//     year: 1949
//     }
//     ]
//     }
    // const {count, list: [one = {titleOne, authorOne, yearOne}, two = {titleTwo, authorTwo, yearTwo}, three = {titleThree, authorThree, yearThree}]} = books;
    // const {count, list} = books;
    // const [one, two, three] = list;
    // const {title: titleOne, author: authorOne, year: yearOne} = one;
    // const {title: titleTwo, author: authorTwo, year: yearTwo} = two;
    // const {title: titleThree, author: authorThree, year: yearThree} = three;
    // console.log(two);
    // console.log(authorOne);
    // console.log(yearThree);
    // const person = {
    //     name: 'Nelli',
    //     surname: 'Laroy',
    //     age: 25
    //     };
    //     const personInfo = ({name, surname, age}) => {
    //         return `My name is ${name} ${surname}. I am ${age}`;
    //     }
        
    //     console.log(personInfo(person));

    // const student = {
    //     name: 'Bruce',
    //     surname: 'Lee',
    //     grades: [4, 5, 3]
    //     };
    //     const calculateAverageGrade = ({grades}) => {
    //         const [first, second, third] = grades;
    //         return ((first + second + third) / grades.length);
    //     }
    //     console.log(calculateAverageGrade(student));

    const items = [
        { name: 'Футболка', price: 250, quantity: 2 },
        { name: 'Джинси', price: 800, quantity: 1 },
        { name: 'Кросівки', price: 1200, quantity: 1 }
        ];

        const calculateTotalCost = (item) => {
          let total = 0;
          for (const {price, quantity} of item){
            total += price * quantity;
          }
          return total;
        }
        
        console.log(calculateTotalCost(items));