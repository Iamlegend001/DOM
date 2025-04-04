// Get all image elements
const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const img3 = document.querySelector("#img3");
const img4 = document.querySelector("#img4");

// Get the swap button
const swapBtn = document.querySelector("#swap-btn");

// Create an array of all images
const imageArray = [img1, img2, img3, img4];

// Add loading state to images
imageArray.forEach((img) => {
  img.addEventListener("load", function () {
    this.classList.add("loaded");
  });
});

// Add click event listener to the swap button
swapBtn.addEventListener("click", function () {
  // Add a visual feedback class to the button
  this.classList.add("clicked");

  // Get all current image sources
  const srcArray = imageArray.map((img) => img.getAttribute("src"));

  // Fisher-Yates shuffle algorithm
  for (let i = srcArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [srcArray[i], srcArray[j]] = [srcArray[j], srcArray[i]];
  }

  // Assign shuffled src values back to images
  imageArray.forEach((img, index) => {
    img.setAttribute("src", srcArray[index]);
  });

  // Remove the clicked class after animation completes
  setTimeout(() => {
    this.classList.remove("clicked");
  }, 300);
});
