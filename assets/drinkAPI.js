let params = (new URL(document.location)).searchParams;
let drinkName = params.get('name');
console.log(drinkName);
url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + drinkName;
const drinkImgDisplay = document.querySelector('img');
const drinkNameDisplay = document.querySelector('h1');
const drinkIngredientsDisplay = document.querySelector('ol');
const drinkInstructionsDisplay = document.querySelector('p');

function putFetchInFunction() {
    fetch(url)
    .then(res => res.json())
    // .then(data => console.log(data))
    .then((data) => {
        displayRecipe(data)
      });
    // .then((data) => {
    //     // displayRecipe();
    //   });
} 

// function to display result by populating page with recipe details
function displayRecipe(drinks) {
    drinkImgDisplay.setAttribute('src', drinks.drinks[0].strDrinkThumb);
    drinkNameDisplay.innerHTML = drinks.drinks[0].strDrink;
    drinkInstructionsDisplay.innerHTML = drinks.drinks[0].strInstructions;
    //drinkIngredientsDisplay = drinks.drinks[0].strIngredient1 (loop through numbers +1 until null?)
}

function listIngredients() {
    for (let i = 0; i < ; i++)
    const ingredientItem = document.createElement('list item');
    ingredientItem.innerHTML = drinks.drinks[0].strIngredient1;
    drinkIngredientsDisplay.appendChild(ingredientItem);
}

putFetchInFunction();

//call API function by passing in ID of the tile that was clicked
// function setupUrl(event) {
//     chosenDrink = event.target.innerText;
//     console.log(chosenDrink);
//     url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + chosenDrink;
//     putFetchInFunction();
// }