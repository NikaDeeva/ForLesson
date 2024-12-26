"use strict"
let users = JSON.parse(localStorage.getItem('users')) || [];
let editIndex = null;
const addBtn = document.getElementById('addBtn');
const editBtn = document.getElementById('editBtn');
const deleteBtn = document.getElementById('deleteBtn');
function renderTable(){
    const tableBody = document.getElementById('tbody');
    tableBody.innerHTML = '';
    users.forEach((user, index) => {
        const row = document.createElement('tr');
        row.innerHTML =
         `<td>${user.name}</td>
<td>${user.surname}</td>
<td>${user.email}</td>
<td>${user.phone}</td>
<td>
    <button id='editBtn'>Edit</button>
    <button id='deleteBtn'>Delete</button>
</td>`;
tableBody.appendChild(row);
    }); 
};

addBtn.addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('tel').value;

    if (name && surname && email && phone){
        const user = {name, surname, email, phone};
        if (editIndex !== 0){
            users[editIndex] = user;
            editIndex = null;
        }
        else {
            users.push(user);
        }
        localStorage.setItem('users', JSON.stringify(users));
        renderTable();
       name = '';
       surname = '';
       email = '';
       phone = '';
    } else {
        alert('Fill all fields');
    }
});
// function addUser(){
//     const name = document.getElementById('name').value;
//     const surname = document.getElementById('surname').value;
//     const email = document.getElementById('email').value;
//     const phone = document.getElementById('tel').value;

//     if (name && surname && email && phone){
//         const user = {name, surname, email, phone};
//         if (editIndex !== 0){
//             users[editIndex] = user;
//             editIndex = null;
//         }
//         else {
//             users.push(user);
//         }
//         localStorage.setItem('users', JSON.stringify(users));
//         renderTable();
//        name = '';
//        surname = '';
//        email = '';
//        phone = '';
//     } else {
//         alert('Fill all fields');
//     }
// };
editBtn.addEventListener('click', () => {
    const user = users[index];
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('tel').value;
    name = user.name;
    surname = user.surname;
    email = user.email;
    phone = user.phone;
});
// function editUser(index){
//     const user = users[index];
//     const name = document.getElementById('name').value;
//     const surname = document.getElementById('surname').value;
//     const email = document.getElementById('email').value;
//     const phone = document.getElementById('tel').value;
//     name = user.name;
//     surname = user.surname;
//     email = user.email;
//     phone = user.phone;
// };
deleteBtn.addEventListener('click', () => {
    users.splice(index, 1);
    localStorage.setItem('users', JSON.stringify(users));
    renderTable();
});
// function deleteUser(index){
//     users.splice(index, 1);
//     localStorage.setItem('users', JSON.stringify(users));
//     renderTable();
// };
renderTable();