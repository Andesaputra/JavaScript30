const canvas = document.querySelector("#draw"); // canvas element that we need to draw on

const ctx = canvas.getContext("2d"); // context wherein we draw it in context like 2D or 3D. in this case we need 2D context

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// we resize the height and width so it has the size of our window

ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";
// so when we draw on something, it need to be a color (ctx.strokeStyle), when it ended and join together it (ctx.lineJoin & .lineCap)should have a shape (like square, round, etc. see more option)
ctx.lineWidth = 100; // it will give the width of the brush
ctx.globalCompositeOperation = "overlay"; // blend mode for the stroke color, see how it work

let isDrawing = false; // flag...
let lastX = 0; // to put the coordinate X
let lastY = 0; // to put the coordinate Y
let hue = 100;
let direction = true;

function draw(e) {
  // CLICK AND DRAG FUNCTIONALITY
  // this function will be called everytime the mouse is moved
  if (!isDrawing) return; // if they are not drawing then return
  // this stop fn from running when they are not moused down
  console.log(e);

  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`; // this will give color to the starting stroke

  // drawing functionality
  ctx.beginPath();
  // start from
  ctx.moveTo(lastX, lastY); // coordinate where to start from
  // it go to
  ctx.lineTo(e.offsetX, e.offsetY); // these comes from the actual event that is happening
  ctx.stroke(); // up until this line, we already can draw something on the canvas, but it has big problem. the ink is always start at the sam place
  // so we need to modify the lastX and lastY to be the same as the offsetX and offsetY
  [lastX, lastY] = [e.offsetX, e.offsetY];

  hue++; // this will increase the hue count as we move the mouse
  if (hue >= 360) {
    hue = 0;
  } // this function will reset the hue count

  // for every loop we want to increment it
  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction;
  } // if it reach the maksimum count, then the direction will be fliped to another direction, which is see function below
  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  } // this function will increment the linewidth up until the maksimum count else then decrement it up until the minimum count
}

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offSetX, e.offsetY];
});

canvas.addEventListener("mousemove", draw); // event to apply the function draw
// as the mouse is moving, it will give detail information where and when the mouse is moving
// but we want it only when the mouse is clicked
// so we need new event to apply that true and false
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
