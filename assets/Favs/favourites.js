
function displayFavourites() {
  const ul = document.getElementById('fav-list');
  const ls = JSON.parse(localStorage.getItem('favourites'));
  if (ls) {
    ul.innerHTML = `
      ${ls.map(item=>{
        return `<li><a href="../Recipe/recipe.html?recipe=${item.id}">${item.name}</a> <button data-id=${item.id} class="delete-btn">Delete</button></li>`;
      }).join('')}
    `
  }  
}
function removeFavouriteLS(id) {
  const ls = JSON.parse(localStorage.getItem('favourites'));
  if (ls) {
    const filterdLS = ls.filter(item=>{
      return item.id !== id;
    })
    localStorage.setItem('favourites', JSON.stringify(filterdLS));
  }
}

function initButtons() {
  const buttons = document.querySelectorAll('.delete-btn');
  const ul = document.getElementById('fav-list')
  buttons.forEach(button=>{
    button.addEventListener('click', (e) => {
      ul.removeChild(e.target.parentNode)
      removeFavouriteLS(e.target.dataset.id)
    })
  })
}


displayFavourites();
initButtons();