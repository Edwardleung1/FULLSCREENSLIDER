let sliderImages = document.querySelectorAll(".slide");
let arrowLeft = document.getElementById("arrow-left");
let arrowRight = document.getElementById("arrow-right");
let current = 0;

// Clear all images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none"; // Hide everything
  }
}

// Init slider
function startSlide() {
  reset();
  sliderImages[0].style.display = "block"; // Show the first image
}

// Show prev
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block"; // Show previous image
  current--; // Update current value
}

// Show next
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}

// Left arrow click
arrowLeft.addEventListener("click", function () {
  if (current === 0) {
    current = sliderImages.length; // Setting the current to the max number of index
  }
  slideLeft();
});

// Right arrow click
arrowRight.addEventListener("click", function () {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();
