const navBar= document.querySelector(".navbar-email");
navBar.addEventListener("click",toggleDesktopMenu);
const desktopMenu = document.querySelector(".desktop-menu ")

function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive");
}