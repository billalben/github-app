"use strict";

// Add eventListener on multiple elements
const addEventsOnElements = function ($elements, eventType, callback) {
  for (const $item of $elements) {
    $item.addEventListener(eventType, callback);
  }
};

// Header Scroll State
const $header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  let method = window.scrollY > 50 ? "add" : "remove";
  $header.classList[method]("active");
});

// Search Toggle
const $searchToggler = document.querySelector("[data-search-toggler]");
const $searchField = document.querySelector("[data-search-field]");

let isExpanded = false;

$searchToggler.addEventListener("click", function () {
  $header.classList.toggle("search-active");
  isExpanded = !isExpanded;
  this.setAttribute("aria-expanded", isExpanded);
  $searchField.focus();
});

// Tab Navigation
const $tabBtns = document.querySelectorAll("[data-tab-btn]");
const $tabPanels = document.querySelectorAll("[data-tab-panel]");

let [$lastActiveTabBtn, $lastActiveTabPanel] = [$tabBtns[0], $tabPanels[0]];

addEventsOnElements($tabBtns, "click", function () {
  $lastActiveTabBtn.setAttribute("aria-selected", false);
  $lastActiveTabPanel.setAttribute("hidden", "");

  this.setAttribute("aria-selected", true);
  const $currentTabPanel = document.querySelector(
    `#${this.getAttribute("aria-controls")}`
  );
  $currentTabPanel.removeAttribute("hidden");

  $lastActiveTabBtn = this;
  $lastActiveTabPanel = $currentTabPanel;
});

// Keyboard Accessibility For Tab Buttons
addEventsOnElements($tabBtns, "keydown", function (event) {
  const $nextElement = this.nextElementSibling;
  const $previousElement = this.previousElementSibling;

  if (event.key === "ArrowRight" && $nextElement) {
    this.setAttribute("tabindex", "-1");
    $nextElement.setAttribute("tabindex", "0");
    $nextElement.focus();
  } else if (event.key === "ArrowLeft" && $previousElement) {
    this.setAttribute("tabindex", "-1");
    $previousElement.setAttribute("tabindex", "0");
    $previousElement.focus();
  }
});
