const postImage = document.querySelector(".post img");
const heartIcon = document.querySelector(".fa-heart");
const cursor = document.querySelector('.custom-cursor');

let isLiked = false;

// Double-click on image to like
postImage.addEventListener("dblclick", (e) => {
  isLiked = true;
  heartIcon.classList.replace("fa-regular", "fa-solid");
  heartIcon.style.color = "red";

  // Create heart effect
  const heart = document.createElement("i");
  heart.classList.add("fa", "fa-heart", "like-effect");
  postImage.parentElement.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 600);
});

// Move Custom Cursor
document.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

// Show Cursor on Enter
document.addEventListener('mouseenter', () => {
  cursor.style.opacity = "1";
});

// Hide Cursor on Leave
document.addEventListener('mouseleave', () => {
  cursor.style.opacity = "0";
});
