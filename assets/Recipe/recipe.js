let a =
  "";

const mainDiv = document.querySelector("main");

window.onload = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const recipeId = urlParams.get("recipe");
  fetch(`https://api.edamam.com/api/recipes/v2/${recipeId}?app_id=86bfcee4&app_key=28ee446263661df1201ba54d78bd5e1d&type=public`)
    .then((res) => res.json())
    .then((data) => {
      showData(data.recipe)
    });
};

function showData(recipe) {
  mainDiv.innerHTML = `
    <div class="heading">
    <h1 id="title">${recipe.label}</h1>
    <h3>${recipe.dishType[0]}</h3>
    <h3>Calories per serving: ${(recipe.calories / recipe.yield).toFixed(0)}</h3>
    
</div>

<img id="img" src="${recipe.images.REGULAR.url}">
 <div class="health-labels">
    <h3>Health Labels:</h3>
    <div class="labels">
        ${recipe.healthLabels.map(label=>{
            return `${label}, `
        }).join('')}
    </div>
</div>
<div class="container">
    <section class="ingredients">
        <h1>Ingredients</h1>
        <ul id="ul">
            <li>Apple</li>
            <li>Apple</li>
            <li>Apple</li>
            <li>Apple</li>
            <li>Apple</li>
            <li>Apple</li>
        </ul>
    </section>
    <section class="nutrition">
        <h1>Nutrition</h1>
        <ul>
            <li>Apple</li>
            <li>Apple</li>
            <li>Apple</li>
            <li>Apple</li>
            <li>Apple</li>
            <li>Apple</li>
        </ul>
    
    </section>
</div>
    `;
}
