const slider = document.querySelector(".items");
let isDown = false;
let startX; // this will be assign as an initial position
let scrollLeft; // this will be assign as where the initial scroll was when we started to scroll

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return; // stop the function form running. this is important so the event will only trigger when the mouse is down first
  e.preventDefault(); // this will stop any weird stuff that will happen in the browser
  const x = e.pageX - slider.offsetLeft; // this calculate the position
  const walk = (x - startX) * 2; // this calculate how far we have defiated
  // for every 1px, we slide 2px
  slider.scrollLeft = scrollLeft - walk;
});
