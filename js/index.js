"use strict"
// const date = new Date(10000000000);
// console.log(date);


// const dateOne = new Date('January 16, 2025');
// console.log(dateOne);

// const dateTwo = new Date(2020, 9, 18);
// console.log(dateTwo)

// const date = Date.now();
// console.log(date)

// const date = new Date();
// console.log(date);
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getMonth());
// console.log(date.getFullYear());
// console.log(date.getHours());

// const date = new Date();
// console.log(`Time in ms since 1 jan 1970 ${date.getTime()}`);

// let result = 'Date: ';
// result += date.getFullYear() + '/';
// result += (date.getMonth() + 1) + '/';
// result += date.getDate();
// result += ' Time :' + date.getHours() + ':';
// result += date.getMinutes() + ':';
// result += date.getSeconds() + '.';
// result += date.getMilliseconds();
// console.log(result);

// const date = new Date(2025, 0, 15, 20, 0, 0, 0);
// console.log(date.getTime());

// const secondsDate = new Date();
// secondsDate.setFullYear(2026, 2, 14);
// console.log(secondsDate)

let date = new Date();
const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
}
const locateUK = date.toLocaleString('Uk-uk', options);
console.log(locateUK);

const locateUs = date.toLocaleString('en-US', options);
console.log(locateUs);