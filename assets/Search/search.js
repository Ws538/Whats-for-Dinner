const baseurl =
  "https://api.edamam.com/api/recipes/v2?app_id=86bfcee4&app_key=28ee446263661df1201ba54d78bd5e1d&type=public";
const animationObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      }
    });
  },
  {
    threshold: 0.5,
  }
);
const animateCards = (cards) => {
  cards.forEach((card) => {
    animationObserver.observe(card);
  });
};

const showError = async (message) => {
  const errorDiv = document.querySelector('.error');
  errorDiv.childNodes[1].innerText = message;
  errorDiv.style.transform = "translateY(0)";
  errorDiv.style.opacity = 1;
  await new Promise(r=>setTimeout(r, 2000));
  errorDiv.style.transform = "translateY(-200px)";
  errorDiv.style.opacity = 0;
};
const getRecipes = async (url) => {
  let recipes = [];
  let error = false;
  await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data.hits) {
        recipes = data;
      } else {
        error = true;
        recipes = [];
      }
    })
    .catch((err) => {
      error = true;
      recipes = [];
    });
  return { error, recipes };
};

let nextPage;
const showRecipes = (data) => {
  nextPage = data?._links?.next?.href;
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
        <div class="card hidden">
          <img src="${
            recipe.recipe.images.REGULAR.url
          }" class="card-img-top" alt="">
          <div class="card-body">
            <h5 class="card-title">${recipe.recipe.label}</h5>
            <div class="d-flex justify-content-between">
            <a href="${
              window.location.origin +
              `/assets/Recipe/recipe.html?recipe=${recipeId}`
            }" class="btn" style="background-color: #A83E3C; color: white;">Details</a>
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
};
let lastDiv;
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (nextPage) {
        fetch(nextPage)
          .then((res) => res.json())
          .then(async (data) => {
            showRecipes(data);
            lastDiv = document.querySelector(".card:last-child");
            observer.observe(lastDiv);
            observer.unobserve(entry.target);
            const allCards = document.querySelectorAll(".card");
            await new Promise((r) => setTimeout(r, 750));
            animateCards(allCards);
          })
      }
    }
  });
});

window.onload = async function () {
  const urlParams = new URLSearchParams(window.location.search);
  const searchParam = urlParams.get("q");
  const { recipes, error } = await getRecipes(baseurl + `&q=${searchParam}`);
  if (error) {
    await showError("Server error");
    return;
  }
  showRecipes(recipes);
  lastDiv = document.querySelector(".card:last-child");
  observer.observe(lastDiv);
  const allCards = document.querySelectorAll('.card');
  animateCards(allCards);
};
