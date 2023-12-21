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
