// The debounce() function forces a function to wait a certain amount of time before running again.
// this is need to be done so the scrolling function doesnt run wild while you are scrolling
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// to select all images
const sliderImages = document.querySelectorAll(".slide-in");

function checkSlide(e) {
  sliderImages.forEach((sliderImage) => {
    // half way through image
    const slideInAt =
      window.scrollY + window.innerHeight - sliderImage.height / 2;

    // bottom of image
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    const isHalfShown = slideInAt > sliderImage.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    if (isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add("active");
    } else {
      sliderImage.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", debounce(checkSlide));
