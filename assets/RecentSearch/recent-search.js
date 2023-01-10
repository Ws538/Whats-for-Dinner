const ul = document.getElementById('recent-list');
const ls = JSON.parse(localStorage.getItem('recent'));
if (ls) {
  ul.innerHTML = `
    ${ls.map(item=>{
      return `<li><a href="../Search/search.html?q=${item}">${item}</a>  <button data-id=${item} class="delete-btn">Delete</button></li>`;
    }).join('')}
  `
}

function removeFavouriteLS(name) {
  const ls = JSON.parse(localStorage.getItem('recent'));
  if (ls) {
    const filterdLS = ls.filter(item=>{
      return item !== name;
    })
    console.log(filterdLS)
    localStorage.setItem('recent', JSON.stringify(filterdLS));
  }
}

function initButtons() {
  const buttons = document.querySelectorAll('.delete-btn');
  const ul = document.getElementById('recent-list')
  buttons.forEach(button=>{
    button.addEventListener('click', (e) => {
      ul.removeChild(e.target.parentNode)
      removeFavouriteLS(e.target.dataset.id)
    })
  })
}

initButtons();