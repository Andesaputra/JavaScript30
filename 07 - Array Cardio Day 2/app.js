// ## Array Cardio Day 2

const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
// .some will check if atleast one thing in your array needs what you are looking for
const isAdult = people.some(function (person) {
  // will take a function that will check it for every single one that we have
  const currentYear = new Date().getFullYear();
  if (currentYear - person.year >= 19) {
    return true;
  }
});

// for simpler code
const isAdult1 = people.some((person) => {
  const currentYear = new Date().getFullYear();
  return currentYear - person.year >= 19;
});

// for more hotshot code
const isAdult2 = people.some(
  (person) => new Date().getFullYear() - person.year >= 19
);

// Array.prototype.every() // is everyone 19 or older?

// for simpler code
const allAdults = people.every((person) => {
  const currentYear = new Date().getFullYear();
  return currentYear - person.year >= 19;
});

// for more hotshot code
const allAdults1 = people.every(
  (person) => new Date().getFullYear() - person.year >= 19
);
// this .every method will return false because not every person is above 19 years old

// Array.prototype.find()
// Find is like filter, but instead returns the subset of the array, it will return the first item that you find or just the one you are looking for
// exercise: find the comment with the ID of 823423
const comment = comments.find(function (comment) {
  if (comment.id == 823423) {
    return true;
  }
});

// arrow function
const comment1 = comments.find((comment) => comment.id == 823423);

console.log(comment1);
// Array.prototype.findIndex()
// to find where something is
// exercise: Find the comment with this ID
// delete the comment with the ID of 823423
const index = comments.findIndex((comment) => comment.id == 823423);
console.log(index);

comments.splice(index, 1); // this will delete the index that you want

// we can use a popular way in redux world, that we can create a new array of the updated comment
const newComments = [...comments.slice(0, index), ...comments.slice(index + 1)]; // the spread is important (see es6 to check the spread operator)
console.log(newComments);
