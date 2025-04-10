const carousel = document.getElementById("carousel");
let angle = 0;
const rotateStep = 36; // 360 / 10

// Rotate with arrow keys
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    angle -= rotateStep;
  } else if (e.key === "ArrowLeft") {
    angle += rotateStep;
  }
  carousel.style.transform = `rotateY(${angle}deg)`;
});

// Slight 3D tilt on mouse move
document.addEventListener("mousemove", (e) => {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const deltaX = (e.clientX - centerX) / centerX;
  const deltaY = (e.clientY - centerY) / centerY;

  carousel.style.transform += ` rotateX(${deltaY * 5}deg) rotateY(${deltaX * 5}deg)`;
});
