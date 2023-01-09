let params = (new URL(document.location)).searchParams;
let drinkName = params.get('name');
console.log(drinkName);
url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + drinkName;

//call API function by passing in ID of the tile that was clicked
// function setupUrl(event) {
//     chosenDrink = event.target.innerText;
//     console.log(chosenDrink);
//     url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + chosenDrink;
//     putFetchInFunction();
// }

function putFetchInFunction() {
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
    .then((data) => {
        displayRecipe();
      });
    // displayRecipe();
} 

putFetchInFunction();


// function to display result by opening new html and printing result
function displayRecipe() {
    window.location.href = './drink-recipe.html?name=paloma';
    // send query like drink name = 
    //populate bootstrap card with drink name, image and recipe
    //drink name = drinks[0].strDrink
    //drink image = drinks[0].strDrinkThumb
    //drink ingredients = drinks[0].strIngredient1 (loop through numbers +1 until null?)
    //drink instructions = drinks[0].strInstructions
}