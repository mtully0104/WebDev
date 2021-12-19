// shop.js


var additem = document.getElementById('addtocart');
// add a listener for add to cart if such a button id is pressed
additem.addEventListener("click", addToCart);

function addToCart(value) {
    var total=localStorage.getItem('checkout');
    total++;
    localStorage.setItem('checkout',total);
    document.querySelector('#checkout').innerHTML=total;
}
