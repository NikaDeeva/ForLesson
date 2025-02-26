"use strict"
document.addEventListener('DOMContentLoaded', () => {
const form = document.querySelector('.search');
const card = document.querySelector('.card');
if (!form || !card){
  console.error('Data not found');
  return;
};
form.addEventListener('submit', async (e) => {
e.preventDefault();
const query = form.query.value.trim().toLowerCase();
if (!query) return;
const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
if (response.ok){
  const data = await response.json();
  render(data);
} else {
  card.innerHTML = '<p class="error">Pokemon is not found</p>';
}
form.reset();
});
function render(pokemon){
card.innerHTML = `  <h2 class="cardName">${pokemon.name}</h2>
  <img class="cardImg" src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
  <p class="cardData"><b>Weight: ${pokemon.weight}</b></p>
  <p class="cardData"><b>Height: ${pokemon.height}</b></p>`;
};
});
