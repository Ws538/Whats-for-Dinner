//make each tile indiviual buttons

var japanCultureTiles = document.querySelector("#japanCultureTile");
var japanFoodTiles = document.querySelector("#japanFoodTiles");
var mexicanCultureTile = document.querySelector("#mexicanCultureTile");
var italianCultureTile = document.querySelector("#italianCultureTile");
var indianCultureTile = document.querySelector("#indianCultureTile");
var greekCultureTile = document.querySelector("#greekCultureTile");
var chineseCultureTile = document.querySelector("#chineseCultureTile");
var idkTile = document.querySelector("#idkTile");

function startJapChoices() {
  japanCultureTiles.classList.add("hide");
  japanFoodTiles.classList.remove("hide");
  mexicanCultureTile.classList.add("hide");
  italianCultureTile.classList.add("hide");
  indianCultureTile.classList.add("hide");
  greekCultureTile.classList.add("hide");
  chineseCultureTile.classList.add("hide");
  idkTile.classList.add("hide");
}

japanCultureTiles.addEventListener("click", startJapChoices);
