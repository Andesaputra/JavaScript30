const divs = document.querySelectorAll("div");

// Event bubbling is a method of event propagation in the HTML DOM API when an event is in an element inside another element, and both elements have registered a handle to that event.
// so if you clicked child element, the parent element will be selected to
// to avoid this bubbling, see function below
function logText(e) {
  e.stopPropagation(); // by using this function, it will stop the bubbling and only set to the correspondent target
  console.log(this);
}

divs.forEach((div) =>
  div.addEventListener("click", logText, {
    capture: false, // capture: true mean that we will run the function downard rather than upward. By default it set to false
    once: true, // this will make the event to only able to run once
  })
);
