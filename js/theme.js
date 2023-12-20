"use strict";

const $HTML = document.documentElement;
const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");

if (sessionStorage.getItem("theme")) {
  $HTML.dataset.theme = sessionStorage.getItem("theme");
}

darkModeQuery.addEventListener("change", (e) => {
  const isDark = e.matches;
  $HTML.dataset.theme = isDark ? "dark" : "light";
  sessionStorage.setItem("theme", $HTML.dataset.theme);
});

let isPressing = false;
const changeTheme = function () {
  isPressing = isPressing ? false : true;
  this.setAttribute("aria-pressed", isPressing);
  $HTML.setAttribute(
    "data-theme",
    ($HTML.dataset.theme === "light") ? "dark" : "light"
  );
  sessionStorage.setItem("theme", $HTML.dataset.theme);
};

window.addEventListener("load", function () {
  const $themeBtn = document.querySelector("[data-theme-btn]");
  $themeBtn.addEventListener("click", changeTheme);
});
