"use strict"
// const btn = document.querySelector('#getFact');
// const p = document.getElementById('fact');
// btn.addEventListener('click', () => {
// fetch('https://catfact.ninja/fact')
//  .then(response => response.json())
//  .then(data => {
//     p.textContent = data.fact;
//  })
//  .catch(error => {
//     p.textContent = 'There is an error 😿';
//     console.log(error);
//  });
// });

// const btn = document.querySelector('#btn');
// const usersList = document.querySelector('#usersList');
// btn.addEventListener('click', () => {
// fetchUsers()
// .then(users => renderUsers(users))
// .catch(error => console.log(error));
// });

// function fetchUsers(){
//     return fetch('https://jsonplaceholder.typicode.com/users?_limit=5&_sort=name')
//      .then(response => {
//         if (!response.ok){
//           throw new Error(response.status);
//         }
//         return response.json();
//      });
// };
// function renderUsers(users){
// const markUp = users.map(user => {
//     return `<li>
//   <p><b>Name: </b>${user.name}</p>
//   <p><b>Email: </b>${user.email}</p>
//   <p><b>Company: </b>${user.company.name}</p>
// </li>`;
// })
// .join('');
// usersList.insertAdjacentHTML('beforeend', markUp)

// }

// const searchParams = new URLSearchParams({
//   _limit: 3,
//   _sort: 'name',
// });
// console.log(searchParams.toString());
// const url = `https://jsonplaceholder.typicode.com/users?${searchParams}`;
// console.log(url);

// const headers = new Headers({
//   "Content-Type": "application/json",
// "X-Custom-Header": "custom value",
// });
// fetch('https://jsonplaceholder.typicode.com/users', {
//   headers: {}
// });

const headers = {
  "Accept": "application/json",
  "Content-Type": "application/json",
  "X-Custom-Header": "custom value",
  "Authorization": "YOUR_API_TOKEN",
}
.fetch('https://api.example.com/data', {
  method: "GET",
  headers: headers,
}).then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));