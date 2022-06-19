"use script";

console.log("Hello World");

const hamburger = document.querySelector(".hamburger");
const sideBar = document.querySelector(".side-bar");
const closeMenu = document.querySelector(".closeMenu");
const body = document.querySelector(".main-view");

const openModal = function () {
  sideBar.classList.remove("hidden");
  body.style.opacity = 0;
};

const closeModal = function () {
  sideBar.classList.add("hidden");
  body.style.opacity = 100;
};

hamburger.addEventListener("click", openModal);

closeMenu.addEventListener("click", closeModal);
