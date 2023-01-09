var drinkButton = document.querySelector("#DrinkBtn");
var content = document.querySelector(".content");
var drinkQuestion1 = document.querySelector("#drinkQuestion1");
var drinkQuestion2 = document.querySelector('#drinkQuestion2');
var burgerImage = document.querySelector("#burgerImage");
var drinksImage = document.querySelector("#drinksImage");
var drinkTileOne = document.querySelector(".TileOne");
var drinkTileTwo = document.querySelector(".TileTwo");
console.log(drinkTileOne);

var firstUserChoice 
var secondUserChoice 
var combinedChoices
var chosenDrink
var url
var backButton = document.getElementById("Button");
var homeButton = document.getElementById("homeButton");

// backButton.classList.add("hide");
// homeButton.classList.remove("hide");

//hide burger image
// burgerImage.classList.remove("hide");

//show drink question 1
function startDrinkQuestions() {
  content.classList.add("hide");
  drinkQuestion1.classList.remove("hide");
  drinksImage.classList.remove("hide")
  burgerImage.classList.add("hide")

}

//show drink question 2
function showDrinkQuestion2(event) {
    firstUserChoice = event.target.id;
    console.log(firstUserChoice);
    content.classList.add("hide");
    drinkQuestion1.classList.add("hide");
    drinkQuestion2.classList.remove("hide");
    homeButton.classList.add("hide");
    backButton.classList.remove("hide");
}

//show drink options based on previous two user choices
function showDrinkOptions(event) {
    secondUserChoice = event.target.id;
    console.log(secondUserChoice);
    combinedChoices = firstUserChoice.concat(secondUserChoice);
    console.log(combinedChoices);
    switch (combinedChoices) {
        case 'alcoholicbitter':
            window.location.href = "./assets/Drinks/alcoholic-bitter.html"
            break;
        case 'alcoholicsweet':
            window.location.href = "./assets/Drinks/alcoholic-sweet.html"
            break;
        case 'non-alcoholicbitter':
            window.location.href = "./assets/Drinks/nonalcoholic-bitter.html"
            break;
        case 'non-alcoholicsweet':
            window.location.href = "./assets/Drinks/nonalcoholic-sweet.html"
            break;
    }
}


//add event listener
drinkButton?.addEventListener("click", startDrinkQuestions);

//'go back' button functions
function returnDrinkQuestion1() {
    content.classList.add("hide");
    drinkQuestion2.classList.add("hide");
    drinkQuestion1.classList.remove("hide");
    homeButton.classList.remove("hide");
    backButton.classList.add("hide");
  }
  
function startAgain() {
    window.location.pathname = "Index.html";
    // startDrinkQuestions();
    // showDrinkQuestion2();
    // content.classList.add("hide");
    // drinkQuestion2.classList.add("hide");
    // drinkQuestion1.classList.remove("hide");
    // homeButton.classList.remove("hide");
}

function openHTML() {
window.location.pathname = "Index.html";
}


function displayRecipe() {
    window.location.href = './drink-recipe.html?name=paloma';
    // send query like drink name = 
    //populate bootstrap card with drink name, image and recipe
    //drink name = drinks[0].strDrink
    //drink image = drinks[0].strDrinkThumb
    //drink ingredients = drinks[0].strIngredient1 (loop through numbers +1 until null?)
    //drink instructions = drinks[0].strInstructions
}

// add event listeners to drink option tiles to trigger call API function
drinkTileOne.addEventListener("click", setupUrl);
drinkTileTwo.addEventListener("click", setupUrl);

//add event listeners to drink option tiles to trigger call API function
// drinkTileOne.addEventListener("click", setupUrl);
// drinkTileTwo.addEventListener("click", setupUrl);
