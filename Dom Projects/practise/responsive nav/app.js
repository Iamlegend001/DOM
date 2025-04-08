document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu functionality
  const hamburger = document.querySelector(".hamburger");
  const navContainer = document.querySelector(".nav-container");
  const menuItems = document.querySelectorAll(".menubar li a");

  // Toggle mobile menu
  hamburger.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent event from bubbling to document
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
      resetHamburgerAnimation();
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
      resetHamburgerAnimation();
    }
  });

  // Prevent clicks inside nav from closing it
  navContainer.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  // Function to reset hamburger animation
  function resetHamburgerAnimation() {
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

  // Dark/Light mode toggle
  const darkButton = document.getElementById("darkMode");
  const lightButton = document.getElementById("lightMode");

  // Check for saved theme preference
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }

  // Toggle dark mode
  darkButton.addEventListener("click", () => {
    document.body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
  });

  // Toggle light mode
  lightButton.addEventListener("click", () => {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
  });

  // Handle system theme preference changes
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

  function handleThemeChange(e) {
    if (e.matches) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }

  // Only apply system preference if user hasn't manually set a theme
  if (!localStorage.getItem("theme")) {
    prefersDarkScheme.addListener(handleThemeChange);
    handleThemeChange(prefersDarkScheme);
  }
});
