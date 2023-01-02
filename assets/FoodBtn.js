var foodButton = document.querySelector("#FoodBtn");
var content = document.querySelector(".content");
var foodQuestion = document.querySelector("#foodQuestion");


//render Food Questions
function startFoodQuestions() {
    content.classList.add("hide");
    foodQuestion.classList.remove("hide")
    
    
  }




foodButton.addEventListener("click", startFoodQuestions)