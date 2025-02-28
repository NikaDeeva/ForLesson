"use strict"
document.addEventListener('DOMContentLoaded', () => {
const input = document.querySelector('#input');
const form = document.querySelector('.form');
const list = document.querySelector('.newsList');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const topic = input.value;
  if (!topic){
    alert('Write correct search');
  } else{
    list.innerHTML = '';
fetchNews(topic);
  }
  function fetchNews(topic){
    const apiKey = '96611445a11e473daa4019771c28da7d';
  const data = fetch(`https://newsapi.org/v2/everything?q=${topic}&apiKey=${apiKey}&pageSize=10`)
  .then(response => response.json())
  .then(general => {
    if (general.status == 'ok'){
  renderNews(general.articles);
    } else{
      console.error(general.status);
      alert('There is a problem');
    }
  })
  .catch(error =>{
    console.error(error);
    alert('There is not such topic');
  } );
  
  function renderNews(articles) {
    const markUp = articles.map(article => {
      return ` <li class="newsItem">
      <p class="author">Author: ${article.author}</p>
      <h3 class="title">${article.title}</h3>
      <p class="describe">${article.description}</p>
      <div class="imgWrap">
        <img src="${article.urlToImage}" alt="" class="image">
      </div>
    </li>`;
    });
    list.insertAdjacentHTML('beforeend', markUp.join(''));
  }
  }
  })
  
});
