const navBar= document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu ");
const menuIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shopingCartIcon = document.querySelector(".navbar-shopping-cart")
const myOrderList = document.querySelector(".product-deatail")


navBar.addEventListener("click",toggleDesktopMenu);
menuIcon.addEventListener("click",toogleMobileMenu);
shopingCartIcon.addEventListener("click",toogleMyOrderList);



function toggleDesktopMenu() {

    const isMyOrderListClose = myOrderList.classList.contains('inactive');
    if (!isMyOrderListClose) {
        myOrderList.classList.add("inactive");
        
    }

    desktopMenu.classList.toggle("inactive");
}


function toogleMobileMenu() {
    const isMyOrderListClose = myOrderList.classList.contains('inactive');
if (!isMyOrderListClose) {
    myOrderList.classList.add("inactive");
    
}
    mobileMenu.classList.toggle("inactive");
    
}


function toogleMyOrderList() {

    const isMobileMenuClose = mobileMenu.classList.contains('inactive');
    if (!isMobileMenuClose) {
        //open my order list
        mobileMenu.classList.add("inactive");
   
    }
    myOrderList.classList.toggle("inactive");
}