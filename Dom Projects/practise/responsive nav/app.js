document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navContainer = document.querySelector(".nav-container");
  const menuItems = document.querySelectorAll(".menubar li");

  // Toggle mobile menu
  hamburger.addEventListener("click", () => {
    navContainer.classList.toggle("active");

    // Animate hamburger to X
    const spans = hamburger.querySelectorAll("span");
    spans.forEach((span, index) => {
      if (index === 0) {
        span.style.transform = navContainer.classList.contains("active")
          ? "rotate(45deg) translate(5px, 5px)"
          : "none";
      } else if (index === 1) {
        span.style.opacity = navContainer.classList.contains("active")
          ? "0"
          : "1";
      } else if (index === 2) {
        span.style.transform = navContainer.classList.contains("active")
          ? "rotate(-45deg) translate(7px, -6px)"
          : "none";
      }
    });
  });

  // Close menu when clicking on a menu item
  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      navContainer.classList.remove("active");

      // Reset hamburger animation
      const spans = hamburger.querySelectorAll("span");
      spans.forEach((span, index) => {
        if (index === 0) {
          span.style.transform = "none";
        } else if (index === 1) {
          span.style.opacity = "1";
        } else if (index === 2) {
          span.style.transform = "none";
        }
      });
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (
      !navContainer.contains(e.target) &&
      !hamburger.contains(e.target) &&
      navContainer.classList.contains("active")
    ) {
      navContainer.classList.remove("active");

      // Reset hamburger animation
      const spans = hamburger.querySelectorAll("span");
      spans.forEach((span, index) => {
        if (index === 0) {
          span.style.transform = "none";
        } else if (index === 1) {
          span.style.opacity = "1";
        } else if (index === 2) {
          span.style.transform = "none";
        }
      });
    }
  });
}); 