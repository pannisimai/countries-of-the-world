function checkCountry() {
  let countrycode = document.querySelector("#country").value;
  console.log(`Checking the code ${countrycode}`);

  fetch(`https://restcountries.eu/rest/v2/callingcode/${countrycode}`)
    .then(response => response.json())
    .then(countries => {
      printCountry(countries);
      // console.log(`The country is ${countries[0]["name"]}`);
      // console.log(`The country is ${countries[1]["name"]}`);
    });
}

function printCountry(data) {
  const country = document.querySelector(".print");
  const content = data
    .map(function(myCountry) {
      const { name, capital, flag, population, region } = myCountry;
      const img = `<img src=${flag}>`;
      const infos = `<h1>${name}</h1>
      <img src=${flag}>
      <p>Capital: ${capital}</p>
      <p>Population: ${population}</p>
      <p>Region: ${region}</p>`;
      return infos;
    })
    .join("");
  country.innerHTML = content;
}
