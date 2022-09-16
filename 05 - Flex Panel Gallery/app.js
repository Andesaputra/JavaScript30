// we need to select all the panels so it will give us a nodelist
const panels = document.querySelectorAll(".panel");

// function for open
function toggleOpen() {
  this.classList.toggle("open");
}

//function when the class is active
function toggleActive(e) {
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
  // when propertyname include the word flex
  // then it will activate the open-active class
}

// method for every child elements that is panel
// forEach() method calls a function for each element in an array
// it require to have function() and currentValue
panels.forEach((panel) => panel.addEventListener("click", toggleOpen));

// this method will apply a function when the transition end
panels.forEach((panel) =>
  panel.addEventListener("transitionend", toggleActive)
);
