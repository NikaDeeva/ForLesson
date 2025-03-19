"use strict"
// const fetchUsers = async () => {
//   try{
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const users = await response.json();
//     console.log(users);
//   }
//   catch (error){
// console.log(error.message);
//   }
// };
// fetchUsers()

// const fetchUsers = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/users');
//       const users = await response.json();
//       return users;
// };
// const doUsers = async () => {
//   try {
//     const users = await fetchUsers();
//     console.log()
//   }
//   catch (error){
//     console.log(error.message);
//       }
// };
// doUsers();

const fetchUsers = async () => {
  const url = 'https://jsonplaceholder.typicode.com';
  const first = await fetch(`${url}/users/1`);
  const second = await fetch(`${url}/users/2`);
  const third = await fetch(`${url}/users/3`);

  const firstU = await first.json();
  const secondU = await second.json();
  const thirdU = await third.json();
  console.log(firstU, secondU, thirdU);
};
fetchUsers();