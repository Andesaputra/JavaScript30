const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
const walk = 100; // 100px

function shadow(e) {
  // this is a es6 that translated from
  //const width = hero.offsetWidth;
  //const height = hero.offsetHeight;

  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;

  // when the mouse hover the child element, it will give the coordinate of the child element instead of the coordinate of the window
  // so we need to normalize those with the function below
  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = Math.round((x / width) * walk - walk / 2);
  const yWalk = Math.round((y / height) * walk - walk / 2);
  console.log(xWalk, yWalk);

  text.style.textShadow = `${xWalk}px ${yWalk}px 0 red`;
}

hero.addEventListener("mousemove", shadow);
