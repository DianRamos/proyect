const navBar= document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu ");
const menuIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shopingCartIcon = document.querySelector(".navbar-shopping-cart");
const myOrderList = document.querySelector(".product-deatail");
const cardsContainer = document.querySelector(".cards-container");


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

const productList = [];
productList.push({
    name: "Car",
    price:120,
    image: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=800",
},
{
    name: "Bike",
    price:120,
    image:"https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=800",

},
{
    name: "Bowl",
    price:120,
    image:"https://images.pexels.com/photos/951334/pexels-photo-951334.jpeg?auto=compress&cs=tinysrgb&w=800",

},
{
    name: "Guitar",
    price:120,
    image:"https://images.pexels.com/photos/3428498/pexels-photo-3428498.jpeg?auto=compress&cs=tinysrgb&w=800",

},
{
    name: "Chair",
    price:120,
    image:"https://images.pexels.com/photos/8989497/pexels-photo-8989497.jpeg?auto=compress&cs=tinysrgb&w=800",

},
{
    name: "Table",
    price:120,
    image:"https://images.pexels.com/photos/1209776/pexels-photo-1209776.jpeg?auto=compress&cs=tinysrgb&w=800",

},
{
    name: "Soccer ball",
    price:120,
    image:"https://images.pexels.com/photos/209861/pexels-photo-209861.jpeg?auto=compress&cs=tinysrgb&w=800",

},
);
function renderProducts(arr){
    for(product of arr){const productCard = document.createElement('div');
    
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src',product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
    
    const separatorDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText='$'+product.price;

    const productName = document.createElement('p');
    productName.innerText = product.name;

    separatorDiv.appendChild(productPrice);
    separatorDiv.appendChild(productName);

    const separatorFigure = document.createElement('figure');

    const imageIconCart = document.createElement('img');
    imageIconCart.setAttribute('src','./assets/Platzi_YardSale_Icons/bt_add_to_cart.svg');

    separatorFigure.appendChild(imageIconCart);

    productInfo.appendChild(separatorDiv);
    productInfo.appendChild(separatorFigure);
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
}
}
renderProducts(productList);