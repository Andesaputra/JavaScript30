// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
// filter() sort something out that is not pass certain condition
// first we need to get the people who were born in 1500's
const fifteen = inventors.filter((inventor) => {
  if (inventor.year >= 1500 && inventor.year < 1600) {
    return true; // we keep it
  } else {
    return false; // we dont keep it. notes: We can skip the else statement
  }
});
console.log(fifteen);
// the function gonna loop over every single item in array and give us a parameter that we called inventor
// so for each inventor that we get, we can decide if we can keep it or not
// this is a standard if else statement. we can make a one line code out of it
const fifteen1 = inventors.filter(
  (inventor) => inventor.year >= 1500 && inventor.year < 1600
); // one line function
console.table(fifteen1);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
// The Array.map() method allows you to iterate over an array and modify its elements using a callback function. The callback function will then be executed on each of the array's elements.
// map takes inner array and does something with that array and return a new array but of the same length
const fullNames = inventors.map(
  (inventor) => inventor.first + " " + inventor.last
); // ini standarnya
const fullNames1 = inventors.map(
  (inventor) => `${inventor.first} ${inventor.last}`
); // ini gunain backticks dan template string
console.log(fullNames);
console.log(fullNames1);
// jadi map() method itu gimana si simplenya?
// map() punya kemampuan untuk memanipulasi array dan menampilkannya

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
// The sort() method allows you to sort elements of an array in place. Besides returning the sorted array, the sort() method changes the positions of the elements in the original array.

// we have two items, we sort it out if item 1 is older or younger than item 2 then we place it according to the result
// so it gives value to the each item either +1 or -1
const ordered = inventors.sort(function (a, b) {
  if (a.year > b.year) {
    return 1;
  } else {
    return -1;
  }
});
console.table(ordered);
// write function using ternary operator
const ordered1 = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));
console.table(ordered1);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
// sort of build something on every single one
// it basicly work like this
var totalYears = 0;

for (let i = 0; i < inventors.length; i++) {
  totalYears = inventors[i].year;
}
console.log(totalYears);

// if we apply it to the array
const totalYears1 = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0); // we need to put 0 so the total can have a value
console.log(totalYears1);
// ini gak ngerti banget cuy

// 5. Sort the inventors by years lived
// we need to determine how old was the person, then we sort it out
const oldest = inventors.sort(function (a, b) {
  const lastGuy = a.passed - a.year;
  const nextGuy = b.passed - b.year;
  return lastGuy > nextGuy ? -1 : 1;
});
console.table(oldest);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const category = document.querySelector(".mw-category"); // get the dom element out of the page
// // if we do not know what to select, inspect element and find it  (in this case is the .mw-category)
// // then we find the links within it
// const links = Array.from(category.querySelectorAll("a")); // it change from nodelist to array
// console.log("links", links);
// const de = links
//   .map((link) => link.textContent) // iterate every element that contain 'de'
//   .filter((streetName) => streetName.includes("de")); // it filter the name that only include 'de'

// 7. sort Exercise
// Sort the people alphabetically by last name
const alpha = people.sort((lastOne, nextOne) => {
  const [aLast, aFirst] = lastOne.split(", "); // convert that into first and last name and remove the ', '
  const [bLast, bFirst] = nextOne.split(", "); // convert that into first and last name and remove the ', '
  return aLast > bLast ? 1 : -1;
});
console.log(alpha);
// ini parameternya gimana ya? gini gapapa? yg penting nandain kalo parameternya ada dua?
// yg setelah const itu variablenya jd array?

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];

const transportation = data.reduce(
  (obj, item) => {
    if (!obj[item]) {
      obj[item] = 0;
    } // to create a new object if object name isn't there
    obj[item]++; // to add count of the object
    return obj;
  },
  {
    // this is where the object or new object will be store(?)
  }
); // ini namanya function apa ya?
console.log(transportation);
// so we start with the blank object
// then we loop over one we first see there isn't a zero to work at all, so we need to make an entry for that and increment it
