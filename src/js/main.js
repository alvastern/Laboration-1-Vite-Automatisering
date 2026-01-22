"use strict"


// Skapar möjlighet för hamburgermenyn
let menu = document.querySelector(".menu-toggle");
let nav = document.querySelector("header nav");

menu.addEventListener("click", () => {
    nav.classList.toggle('open');
});


// Visar vilken sida användaren befinner sig på
let navLinks = document.querySelectorAll("header nav a");
let currentPlace = window.location.href;

navLinks.forEach(link => {
    if(link.href === currentPlace) {
        link.classList.add("active");
    }
});