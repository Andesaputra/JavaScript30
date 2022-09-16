// first we need to select all the input so that it can make changes to the css variable
const inputs = document.querySelectorAll(".controls input"); // select class control and all the inputs
// document.querySelectorAll return nodelist
// different between nodelist and array, is that an array has all the method to deal with the array like map and all the good stuff. But a nodelist has limited methods.
// sometime people converting nodelist to an array. but in this case, we don't do that because nodelist has forEach method

// create a function
function handleUpdate() {
  //console.log(this.value); // this has to be done at the beginning, to confirm that the function working properly
  //console.log(this.dataset); // to check if the dataset is being shown.
  const suffix = this.dataset.sizing || ""; // create var from sizing dataset
  // '' is for the color tab so it will not appear as undefined
  // if it is working, then we need to update the actual variable (:root variable)
  // if it is working. then we need to select that basename
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  ); // this will make the changes that is happening as the value of the inputs is being changed.
  // + suffix is needed so to put the unit type.
}

// use the loops of input to the forEach() method
inputs.forEach((input) => input.addEventListener("change", handleUpdate)); // it show that the value has changed
inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate)); // it gonna trigger every single time it is changing
