var drinkButton = document.querySelector("#DrinkBtn");
var content = document.querySelector(".content");
var drinkQuestion1 = document.querySelector("#drinkQuestion1");
var drinkQuestion2 = document.querySelector('#drinkQuestion2');
var burgerImage = document.querySelector("#burgerImage");
// var healthyBtn = document.querySelector("#healthyBtn");

//hide burger image
burgerImage.classList.remove("hide");

//show drink question 1
function startDrinkQuestions() {
  content.classList.add("hide");
  drinkQuestion1.classList.remove("hide");
}

//show drink question 2
function showDrinkQuestion2() {
    content.classList.add("hide");
    drinkQuestion1.classList.add("hide");
    drinkQuestion2.classList.remove("hide");
}

//show drink options based on previous two user choices
function showDrinkOptions() {
//   window.location.href = "./assets/JunkFoods/Junk.html"
}

//add event listener
drinkButton.addEventListener("click", startDrinkQuestions);