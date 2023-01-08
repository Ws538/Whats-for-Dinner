const searchBar = document.getElementById('search-recipe');
const searchButton = document.getElementById('search-btn');

searchBar.addEventListener('focus', (e) => {
    searchButton.style.opacity = "1";
})
searchBar.addEventListener('focusout', (e) => {
    if (!e.target.value.length){
        searchButton.style.opacity = "0";
    }
   
})

searchButton.addEventListener('click', (e) => {
  const val = searchBar.value;
  if (!val.length) return;
  window.location = location.origin + `/assets/Search/search.html?q=${val}`;
})

fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=mojito')
    .then(res => res.json())
    .then(data => console.log(data))