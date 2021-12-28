//fetch countries from api
const getCountries = async () => {
  const response = await fetch("https://restcountries.com/v2/all");
  if (!response.ok) {
    throw new Error("Cannot get the data!");
  }
  return response.json();
};

getCountries()
  .then((countries) => {
    const loadingScreen = document.querySelector(".main__loader");
    setTimeout(() => {
      // render cards to page
      for (let country of countries) {
        createCard(country);
      }
      loadingScreen.style.display = "none";
      searchCountry();
      selectRegion();
    }, 900);
  })
  .catch((err) => {
    console.log("error:", err.message);
  });

//create card
const createCard = (country) => {
  const cardContainer = document.querySelector(".main__cards");
  const cardTemplate = `
  <div class="main__cards--card">
  <a href = "./app/html/countryDetails.html?${country.alpha3Code}">
      <div class="card__flag" style="background-image:url(${
        country.flag
      })"></div>
      <div class="card__info">
      <h3 class="card__info--name">${country.name}</h3>
      <p class="card__info--text">
          <span class="card__info--bold"> Population: </span>
          ${country.population.toLocaleString("en-En")}
      </p>
      <p class="card__info--text">
          <span class="card__info--bold">Region: </span>
          <span class="region">${country.region}</span>
      </p>
      <p class="card__info--text">
          <span class="card__info--bold"> Capital: </span>
          ${country.capital}
      </p>
      </div>
      </a>
      </div>`;
  //append cards to parent
  cardContainer.insertAdjacentHTML("beforeend", cardTemplate);
};

//Filter function

const selectRegion = () => {
  const regionFilter = document.getElementById("regionFilter");
  const countryCard = document.querySelectorAll(".main__cards--card");

  regionFilter.addEventListener("change", () => {
    countryCard.forEach((card) => {
      const region = card.querySelector(".region").innerHTML;
      if (!region.includes(regionFilter.value) && region !== "filter by region")
        card.style.display = "none";
      else card.style.display = "flex";
    });
  });
};

//searchbar
const searchCountry = () => {
  const input = document.querySelector(".nav__searchbar--input");
  const countryCard = document.querySelectorAll(".main__cards--card");
  input.addEventListener("input", () => {
    for (let i = 0; i < countryCard.length; i++) {
      const card = countryCard[i];
      const cardName = card
        .querySelector(".card__info--name")
        .innerText.toLocaleLowerCase();
      if (cardName.includes(input.value.toLocaleLowerCase())) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    }
  });
};
