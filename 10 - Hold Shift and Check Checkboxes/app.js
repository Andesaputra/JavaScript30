const checkboxes = document.querySelectorAll(".inbox input[type='checkbox']"); // this will bring the nodelist

let lastChecked; // a variable to assign the last checked box

function handleCheck(e) {
  // console.log(e) // to see if clicked checkbox is functioning properly

  //check if they had the shift key down
  //and check taht they are checking it
  let inBetween = false; // we need this var to sort out checkboxes that is not in between the first and the last cheked boxes
  if (e.shiftKey && this.checked) {
    // if the shift key is down and they are checking the box
    // go ahead and do what we please
    // now we loop through every single chekbox
    // we look for the first one that checked and check everything that between the first and the last checked box
    checkboxes.forEach((checkbox) => {
      console.log(checkbox);
      if (checkbox == this || checkbox == lastChecked) {
        // doens't quite get the logic
        inBetween = !inBetween; // this will put the variable to be known where it started and when it is ended
        // we can confirm it by using this console below
        console.log("checked box");
      }

      if (inBetween) {
        checkbox.checked = true; // with this function we will get all the inbetween boxes to be checked automatically
      }
    });
  }

  lastChecked = this; // it change the var to be the checked box
}

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handleCheck)
); // to listen when one of them get clicked and run a function name handleCheck
