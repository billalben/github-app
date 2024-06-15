"use strict";

// Cache document element
const $HTML = document.documentElement;

// Check for system dark mode preference
const prefersDarkScheme = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;

// Set initial theme based on session storage or system preference
if (sessionStorage.getItem("theme")) {
  $HTML.dataset.theme = sessionStorage.getItem("theme");
} else {
  $HTML.dataset.theme = prefersDarkScheme ? "dark" : "light";
}

// Function to toggle theme
const changeTheme = function () {
  // Toggle aria-pressed attribute
  const isPressed = this.getAttribute("aria-pressed") === "true";
  this.setAttribute("aria-pressed", !isPressed);

  // Toggle theme and update session storage
  const newTheme = $HTML.dataset.theme === "light" ? "dark" : "light";
  $HTML.dataset.theme = newTheme;
  sessionStorage.setItem("theme", newTheme);
};

// Add event listener for theme toggle button on page load
window.addEventListener("load", function () {
  const $themeBtn = document.querySelector("[data-theme-btn]");
  if ($themeBtn) {
    $themeBtn.addEventListener("click", changeTheme);
  }
});
