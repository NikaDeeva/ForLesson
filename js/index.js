"use strict"
// IntersectionObserver(callback, options)

const options = {
    rootMargin: '50px',
    threshold: 0.25,
};
const onEntry = (entries, observers) => {
    entries.forEach(entry => {
        // 
    })
};
const observer = new IntersectionObserver(onEntry, options)