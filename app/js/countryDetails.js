//get alpha code from url
const urlParams = window.location.search.slice(1);

//fetch data from api by alpha3code endpoint
const getCountryData = async () => {
  const res = await fetch(`https://restcountries.com/v2/alpha/${urlParams}`);
  if (!res.ok) {
    throw new Error("Cannot get the data");
  }
  return res.json();
};

getCountryData()
  .then((country) => {
    const loadingScreen = document.querySelector(".main__loader");

    setTimeout(() => {
      createContent(country);
      borderBtns(country.borders);

      loadingScreen.style.display = "none";
    }, 900);
  })
  .catch((err) => {
    console.log("Error:", err);
  });

const createContent = (country) => {
  const favicon = document.querySelector("link[rel~='icon']");
  favicon.href = `${country.flag}`;
  document.title = `${country.name} - Details`;
  const mainContainer = document.querySelector(".main");
  const pageTemplate = `
    <img
            src="${country.flag}"
            alt="${country.name} flag"
            class="main__flag"
          />
          <h1 class="main__name">${country.name}</h1>
    
          <section class="main__info--first">
            <p class="main__info--first-p">
              <span class="semibold">Native Name:</span>
              ${country.nativeName}
            </p>
            <p class="main__info--first-p">
              <span class="semibold">Population:</span>
              ${country.population.toLocaleString("en-EN")}
            </p>
            <p class="main__info--first-p">
              <span class="semibold">Region:</span>
              ${country.region}
            </p>
            <p class="main__info--first-p">
              <span class="semibold">Sub region:</span>
              ${country.subregion}
            </p>
            <p class="main__info--first-p">
              <span class="semibold">Capital:</span>
              ${country.capital}
            </p>
          </section>
          <section class="main__info--second">
            <p class="main__info--second-p">
              <span class="semibold">Top Level Domain:</span>
              ${country.topLevelDomain}
            </p>
            <p class="main__info--second-p">
              <span class="semibold">Currencies:</span>
              ${createArray(country.currencies)}

            </p>
            <p class="main__info--second-p">
              <span class="semibold">Languages:</span>
              ${createArray(country.languages)}
            </p>
          </section>
    
          <section class="main__btns">
            <h3 class="main__btns--title">Border Countries:</h3>
          </section>
    `;
  mainContainer.insertAdjacentHTML("afterbegin", pageTemplate);
};

//looping through given array and pushing it items to the new one
const createArray = (array) => {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    const item = array[i];

    typeof item === "object" ? arr.push(item.name) : arr.push(item);
  }
  return arr.join(", ");
};

//create buttons for border countries
const borderBtns = (borderCountries) => {
  const buttonsContainer = document.querySelector(".main__btns");
  for (let i = 0; i < borderCountries.length; i++) {
    const btn = document.createElement("button");
    btn.classList.add("main__btns-btn");
    let elem = borderCountries[i];
    btn.innerText = elem;
    buttonsContainer.appendChild(btn);

    btn.addEventListener("click", () => {
      window.location.replace(`../html/countryDetails.html?${elem}`);
    });
  }
};

//navigation button
const backButton = document.querySelector(".nav__btn");
backButton.addEventListener("click", () => {
  window.location.replace("../../index.html");
});
