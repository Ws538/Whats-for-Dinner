const searchBar = document.getElementById('search-recipe');
const searchButton = document.getElementById('search-btn');

const saveSearchToLS = (search) => {
    const ls = JSON.parse(localStorage.getItem('recent'));
    if (ls) {
        localStorage.setItem('recent', JSON.stringify([...ls, search]));
    } else {
        localStorage.setItem('recent', JSON.stringify([search]));
    }
}

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
  saveSearchToLS(val);
  window.location = `./assets/Search/search.html?q=${val}`;
})

fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=mojito')
    .then(res => res.json())
    .then(data => console.log(data))