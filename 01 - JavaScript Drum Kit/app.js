function removeTransition(e) {
  // function removetransition
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
} // skip if it's not transform

function playSound(e) {
  // e (event) adalah parameter
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // attribute selector
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`); // ini code buat animasi
  if (!audio) return; // to stop the function from running all together
  // kenapa butuh ini ya?
  // supaya value nilai audio dr key berbeda bisa berganti secara cepat dan tidak bertabrakan

  key.classList.add("playing"); // ini buat nambah class 'playing'
  audio.currentTime = 0; // supaya ketika dipencet lagi bisa mengeluarkan suara baru
  audio.play();
}

const keys = Array.from(document.querySelectorAll(".key")); // to select every single key, use queryselectorall
// buat variable dari array kelas .key
keys.forEach((key) => key.addEventListener("transitionend", removeTransition)); // to create a trantitionend using arrow function
// foreach untuk mengakses array keys, buat looping (nama konsep).

// when that end, then removetransition (remember to create the remove transition first)
// gak bisa langsung key.addeventlistener soalnya gabisa langsung denger di semua array element(node list)?
window.addEventListener("keydown", playSound);
// when the button is pressed, play sound
