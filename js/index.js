"use strict"
// IntersectionObserver(callback, options)

// const options = {
//     rootMargin: '50px',
//     threshold: 0.25,
// };
// const onEntry = (entries, observers) => {
//     entries.forEach(entry => {
//         // 
//     })
// };
// const observer = new IntersectionObserver(onEntry, options);

// const options = {
//     root: null,
// rootMargin: '0px',
// threshold: 0.1,
// };
// const observer = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting){
//             const img = entry.target;
//             img.src = img.dataset.src;
//             observer.unobserve();
//         }
//     })
// }, options);
// document.querySelectorAll('.lazy-image').forEach(img => {
//     observer.observe(img);
// })

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.fruits-list li');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const img = entry.target.querySelector('img');
            const title = entry.target.querySelector('h3');

            if (entry.isIntersecting){
                img.src = img.getAttribute('data-high-res');
                entry.target.classList.add('visible');
            } else {
                img.src.replace('-high', '-low');
                entry.target.classList.remove('visible');
            }
        })
    })
    images.forEach(image => {
        observer.observe(image);
    });
});