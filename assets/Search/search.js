const baseurl =
  "https://api.edamam.com/api/recipes/v2?app_id=86bfcee4&app_key=28ee446263661df1201ba54d78bd5e1d&type=public";

const getRecipes = async (url) => {
    let recipes = [];
    await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.hits) {
          recipes = data;
        }
      });
    return recipes;
};

let nextPage;
const showRecipes = (data) => {
    nextPage = data._links.next.href;
    $(".grid-items").append(`    
    ${data.hits
      .map((recipe) => {
        const baseLink = recipe._links.self.href;
        const baseId = baseLink.substring(
          baseLink.indexOf("v2"),
          baseLink.indexOf("?")
        );
        const recipeId = baseId.substring(baseId.indexOf("/") + 1);
        return `
        <div class="card" style="background-color: rgba(255, 255, 255, 0.8);">
          <img src="${
            recipe.recipe.images.REGULAR.url
          }" class="card-img-top" alt="">
          <div class="card-body">
            <h5 class="card-title">${recipe.recipe.label}</h5>
            <div class="d-flex justify-content-between">
            <a href="#" class="btn" style="background-color: #A83E3C; color: white;">Details</a>
            <button class="save" data-id="${recipeId}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-save" viewBox="0 0 16 16">
                <path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z"/>
              </svg></button>
        </div>
          </div>
        </div>
        `;
      })
      .join("")}
`);
}
let lastDiv;
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      fetch(nextPage)
        .then((res) => res.json())
        .then((data) => {
          showRecipes(data);
          lastDiv = document.querySelector(".card:last-child");
          observer.observe(lastDiv);
          observer.unobserve(entry.target);
        });
    }
  });
});

window.onload = async function () {
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get("q");
    const recipes = await getRecipes(baseurl + `&q=${searchParam}`);
    showRecipes(recipes);
    lastDiv = document.querySelector(".card:last-child");
    observer.observe(lastDiv);
  };