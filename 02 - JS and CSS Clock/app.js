const secondHand = document.querySelector(".second-hand"); // to call the style in css, use for seconds
const minHand = document.querySelector(".min-hand"); // to call the style in css, use for minutes
const hourHand = document.querySelector(".hour-hand"); // to call the style in css, use for hours

function setDate() {
  const now = new Date(); // create now var with new keyword
  // new keyword in JavaScript is used to create an instance of an object that has a constructor function.
  const seconds = now.getSeconds(); // use now in a method to refers to the person object (method binding).
  // getSeconds() returns the seconds (0 to 59) of a date
  const secondsDegrees = (seconds / 60) * 360 + 90; // this create a calculation of the rotation. + 90 is needed to balance the offset in css.
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`; // apply the script to the transform style
  console.log(seconds); // this display if the console returning time in second as the clock is ticking

  const mins = now.getMinutes(); // getMinutes() returns the minutes (0 to 59) of a date.
  const minsDegrees = (mins / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hours = now.getHours(); // getHours() returns the hours (0 to 23) of a date.
  const hoursDegrees = (hours / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`; // need to be divided by 12 because the total amount of count is from 0 to 12
}

// the setDate need to run every second
// so it need
setInterval(setDate, 1000); // 1000 is in milisecond
