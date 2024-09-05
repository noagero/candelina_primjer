const productsEl = document.getElementById('itemContainer');
const cartItemsEl = document.getElementById('add_cart_item');
const subtotalEl = document.querySelector(".kosarica_subtotal");
const brProizUKosar = document.querySelector(".totalQuantity");


function renderProducts(){
    products.forEach((product) => {
        productsEl.innerHTML += `
        <div class="box">

            <div class="image" onclick="renderProductDetails${product.id}(${product.id})">
                <img src="${product.image}" alt="Suncokret">
                <div class="icons">
                    <a href="#" class="fas fa-heart"></a>
                    <a onclick="addToCart(${product.id})" class="cart-btn" id="add2">Dodaj u košaricu</a>
                    <a href="#" class="fas fa-share"></a>
                </div>
            </div>
            <div class="content">
                <h3>${product.name}</h3>
                <div class="price">${product.price}€</div>
            </div>
        </div>`;
    })
}

function renderProducts2(){
    for (let i=0;i<4;i++) {
        productsEl.innerHTML += `
        <div class="box">

            <div class="image">
                <img src="${products[i].image}" alt="Suncokret">
                <div class="icons">
                    <a href="#" class="fas fa-heart"></a>
                    <a onclick="addToCart(${products[i].id})" class="cart-btn" id="add2">Dodaj u košaricu</a>
                    <a href="#" class="fas fa-share"></a>
                </div>
            </div>
            <div class="content">
                <h3>${products[i].name}</h3>
                <div class="price">${products[i].price}€</div>
            </div>
        </div>`;
                        }
}


if(location.pathname==="/C:/Users/noage/Desktop/candelina-main/proizvodi.html"){
    renderProducts();
}

if(location.pathname==="/C:/Users/noage/Desktop/candelina-main/index.html"){
    renderProducts2();
}

let cart = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();


function addToCart(id){
    let num=0;
    function addNewItem(){
        const item = products.find((product) => product.id === id);
            cart.push({
                item,
                numberOfUnits:1});
    }
    let cartLength=cart.length;
    if (cart.length === 0){
        addNewItem();
    }else{
        while(num<cartLength){
            num=cartLength;
            console.log("num: ",num," cart.length: ",cart.length);
            if(cart[temp].item.id===id){
               // cart[temp].numberOfUnits++;
                alert("Proizvod je već u košarici!");
    }else{
        addNewItem();
        }
    } }
    updateCart();
}

function updateCart(){
    localStorage.setItem("CART", JSON.stringify(cart));
    renderCartItems();
    renderSubtotal();
}

function renderCartItems(){
    cartItemsEl.innerHTML = "";
    temp=-1;
    cart.forEach((item) => {
        temp++;
        cartItemsEl.innerHTML += `<div class="item" id="proizvod_kosarica">
        <img src="${cart[temp].item.image}" alt="${cart[temp].item.name}">
        <div class="content">
            <div class="name" id="name">
                ${cart[temp].item.name} 
            </div>
            <div class="price">
                ${cart[temp].item.price}€/1 komad
            </div>
        </div>
        <div class="quantity">
            <button id="btn-remove" onclick="removeItemFromCart(${temp})"><span>Ukloni</span></button>
            <button id="btn-smanji" onclick="changeNumberOfUnits('minus', ${temp})"><span>-</span></button>
            <span class="value" id="broj2">${cart[temp].numberOfUnits}</span>
            <button id="btn-povecaj" onclick="changeNumberOfUnits('plus', ${temp})"><span>+</span></button>
        </div>
    </div>`
    });
}

function renderSubtotal(){
    let totalPrice = 0, totalItems = 0;

    cart.forEach((item) => {
        totalPrice += cart[temp].item.price * cart[temp].numberOfUnits;
        totalItems += cart[temp].numberOfUnits;
    });

    subtotalEl.innerHTML = `<p>Ukupna cijena (${totalItems} proizvoda): ${totalPrice.toFixed(2)}€</p>`;
    brProizUKosar.innerHTML = `<span>${totalItems}</span>`;

    localStorage.setItem("TOTAL", totalPrice);
}

const itemUKosarici = document.getElementById("proizvod_kosarica");

function removeItemFromCart(temp){
    cart.splice(temp,1);
    updateCart();
}

function changeNumberOfUnits(action, temp){
    if(action === 'minus' && cart[temp].numberOfUnits>1){
        cart[temp].numberOfUnits--;
    }else if(action === 'minus' && cart[temp].numberOfUnits===1){
        cart.splice(temp,1);
    }else if (action === 'plus'){
        cart[temp].numberOfUnits++;
    }
    updateCart();
}