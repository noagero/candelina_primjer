const checkoutButton = document.getElementById("checkout_button");
const container = document.querySelector(".container");
const productsEl = document.getElementById('itemContainer');
const displayTotal = document.querySelector(".total");

function paypalCheckoutButton(){
    checkoutButton.innerHTML = `
        <form name="_xclick"  method="post" action= "https://www.paypal.com/cgi-bin/webscr">
        <input type="hidden" name="cmd" value="_xclick">
        <input type="hidden" name="business" value="info@candelina.hr">
        <input type="hidden" name="item_name" value="Checkout">
        <input type="hidden" name="notify_url" value="http://XXXXXXX.com/ipn.php" />
        <input type="hidden" id="buybuttonid" name="custom" value="XXXXX" />
        <input type="hidden" name="amount" value="${totalPrice}">
        <input type="submit" value="PAYPAL PLAĆANJE">
        </form>
        `;
    }
let cart = JSON.parse(localStorage.getItem("CART"));

function renderProducts(){
    temp=-1;
    console.log("cart: ", cart);
    cart.forEach((item) => {
        temp++;
        productsEl.innerHTML += `
        <div class="box">
            <div class="image">
                <img src="${cart[temp].item.image}" alt="${cart[temp].item.name}">
            </div>
            <div class="content">
                <h3>${cart[temp].item.name}&nbsp&nbsp</h3>
                <div class="price">CIJENA: ${cart[temp].item.price}€&nbsp&nbsp</div>
                <h3>KOLIČINA: ${cart[temp].numberOfUnits}&nbsp</h3>   
                </div>
        </div>`;
    })
    productsEl.innerHTML += `
        <div class="box">
            <div class="content">
                <h3>Dostava&nbsp&nbsp</h3>
                <div class="price">CIJENA: 5€&nbsp&nbsp</div>
                </div>
        </div>`;
}
renderProducts();
let totalPrice = 0;
    cart.forEach((item) => {
        totalPrice += cart[temp].item.price * cart[temp].numberOfUnits;
    });
totalPrice+=5;
displayTotal.innerHTML = `
    <h2>UKUPNO: ${totalPrice.toFixed(2)}€</h2>`;
paypalCheckoutButton();