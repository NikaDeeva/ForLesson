"use strict"
const form = document.querySelector('#form');
const nameExpence = document.querySelector('#name');
const amountExpence = document.querySelector('#amount');
const totalAmount = document.querySelector('#total');
const list = document.querySelector('#list');
const clear = document.querySelector('#clear');
const deleteBtn = document.querySelector('#deleteBtn');

let expences = JSON.parse(localStorage.getItem('expences')) || [];

function updateTotal () {
const total = expences.reduce((sum, expence) => sum + expence.amount, 0);
totalAmount.textContent = total.toFixed(2);
};
function render(){
    list.innerHTML = '';
    expences.forEach((expence, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<span>${expence.name} - ${expence.amount.toFixed(2)}</span>
        <button id="deleteBtn">Delete</button>`;
        list.appendChild(li);
    });
    updateTotal();
};
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = nameExpence.value.trim();
    const amount = parseFloat(amountExpence.value);
if (name && !isNaN(amount) && amount > 0){
    expences.push({ name, amount });
    localStorage.setItem('expences', JSON.stringify(expences));
    name = '';
    amount = '';
    render();
} else {
    alert('Check correction of data');
}
});

// function deleteExpence(index) {
//     expences.splice(index, 1);
//     localStorage.setItem('expences', JSON.stringify(expences));
//     render();
// };
deleteBtn.addEventListener('click', (index) => {
    expences.splice(index, 1);
    localStorage.setItem('expences', JSON.stringify(expences));
    render();
});
clear.addEventListener('click', () => {
const message = confirm('Do you really want to delete the history?');
if (message === true){
    expences = [];
    localStorage.removeItem(expences);
    render();
}
});
render();