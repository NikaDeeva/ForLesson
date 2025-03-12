"use strict"
// fetch('https://jsonplaceholder.typicode.com/albums/85')
// .then(response => response.json())
// .then(data => console.log(data));

// const postAdd = {
//   author: 'Anna',
//   body: 'CRUD',
// };
// const options = {
//   method: 'POST',
//   body: JSON.stringify(postAdd),
//   headers: {
// "Content-Type": 'aplication/json',
//   }
// };
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: "POST",
  headers: {
    "Content-Type": 'aplication/json',
      },
      body: JSON.stringify({
        author: 'Anna',
        body: 'CRUD',
        title: 'Title',
        userId: 100,
      })
})
.then(response => response.json())
.then(post => console.log(post))
.catch(error => console.log(error));


const postAdd = {
  author: 'Anna',
  body: 'CRUD new',
  id: 2,
};
const options = {
  method: 'PATCH',
  body: JSON.stringify(postAdd),
  headers: {
"Content-Type": 'aplication/json',
  },
};
fetch(`https://jsonplaceholder.typicode.com/posts/${postAdd.id}`, options)
.then(response => response.json())
.then(post => console.log(post))
.catch(error => console.log(error));