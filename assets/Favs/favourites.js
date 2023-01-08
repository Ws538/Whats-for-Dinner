const ul = document.getElementById('fav-list');
const ls = JSON.parse(localStorage.getItem('favourites'));
if (ls) {
  ul.innerHTML = `
    ${ls.map(item=>{
      return `<li><a href="${window.location.origin}/assets/Recipe/recipe.html?recipe=${item.id}">${item.name}</a></li>`;
    }).join('')}
  `
}