// https://www.themealdb.com/api/json/v1/1/search.php

 // Auto complete meal search
const search = document.getElementById('search-recipe');
// Define variables to get each of the elements we need to change

// Set up variable to capture user responses 

// Set up array of questions & responses

search.addEventListener('input', (e)=>{
    getData(e.target.value);
})

async function getData(search) {
    await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    .then(res=>res.json())
    .then(data=>{
      const meals = data.meals;
      meals.forEach(meal => {
        console.log(meal);
      })
    });
  }


  // Add event listener to each button on the landing page to then trigger function to start looping through questions

  // Build function to loop through questions and populate page (including event listeners on each response button)

  // 