//make each tile indiviual buttons

var div1 = document.querySelector("#div1");
var japanFoodTiles = document.querySelector("#japanFoodTiles");
var div2 = document.querySelector("#div2");
var mexicanFoodTile = document.querySelector("#mexicanFoodTiles");
var div3 = document.querySelector("#div3");
var italianFoodTile = document.querySelector("#italianFoodTiles");
var div4 = document.querySelector("#div4");
var indianFoodTile = document.querySelector("#indianFoodTiles");
var div5 = document.querySelector("#div5");
var greekFoodTile = document.querySelector("#greekFoodTiles");
var div6 = document.querySelector("#div6");
var chineseFoodTile = document.querySelector("#chineseFoodTiles")
var idkTile = document.querySelector("#idkTile");
var cultureTiles = document.querySelector("#cultureTiles");
var backButton = document.getElementById("Button");
var homeButton = document.getElementById("homeButton");

cultureTiles.classList.remove("hide");
backButton.classList.add("hide");
homeButton.classList.remove("hide");

function startJapChoices() {
  japanFoodTiles.classList.remove("hide");

  mexicanFoodTile.classList.add("hide");

  italianFoodTile.classList.add("hide");

  cultureTiles.classList.add("hide");

  indianFoodTile.classList.add("hide");

  greekFoodTile.classList.add("hide");

  chineseFoodTile.classList.add("hide")

  backButton.classList.remove("hide");

  homeButton.classList.add("hide");
}

function startMexicanChocies() {
  japanFoodTiles.classList.add("hide");

  mexicanFoodTile.classList.remove("hide");

  italianFoodTile.classList.add("hide");

  indianFoodTile.classList.add("hide");

  cultureTiles.classList.add("hide");

  greekFoodTile.classList.add("hide");

  chineseFoodTile.classList.add("hide")

  backButton.classList.remove("hide");

  homeButton.classList.add("hide");
}

function startItalianChoices() {
  japanFoodTiles.classList.add("hide");

  mexicanFoodTile.classList.add("hide");

  italianFoodTile.classList.remove("hide");

  cultureTiles.classList.add("hide");

  indianFoodTile.classList.add("hide");

  greekFoodTile.classList.add("hide");

  chineseFoodTile.classList.add("hide")

  homeButton.classList.add("hide");

  backButton.classList.remove("hide");
}

function startIndianChoices() {
  japanFoodTiles.classList.add("hide");

  mexicanFoodTile.classList.add("hide");

  italianFoodTile.classList.add("hide");

  cultureTiles.classList.add("hide");

  indianFoodTile.classList.remove("hide");

  greekFoodTile.classList.add("hide");

  chineseFoodTile.classList.add("hide")

  homeButton.classList.add("hide");

  backButton.classList.remove("hide");
}

function startGreekChoices() {
  japanFoodTiles.classList.add("hide");

  mexicanFoodTile.classList.add("hide");

  italianFoodTile.classList.add("hide");

  cultureTiles.classList.add("hide");

  indianFoodTile.classList.add("hide");

  greekFoodTile.classList.remove("hide");

  chineseFoodTile.classList.add("hide")

  homeButton.classList.add("hide");

  backButton.classList.remove("hide");
}

function startChineseChoices() {

  japanFoodTiles.classList.add("hide");

  mexicanFoodTile.classList.add("hide");

  italianFoodTile.classList.add("hide");

  cultureTiles.classList.add("hide");

  indianFoodTile.classList.add("hide");

  greekFoodTile.classList.add("hide");

  chineseFoodTile.classList.remove("hide")

  homeButton.classList.add("hide");

  backButton.classList.remove("hide");
}

function openHealthyHTML() {
  window.location.href = "./healthy.html";
}

function openHTML() {
  window.location.pathname = "Index.html";
}

function selectRandomDiv() {
  
  let rand = Math.floor(Math.random() * 6) + 1;

  let div = document.getElementById(`div${rand}`);

  div.click()

  console.log(div)
   
}

div1.addEventListener("click", startJapChoices);

div2.addEventListener("click", startMexicanChocies);

div3.addEventListener("click", startItalianChoices);

div4.addEventListener("click", startIndianChoices);

div5.addEventListener("click", startGreekChoices);

div6.addEventListener("click" , startChineseChoices);

idkTile.addEventListener("click" , selectRandomDiv)
