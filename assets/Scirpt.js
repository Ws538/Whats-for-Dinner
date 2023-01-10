const searchBar = document.getElementById('search-recipe');
const searchButton = document.getElementById('search-btn');

const saveSearchToLS = (search) => {
    const ls = JSON.parse(localStorage.getItem('recent'));
    if (ls) {
        const exits = ls.find(item=>{
            return item === search;
        })
        if (exits) return;
        localStorage.setItem('recent', JSON.stringify([...ls, search.toLowerCase()]));
    } else {
        localStorage.setItem('recent', JSON.stringify([search.toLowerCase()]));
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

