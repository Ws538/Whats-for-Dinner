const baseurl =
  "https://api.edamam.com/api/recipes/v2?app_id=86bfcee4&app_key=28ee446263661df1201ba54d78bd5e1d&type=public";

const searchButton = document.getElementById("search-btn");
const searchBar = document.getElementById("search");

searchBar.addEventListener("focus", (e) => {
  searchButton.style.opacity = "1";
});
searchBar.addEventListener("focusout", (e) => {
  if (!e.target.value.length) {
    searchButton.style.opacity = "0";
  }
});

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
  const errorDiv = document.querySelector(".error");
  errorDiv.classList.add('error-show')
  await new Promise((r) => setTimeout(r, 2000));
  errorDiv.classList.remove('error-show');
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
        
            <a href="${
              window.location.origin +
              `/assets/Recipe/recipe.html?recipe=${recipeId}`
            }" class="btn" style="background-color: #A83E3C; color: white;">Details</a>
          
     
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
            if (lastDiv) {
              observer.observe(lastDiv);
            }
            observer.unobserve(entry.target);
            const allCards = document.querySelectorAll(".card");
            await new Promise((r) => setTimeout(r, 750));
            animateCards(allCards);
          });
      }
    }
  });
});

const getAndShowRecipes = async (searchParam) => {
  const { recipes, error } = await getRecipes(baseurl + `&q=${searchParam}`);
  if (error) {
    await showError("Server error");
    return;
  }
  showRecipes(recipes);
  lastDiv = document.querySelector(".card:last-child");
  if (lastDiv) {
    observer.observe(lastDiv);
  }
  const allCards = document.querySelectorAll(".card");
  animateCards(allCards);
};

window.onload = async function () {
  const urlParams = new URLSearchParams(window.location.search);
  const searchParam = urlParams.get("q");
  getAndShowRecipes(searchParam);
};
const saveSearchToLS = (search) => {
  const ls = JSON.parse(localStorage.getItem("recent"));
  if (ls) {
    localStorage.setItem("recent", JSON.stringify([...ls, search]));
  } else {
    localStorage.setItem("recent", JSON.stringify([search]));
  }
};
searchButton.addEventListener("click", async (e) => {
  const searchParam = searchBar.value;
  const url = new URL(window.location);
  url.searchParams.set("q", searchParam);
  window.history.pushState(null, "", url.toString());
  $('.grid-items').html('');
  saveSearchToLS(searchParam);
  getAndShowRecipes(searchParam);
});
