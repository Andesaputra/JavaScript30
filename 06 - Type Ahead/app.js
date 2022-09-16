// first we need to get the fetch data and get functionality in place
// then we hook it to the eventlistener
// then we put it to the html that we need

const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];

fetch(endpoint)
  .then((blob) => blob.json()) // method json()
  .then((data) => cities.push(...data)); // push raw data to var cities
// we spread into the push method so it will give a proper array of thousand cities

function findMatches(wordToMatch, cities) {
  return cities.filter((place) => {
    // here we need to figure out if the city or state matches what was searched
    const regex = new RegExp(wordToMatch, "gi"); // regex to have a match keyword
    return place.city.match(regex) || place.state.match(regex); // to return what it matched
  });
}

// function that put comma in number
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// then we need to create display function
function displayMatches() {
  // now we need to put the findMatches
  const matchArray = findMatches(this.value, cities);
  const html = matchArray
    .map((place) => {
      // create loop
      const regex = new RegExp(this.value, "gi"); // to highligth the matched words
      const cityName = place.city.replace(
        regex,
        `<span class='hl'>${this.value}</span>`
      );
      const stateName = place.state.replace(
        regex,
        `<span class='hl'>${this.value}</span> `
      );
      return `
    <li>
        <span class='name'>${cityName}, ${stateName}</span>
        <span class='population'>${numberWithCommas(place.population)}</span>
    </li>`; // ini apaaaaa
    })
    .join(""); // ini juga apaaa
  suggestions.innerHTML = html; // ini apaa
}

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("change", displayMatches); // it first listen the change event, then run displayMatches
searchInput.addEventListener("keyup", displayMatches); // different method, try it
