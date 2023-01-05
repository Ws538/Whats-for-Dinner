var drinkButton = document.querySelector("#DrinkBtn");
var content = document.querySelector(".content");
var drinkQuestion1 = document.querySelector("#drinkQuestion1");
var drinkQuestion2 = document.querySelector('#drinkQuestion2');
var burgerImage = document.querySelector("#burgerImage");
var firstUserChoice 
var secondUserChoice 
var combinedChoices
// var healthyBtn = document.querySelector("#healthyBtn");

//hide burger image
burgerImage.classList.remove("hide");

//show drink question 1
function startDrinkQuestions() {
  content.classList.add("hide");
  drinkQuestion1.classList.remove("hide");
}

//show drink question 2
function showDrinkQuestion2(event) {
    firstUserChoice = event.target.id;
    console.log(firstUserChoice);
    content.classList.add("hide");
    drinkQuestion1.classList.add("hide");
    drinkQuestion2.classList.remove("hide");
}

//show drink options based on previous two user choices
function showDrinkOptions(event) {
    secondUserChoice = event.target.id;
    console.log(secondUserChoice);
    combinedChoices = firstUserChoice.concat(secondUserChoice);
    //   switch case for each of the four combos using var combinedChoices
// window.location.href = "./assets/TBC"
}

//add event listener
drinkButton.addEventListener("click", startDrinkQuestions);