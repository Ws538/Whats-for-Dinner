

const mainDiv = document.querySelector("main");

const showNurients = (nutientObj) => {
    let listItems = "";
  for (nutrient in nutientObj) {
    let current = nutientObj[nutrient]
    listItems += `<li><span class="bold">${current.label}:</span> ${current.quantity.toFixed(0)} ${current.unit}</li>`
  }
  return listItems;
}

const saveFavouriteToLs = (obj) => {
  const favourites = JSON.parse(localStorage.getItem('favourites'));
  if (favourites) {
    const exists = favourites.find(fav=>{
      return fav.id === obj.id;
    });
    if (exists) return;
    localStorage.setItem('favourites', JSON.stringify([...favourites, obj]));
  } else {
    localStorage.setItem('favourites', JSON.stringify([obj]));
  }
}

const initSaveButton = (id, name) => {
  const btn = document.getElementById('add-to-fav');
  btn.addEventListener("click", (e) => {
    saveFavouriteToLs({id, name});
  })
}

function showData(recipe) {
  mainDiv.innerHTML = `
  <div class="heading-container">
  <img id="img" src="${recipe.images.REGULAR.url}">
  <div class="heading">
      <h1 id="title">${recipe.label}</h1>
      <h3>${recipe.dishType[0]}</h3>
      <h3>Calories per serving: ${(recipe.calories / recipe.yield).toFixed(0)}</h3>
      <div class="health-labels">

    <div class="labels" >
      ${recipe.healthLabels.map(label=>{
          return `${label}, `
      }).join('')}
  </div>

  </div>
  <button id="add-to-fav">Add to Favourites</button>
  
</div>




</div>
<div class="container">
  <section class="ingredients">
      <h1>Ingredients</h1>
      <ul id="ul">
          ${recipe.ingredientLines.map(ingrident=>{
            return `<li>${ingrident}</li>`
          }).join('')}
      </ul>
      <a href="${recipe.url}">Recipe</a>
  </section>
  <section class="nutrition">
      <h1>Nutrition</h1>
      <ul>
         ${showNurients(recipe.totalNutrients)}
      </ul>
  
  </section>
</div>
    `;
}


window.onload = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const recipeId = urlParams.get("recipe");
    fetch(`https://api.edamam.com/api/recipes/v2/${recipeId}?app_id=86bfcee4&app_key=28ee446263661df1201ba54d78bd5e1d&type=public`)
      .then((res) => res.json())
      .then((data) => {
        showData(data.recipe)
        initSaveButton(recipeId, data.recipe.label);
      });

  };