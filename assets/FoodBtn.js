var foodButton = document.querySelector("#FoodBtn");
var content = document.querySelector(".content");
var foodQuestion = document.querySelector("#foodQuestion");
var burgerImage = document.querySelector("#burgerImage");
var healthyBtn = document.querySelector("#healthyBtn");

//render Food Questions
burgerImage.classList.remove("hide");

function startFoodQuestions() {
  content.classList.add("hide");
  foodQuestion.classList.remove("hide");
}

function openHealthyHTML() {
  window.location.href = "./assets/HealthyFoods/healthy.html"
}

function openJunkHTML() {
  window.location.href = "./assets/JunkFoods/Junk.html"
}

foodButton.addEventListener("click", startFoodQuestions);
