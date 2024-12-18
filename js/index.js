"use strict"
localStorage.setItem(key, value);
const settings = {
    theme: 'dark',
    isAutho: true,
    options: [1, 2, 3],
};
localStorage.setItem('settings', JSON.stringify(settings));
const savedSettings = localStorage.getItem('settings');
const parsedSettings = JSON.parse(settingsFromLS);
console.loga(parsedSettings);
localStorage.removeItem('theme');