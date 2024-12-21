"use strict"
// localStorage.setItem(key, value);
// const settings = {
//     theme: 'dark',
//     isAutho: true,
//     options: [1, 2, 3],
// };
// localStorage.setItem('settings', JSON.stringify(settings));
// const savedSettings = localStorage.getItem('settings');
// const parsedSettings = JSON.parse(settingsFromLS);
// console.loga(parsedSettings);
// localStorage.removeItem('theme');
// const text = document.getElementById('authoSave');
// const STORAGE_KEY = 'authoSave';
// const savedText = localStorage.getItem(STORAGE_KEY);
// if (savedText){
//     text.value = savedText;
// }
// text.addEventListener('input', (e) => {
//     localStorage.setItem(STORAGE_KEY, text.value);
// });
const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    localStorage.setItem('username', name);
    localStorage.setItem('userage', age);
    localStorage.setItem('useremail', email);
    alert('Data saved');
});
window.addEventListener('load', () => {
    const name =  localStorage.getItem('username');
    const age = localStorage.getItem('userage');
    const email =  localStorage.getItem('useremail');
    if (name && age && email){
        alert(`Data saved. Name: ${name} Age: ${age} Email: ${email}`);
    }
});