"use strict"

let menu = document.querySelector(".menu-toggle");
let nav = document.querySelector("header nav");

menu.addEventListener("click", () => {
    nav.classList.toggle('open');
});