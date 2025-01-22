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

// let date = new Date();
// const options = {
//     weekday: 'long',
//     year: 'numeric',
//     month: 'short',
//     day: 'numeric',
//     hour: '2-digit',
//     minute: '2-digit',
// }
// const locateUK = date.toLocaleString('Uk-uk', options);
// console.log(locateUK);

// const locateUs = date.toLocaleString('en-US', options);
// console.log(locateUs);

// const now = new Date();
// console.log(now.toString());

// const now = new Date();
// console.log(now.toTimeString())

// let date = new Date();
// console.log(+date);

// let start = new Date();
// for (let i = 0; i < 100000; i++){
//     let doSmth = i * i * i;
// }
// let end = Date.now();
// console.log(end - start);

// const date = new Date();
// console.log(date);
// console.log(date.toDateString());
// console.log(date.toTimeString());

// let today = new Date();
// let tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
// const ms = tomorrow - today;
// console.log(parseFloat(ms / 1000));

// const getAge = (birthDate) => {
// let today = new Date();
// const birth = new Date(birthDate);
// let age = today.getFullYear() - birth.getFullYear();
// const isMore = today.getMonth() > birth.getMonth() || 
// (today.getMonth() === birth.getMonth() && today.getDate >= birth.getDate());
// if (!isMore){
//     age--;
// }
// return age;
// };
// console.log(getAge('2013-06-04'));

// function checkDate(date){
//     let today = Date.now();
//     let givenDate = new Date(date);
//     return today < givenDate;
// }
// console.log(checkDate('2025-01-01'));

// let birthDay = prompt('Your birthday');
// function birth(birthDate){
//     let today = new Date().getTime();
//     let birth = new Date.getTime(birthDate);
// const days = Math.floor((birth - today) / (1000 * 60 * 60 * 24) );
// return days;
// }
// console.log(birth(birthDay));

let yearI = parseInt(prompt('Year')) ;
let monthI = parseInt(prompt('Month')) ;
function getLastDayOfMonth(year, month) {
    let today = new Date(`${year}-${month-1}`);
    let nextYearDate;
    if (month - 1 === 11){
nextYearDate = new Date(`${year+1}-00-01`);
    } else {
        nextYearDate = new Date(`${year}-${month}-01`); 
    }
    const days = Math.floor((nextYearDate - today) / (1000 * 60 * 60 * 24));
    return days;
}
console.log(getLastDayOfMonth(yearI, monthI));