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

const btn = document.querySelector('#btn');
const usersList = document.querySelector('#usersList');
btn.addEventListener('click', () => {
fetchUsers()
.then(users => renderUsers(users))
.catch(error => console.log(error));
});

function fetchUsers(){
    return fetch('https://jsonplaceholder.typicode.com/users')
     .then(response => {
        if (!response.ok){
          throw new Error(response.status);
        }
        return response.json();
     });
};
function renderUsers(users){
const markUp = users.map(user => {
    return `<li>
  <p><b>Name: </b>${user.name}</p>
  <p><b>Email: </b>${user.email}</p>
  <p><b>Company: </b>${user.company.name}</p>
</li>`;
})
.join('');
usersList.insertAdjacentHTML('beforeend', markUp)

}