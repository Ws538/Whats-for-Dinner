let params = (new URL(document.location)).searchParams;
let drinkName = params.get('name');
url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + drinkName;
const drinkImgDisplay = document.querySelector('img');
const drinkNameDisplay = document.querySelector('h1');
const drinkIngredientsListEl = document.querySelector('ol');
const drinkInstructionsDisplay = document.querySelector('p');

function callAPI() {
    fetch(url)
    .then(res => res.json())
    // .then(data => console.log(data))
    .then((data) => {
        displayRecipe(data)
      });
} 

// function to display result by populating page with recipe details
function displayRecipe(drinks) {
    drinkImgDisplay.setAttribute('src', drinks.drinks[0].strDrinkThumb);
    drinkNameDisplay.innerHTML = drinks.drinks[0].strDrink;
    drinkInstructionsDisplay.innerHTML = drinks.drinks[0].strInstructions;
    listIngredients(drinks);
}


function listIngredients(currentDrinks) {
    const currentDrink = currentDrinks.drinks[0];
    for (let i = 1; i < 10 ; i++) {
        const ingredientKey = 'strIngredient' + i
        const ingredientName = currentDrink[ingredientKey];

        if(!ingredientName){
            return
        }

        const ingredientItem = document.createElement('li');
        ingredientItem.innerHTML = ingredientName;
        drinkIngredientsListEl.appendChild(ingredientItem);
    } 
 }

callAPI();

//call API function by passing in ID of the tile that was clicked
// function setupUrl(event) {
//     chosenDrink = event.target.innerText;
//     console.log(chosenDrink);
//     url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + chosenDrink;
//     putFetchInFunction();
// }