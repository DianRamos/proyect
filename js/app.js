const navBar= document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu ");
const menuIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");


navBar.addEventListener("click",toggleDesktopMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive");
}

menuIcon.addEventListener("click",toogleMobileMenu);

function toogleMobileMenu() {
    mobileMenu.classList.toggle("inactive")
    
}