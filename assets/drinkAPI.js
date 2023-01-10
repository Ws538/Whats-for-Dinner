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
    console.log(drinks)
    const randomDrinkIndex = Math.floor(Math.random() * drinks.drinks.length);
    const drink = drinks.drinks[randomDrinkIndex];
    drinkImgDisplay.setAttribute('src', drink.strDrinkThumb);
    drinkNameDisplay.innerHTML = drink.strDrink;
    drinkInstructionsDisplay.innerHTML = drink.strInstructions;
    listIngredients(drink);
}


function listIngredients(currentDrinks) {
    const currentDrink = currentDrinks;
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