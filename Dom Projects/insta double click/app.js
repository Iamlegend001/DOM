
const postImage = document.querySelector(".post img");
const heartIcon = document.querySelector(".fa-heart");

let isLiked = false;

// Double-click on image to like
postImage.addEventListener("dblclick", () => {
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

// Click on heart icon to toggle like/unlike
heartIcon.addEventListener("click", () => {
  isLiked = !isLiked;
  heartIcon.classList.toggle("fa-solid", isLiked);
  heartIcon.style.color = isLiked ? "red" : "black";
});