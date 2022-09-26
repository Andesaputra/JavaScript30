const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];

function strip(bandName) {
  return bandName.replace(/^(a |the |an )/i, "").trim();
}

const sortedBands = bands.sort((a, b) => (strip(a) > strip(b) ? 1 : -1));

document.querySelector("#bands").innerHTML = sortedBands
  .map((band) => `<li>${band}</li>`)
  .join(""); // join() is needed so it wont put comma between each word

// the logic behind this is that we need first to repace the articles with nothing. So we use regex to replace every articles that we dont want to use
// then we need to sort the band name with alphabetic. We use sort() method to do this, but remember, because we dont use the articles, we need to compare the paramater a and b using strip(). so we compare strip(a) and strip(b). Why we do that? Find it out!
// Lastly, we select all the array and display it to the HTML
