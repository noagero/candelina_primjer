let productPage = document.getElementById("renderProductDetails");


/*<div class="product_images">
        <img src="proizvodi-slike/1A.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/1B.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/1C.jpg" alt="candelina ručno rađene svijeće">
    </div>*/




function renderProductDetails1(id){
    productPage.innerHTML=`
    <div class="split left" id="renderProductDetails">
    <div class="product_images">
  <div>
    <img src="proizvodi-slike/1A.jpg" alt="candelina ručno rađene svijeće" />
  </div>
  <div>
    <img src="proizvodi-slike/1B.jpg" alt="candelina ručno rađene svijeće" />
  </div>
  <div>
    <img src="proizvodi-slike/1C.jpg" alt="candelina ručno rađene svijeće" />
  </div>
</div>
  </div>
  
  <div class="split right">
  <i class="far fa-window-close fa-5x" onclick="closeProductPage()"></i>
    <div class="product_info">
        <div class="product_name">
            <p>HBDAY CANDLE</p>
        </div>
        <div class="product_size">
            <p>Veličina: 7CM</p>
        </div>
        <div class="product_price">
            <p>3.99€</p>
        </div>
        <div class="product_add">
            <a onclick="addToCart(1)" class="cart-btn" id="add2">Dodaj&nbspu&nbspkošaricu</a>
        </div>
    </div>
    
  </div>
    `
}

function renderProductDetails2(id){
    productPage.innerHTML=`
    <div class="split left" id="renderProductDetails">
    <div class="product_images">
        <img src="proizvodi-slike/2A.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/2B.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/2C.jpg" alt="candelina ručno rađene svijeće">
    </div>
  </div>
  
  <div class="split right">
  <i class="far fa-window-close fa-5x" onclick="closeProductPage()"></i>
    <div class="product_info">
        <div class="product_name">
            <p>CUPCAKE CANDLE</p>
        </div>
        <div class="product_size">
            <p>Veličina: 6CM</p>
        </div>
        <div class="product_price">
            <p>3.99€</p>
        </div>
        <div class="product_add">
            <a onclick="addToCart(2)" class="cart-btn" id="add2">Dodaj u košaricu</a>
        </div>
    </div>
    
  </div>
    `
}

function renderProductDetails3(id){
    productPage.innerHTML=`
    <div class="split left" id="renderProductDetails">
    <div class="product_images">
        <img src="proizvodi-slike/3A.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/3B.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/3C.jpg" alt="candelina ručno rađene svijeće">
    </div>
  </div>
  
  <div class="split right">
  <i class="far fa-window-close fa-5x" onclick="closeProductPage()"></i>
    <div class="product_info">
        <div class="product_name">
            <p>PUDDING CANDLE</p>
        </div>
        <div class="product_size">
            <p>Veličina: 8CM</p>
        </div>
        <div class="product_price">
            <p>3.99€</p>
        </div>
        <div class="product_add">
            <a onclick="addToCart(3)" class="cart-btn" id="add2">Dodaj u košaricu</a>
        </div>
    </div>
    
  </div>
    `
}

function renderProductDetails4(id){
    productPage.innerHTML=`
    <div class="split left" id="renderProductDetails">
    <div class="product_images">
        <img src="proizvodi-slike/4A.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/4B.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/4C.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/4D.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/4E.jpg" alt="candelina ručno rađene svijeće">
    </div>
  </div>
  
  <div class="split right">
  <i class="far fa-window-close fa-5x" onclick="closeProductPage()"></i>
    <div class="product_info">
        <div class="product_name">
            <p>MINI BUBBLE</p>
        </div>
        <div class="product_size">
            <p>Veličina: 3CM</p>
        </div>
        <div class="product_price">
            <p>2.99€</p>
        </div>
        <div class="product_add">
            <a onclick="addToCart(4)" class="cart-btn" id="add2">Dodaj u košaricu</a>
        </div>
    </div>
  </div>
    `
}

function renderProductDetails5(id){
    productPage.innerHTML=`
    <div class="split left" id="renderProductDetails">
    <div class="product_images">
        <img src="proizvodi-slike/5A.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/5B.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/5C.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/5D.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/5E.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/5F.jpg" alt="candelina ručno rađene svijeće">
    </div>
  </div>
  
  <div class="split right">
  <i class="far fa-window-close fa-5x" onclick="closeProductPage()"></i>
    <div class="product_info">
        <div class="product_name">
            <p>SVIJEĆA S DRVENIM FITILJEM</p>
        </div>
        <div class="product_size">
            <p>Veličina: 150g</p>
        </div>
        <div class="product_price">
            <p>7.99€</p>
        </div>
        <div class="product_add">
            <a onclick="addToCart(5)" class="cart-btn" id="add2">Dodaj u košaricu</a>
        </div>
    </div>
  </div>
    `
}

function renderProductDetails6(id){
    productPage.innerHTML=`
    <div class="split left" id="renderProductDetails">
    <div class="product_images">
        <img src="proizvodi-slike/6A.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/6B.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/6C.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/6D.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/6E.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/6F.jpg" alt="candelina ručno rađene svijeće">
    </div>
  </div>
  
  <div class="split right">
  <i class="far fa-window-close fa-5x" onclick="closeProductPage()"></i>
    <div class="product_info">
        <div class="product_name">
            <p>SVIJEĆA SA SKRIVENOM PORUKOM</p>
        </div>
        <div class="product_size">
            <p>Veličina: 5CM</p>
        </div>
        <div class="product_price">
            <p>4.99€</p>
        </div>
        <div class="product_add">
            <a onclick="addToCart(6)" class="cart-btn" id="add2">Dodaj u košaricu</a>
        </div>
    </div>
  </div>
    `
}

function renderProductDetails7(id){
    productPage.innerHTML=`
    <div class="split left" id="renderProductDetails">
    <div class="product_images">
        <img src="proizvodi-slike/7A.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/7B.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/7C.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/7D.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/7E.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/7F.jpg" alt="candelina ručno rađene svijeće">
    </div>
  </div>
  
  <div class="split right">
  <i class="far fa-window-close fa-5x" onclick="closeProductPage()"></i>
    <div class="product_info">
        <div class="product_name">
            <p>ZLATNA SVIJEĆA</p>
        </div>
        <div class="product_size">
            <p>Veličina: 7CM</p>
        </div>
        <div class="product_price">
            <p>5.99€</p>
        </div>
        <div class="product_add">
            <a onclick="addToCart(7)" class="cart-btn" id="add2">Dodaj u košaricu</a>
        </div>
    </div>
  </div>
    `
}

function renderProductDetails8(id){
    productPage.innerHTML=`
    <div class="split left" id="renderProductDetails">
    <div class="product_images">
        <img src="proizvodi-slike/8A.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/8B.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/8C.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/8D.jpg" alt="candelina ručno rađene svijeće">
    </div>
  </div>
  
  <div class="split right">
  <i class="far fa-window-close fa-5x" onclick="closeProductPage()"></i>
    <div class="product_info">
        <div class="product_name">
            <p>SUNCOKRET U POSUDI</p>
        </div>
        <div class="product_size">
            <p>Veličina: 5CM</p>
        </div>
        <div class="product_price">
            <p>4.99€</p>
        </div>
        <div class="product_add">
            <a onclick="addToCart(8)" class="cart-btn" id="add2">Dodaj u košaricu</a>
        </div>
    </div>
  </div>
    `
}

function renderProductDetails9(id){
    productPage.innerHTML=`
    <div class="split left" id="renderProductDetails">
    <div class="product_images">
        <img src="proizvodi-slike/9A.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/9B.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/9C.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/9D.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/9E.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/9F.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/9G.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/9H.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/9I.jpg" alt="candelina ručno rađene svijeće">
    </div>
  </div>
  
  <div class="split right">
  <i class="far fa-window-close fa-5x" onclick="closeProductPage()"></i>
    <div class="product_info">
        <div class="product_name">
            <p>PLETENA SVIJEĆA ŠIROKA</p>
        </div>
        <div class="product_size">
            <p>Veličina: 12CM</p>
        </div>
        <div class="product_price">
            <p>7.99€</p>
        </div>
        <div class="product_add">
            <a onclick="addToCart(9)" class="cart-btn" id="add2">Dodaj u košaricu</a>
        </div>
    </div>
  </div>
    `
}

function renderProductDetails10(id){
    productPage.innerHTML=`
    <div class="split left" id="renderProductDetails">
    <div class="product_images">
        <img src="proizvodi-slike/10A.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/10B.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/10C.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/10D.jpg" alt="candelina ručno rađene svijeće">
    </div>
  </div>
  
  <div class="split right">
  <i class="far fa-window-close fa-5x" onclick="closeProductPage()"></i>
    <div class="product_info">
        <div class="product_name">
            <p>BUKET RUŽA</p>
        </div>
        <div class="product_size">
            <p>Veličina: 12CM</p>
        </div>
        <div class="product_price">
            <p>9.99€</p>
        </div>
        <div class="product_add">
            <a onclick="addToCart(10)" class="cart-btn" id="add2">Dodaj u košaricu</a>
        </div>
    </div>
  </div>
    `
}

function renderProductDetails11(id){
    productPage.innerHTML=`
    <div class="split left" id="renderProductDetails">
    <div class="product_images">
        <img src="proizvodi-slike/11A.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/11B.jpg" alt="candelina ručno rađene svijeće">
    </div>
  </div>
  
  <div class="split right">
  <i class="far fa-window-close fa-5x" onclick="closeProductPage()"></i>
    <div class="product_info">
        <div class="product_name">
            <p>VELIKI MEDO</p>
        </div>
        <div class="product_size">
            <p>Veličina: 10CM</p>
        </div>
        <div class="product_price">
            <p>10.99€</p>
        </div>
        <div class="product_add">
            <a onclick="addToCart(11)" class="cart-btn" id="add2">Dodaj u košaricu</a>
        </div>
    </div>
  </div>
    `
}

function renderProductDetails12(id){
    productPage.innerHTML=`
    <div class="split left" id="renderProductDetails">
    <div class="product_images">
        <img src="proizvodi-slike/12A.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/12B.jpg" alt="candelina ručno rađene svijeće">
    </div>
  </div>
  
  <div class="split right">
  <i class="far fa-window-close fa-5x" onclick="closeProductPage()"></i>
    <div class="product_info">
        <div class="product_name">
            <p>MINI METALNA</p>
        </div>
        <div class="product_size">
            <p>Veličina: 4CM</p>
        </div>
        <div class="product_price">
            <p>3.99€</p>
        </div>
        <div class="product_add">
            <a onclick="addToCart(12)" class="cart-btn" id="add2">Dodaj u košaricu</a>
        </div>
    </div>
  </div>
    `
}

function renderProductDetails13(id){
    productPage.innerHTML=`
    <div class="split left" id="renderProductDetails">
    <div class="product_images">
        <img src="proizvodi-slike/13A.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/13B.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/13C.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/13D.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/13E.jpg" alt="candelina ručno rađene svijeće">
    </div>
  </div>
  
  <div class="split right">
  <i class="far fa-window-close fa-5x" onclick="closeProductPage()"></i>
    <div class="product_info">
        <div class="product_name">
            <p>BUKET RUŽA, POJEDINAČNO</p>
        </div>
        <div class="product_size">
            <p>Veličina: 20CM</p>
        </div>
        <div class="product_price">
            <p>11.99€</p>
        </div>
        <div class="product_add">
            <a onclick="addToCart(13)" class="cart-btn" id="add2">Dodaj u košaricu</a>
        </div>
    </div>
  </div>
    `
}

function renderProductDetails14(id){
    productPage.innerHTML=`
    <div class="split left" id="renderProductDetails">
    <div class="product_images">
        <img src="proizvodi-slike/14A.jpg" alt="candelina ručno rađene svijeće">
    </div>
  </div>
  
  <div class="split right">
  <i class="far fa-window-close fa-5x" onclick="closeProductPage()"></i>
    <div class="product_info">
        <div class="product_name">
            <p>GEOMETRIJSKA SVIJEĆA</p>
        </div>
        <div class="product_size">
            <p>Veličina: 5CM</p>
        </div>
        <div class="product_price">
            <p>3.49€</p>
        </div>
        <div class="product_add">
            <a onclick="addToCart(14)" class="cart-btn" id="add2">Dodaj u košaricu</a>
        </div>
    </div>
  </div>
    `
}

function renderProductDetails15(id){
    productPage.innerHTML=`
    <div class="split left" id="renderProductDetails">
    <div class="product_images">
        <img src="proizvodi-slike/15A.jpg" alt="candelina ručno rađene svijeće">
    </div>
  </div>
  
  <div class="split right">
  <i class="far fa-window-close fa-5x" onclick="closeProductPage()"></i>
    <div class="product_info">
        <div class="product_name">
            <p>OKRUGLO CVIJEĆE</p>
        </div>
        <div class="product_size">
            <p>Veličina: 3CM</p>
        </div>
        <div class="product_price">
            <p>2.99€</p>
        </div>
        <div class="product_add">
            <a onclick="addToCart(15)" class="cart-btn" id="add2">Dodaj u košaricu</a>
        </div>
    </div>
  </div>
    `
}

function renderProductDetails16(id){
    productPage.innerHTML=`
    <div class="split left" id="renderProductDetails">
    <div class="product_images">
        <img src="proizvodi-slike/16A.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/16B.jpg" alt="candelina ručno rađene svijeće">
    </div>
  </div>
  
  <div class="split right">
  <i class="far fa-window-close fa-5x" onclick="closeProductPage()"></i>
    <div class="product_info">
        <div class="product_name">
            <p>ŠAPICA</p>
        </div>
        <div class="product_size">
            <p>Veličina: 2CM</p>
        </div>
        <div class="product_price">
            <p>2.99€</p>
        </div>
        <div class="product_add">
            <a onclick="addToCart(16)" class="cart-btn" id="add2">Dodaj u košaricu</a>
        </div>
    </div>
  </div>
    `
}

function renderProductDetails17(id){
    productPage.innerHTML=`
    <div class="split left" id="renderProductDetails">
    <div class="product_images">
        <img src="proizvodi-slike/17A.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/17B.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/17C.jpg" alt="candelina ručno rađene svijeće">
    </div>
  </div>
  
  <div class="split right">
  <i class="far fa-window-close fa-5x" onclick="closeProductPage()"></i>
    <div class="product_info">
        <div class="product_name">
            <p>MINI BUKET CVIJEĆA</p>
        </div>
        <div class="product_size">
            <p>Veličina: 7CM</p>
        </div>
        <div class="product_price">
            <p>3.99€</p>
        </div>
        <div class="product_add">
            <a onclick="addToCart(17)" class="cart-btn" id="add2">Dodaj u košaricu</a>
        </div>
    </div>
  </div>
    `
}

function renderProductDetails18(id){
    productPage.innerHTML=`
    <div class="split left" id="renderProductDetails">
    <div class="product_images">
        <img src="proizvodi-slike/18A.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/18B.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/18C.jpg" alt="candelina ručno rađene svijeće">
    </div>
  </div>
  
  <div class="split right">
  <i class="far fa-window-close fa-5x" onclick="closeProductPage()"></i>
    <div class="product_info">
        <div class="product_name">
            <p>SCROLIKE RUŽE</p>
        </div>
        <div class="product_size">
            <p>Veličina: 2CM</p>
        </div>
        <div class="product_price">
            <p>2.49€</p>
        </div>
        <div class="product_add">
            <a onclick="addToCart(18)" class="cart-btn" id="add2">Dodaj u košaricu</a>
        </div>
    </div>
  </div>
    `
}

function renderProductDetails19(id){
    productPage.innerHTML=`
    <div class="split left" id="renderProductDetails">
    <div class="product_images">
        <img src="proizvodi-slike/19A.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/19B.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/19C.jpg" alt="candelina ručno rađene svijeće">
    </div>
  </div>
  
  <div class="split right">
  <i class="far fa-window-close fa-5x" onclick="closeProductPage()"></i>
    <div class="product_info">
        <div class="product_name">
            <p>ŠKOLJKA</p>
        </div>
        <div class="product_size">
            <p>Veličina: 4CM</p>
        </div>
        <div class="product_price">
            <p>2.99€</p>
        </div>
        <div class="product_add">
            <a onclick="addToCart(19)" class="cart-btn" id="add2">Dodaj u košaricu</a>
        </div>
    </div>
  </div>
    `
}

function renderProductDetails20(id){
    productPage.innerHTML=`
    <div class="split left" id="renderProductDetails">
    <div class="product_images">
        <img src="proizvodi-slike/20A.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/20B.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/20C.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/20D.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/20E.jpg" alt="candelina ručno rađene svijeće">
    </div>
  </div>
  
  <div class="split right">
  <i class="far fa-window-close fa-5x" onclick="closeProductPage()"></i>
    <div class="product_info">
        <div class="product_name">
            <p>BUBBLE</p>
        </div>
        <div class="product_size">
            <p>Veličina: 5CM</p>
        </div>
        <div class="product_price">
            <p>4.49€</p>
        </div>
        <div class="product_add">
            <a onclick="addToCart(20)" class="cart-btn" id="add2">Dodaj u košaricu</a>
        </div>
    </div>
  </div>
    `
}

function renderProductDetails21(id){
    productPage.innerHTML=`
    <div class="split left" id="renderProductDetails">
    <div class="product_images">
        <img src="proizvodi-slike/21A.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/21B.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/21C.jpg" alt="candelina ručno rađene svijeće">
    </div>
  </div>
  
  <div class="split right">
  <i class="far fa-window-close fa-5x" onclick="closeProductPage()"></i>
    <div class="product_info">
        <div class="product_name">
            <p>CANDLE BOX</p>
        </div>
        <div class="product_size">
            <p>Veličina: 25CM</p>
        </div>
        <div class="product_price">
            <p>24.99€</p>
        </div>
        <div class="product_add">
            <a onclick="addToCart(21)" class="cart-btn" id="add2">Dodaj u košaricu</a>
        </div>
    </div>
  </div>
    `
}

function renderProductDetails22(id){
    productPage.innerHTML=`
    <div class="split left" id="renderProductDetails">
    <div class="product_images">
        <img src="proizvodi-slike/22A.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/22B.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/22C.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/22D.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/22E.jpg" alt="candelina ručno rađene svijeće">
    </div>
  </div>
  
  <div class="split right">
  <i class="far fa-window-close fa-5x" onclick="closeProductPage()"></i>
    <div class="product_info">
        <div class="product_name">
            <p>ŠARENA SVIJEĆA</p>
        </div>
        <div class="product_size">
            <p>Veličina: 5CM</p>
        </div>
        <div class="product_price">
            <p>5.99€</p>
        </div>
        <div class="product_add">
            <a onclick="addToCart(22)" class="cart-btn" id="add2">Dodaj u košaricu</a>
        </div>
    </div>
  </div>
    `
}

function renderProductDetails23(id){
    productPage.innerHTML=`
    <div class="split left" id="renderProductDetails">
    <div class="product_images">
        <img src="proizvodi-slike/23A.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/23B.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/23C.jpg" alt="candelina ručno rađene svijeće">
    </div>
  </div>
  
  <div class="split right">
  <i class="far fa-window-close fa-5x" onclick="closeProductPage()"></i>
    <div class="product_info">
        <div class="product_name">
            <p>RUŽA U ČAŠI</p>
        </div>
        <div class="product_size">
            <p>Veličina: 8CM</p>
        </div>
        <div class="product_price">
            <p>7.99€</p>
        </div>
        <div class="product_add">
            <a onclick="addToCart(23)" class="cart-btn" id="add2">Dodaj u košaricu</a>
        </div>
    </div>
  </div>
    `
}

function renderProductDetails24(id){
    productPage.innerHTML=`
    <div class="split left" id="renderProductDetails">
    <div class="product_images">
        <img src="proizvodi-slike/24A.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/24B.jpg" alt="candelina ručno rađene svijeće">
    </div>
  </div>
  
  <div class="split right">
  <i class="far fa-window-close fa-5x" onclick="closeProductPage()"></i>
    <div class="product_info">
        <div class="product_name">
            <p>BOŽUR</p>
        </div>
        <div class="product_size">
            <p>Veličina: 3CM</p>
        </div>
        <div class="product_price">
            <p>3.49€</p>
        </div>
        <div class="product_add">
            <a onclick="addToCart(24)" class="cart-btn" id="add2">Dodaj u košaricu</a>
        </div>
    </div>
  </div>
    `
}

function renderProductDetails25(id){
    productPage.innerHTML=`
    <div class="split left" id="renderProductDetails">
    <div class="product_images">
        <img src="proizvodi-slike/25A.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/25B.jpg" alt="candelina ručno rađene svijeće">
    </div>
  </div>
  
  <div class="split right">
  <i class="far fa-window-close fa-5x" onclick="closeProductPage()"></i>
    <div class="product_info">
        <div class="product_name">
            <p>VISOKA REBRASTA SVIJEĆA VISOKA</p>
        </div>
        <div class="product_size">
            <p>Veličina: 16CM</p>
        </div>
        <div class="product_price">
            <p>3.49€</p>
        </div>
        <div class="product_add">
            <a onclick="addToCart(25)" class="cart-btn" id="add2">Dodaj u košaricu</a>
        </div>
    </div>
  </div>
    `
}

function renderProductDetails26(id){
    productPage.innerHTML=`
    <div class="split left" id="renderProductDetails">
    <div class="product_images">
        <img src="proizvodi-slike/26A.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/26B.jpg" alt="candelina ručno rađene svijeće">
  </div>
  
  <div class="split right">
  <i class="far fa-window-close fa-5x" onclick="closeProductPage()"></i>
    <div class="product_info">
        <div class="product_name">
            <p>DJEVOJKA S POVEZOM</p>
        </div>
        <div class="product_size">
            <p>Veličina: 9CM</p>
        </div>
        <div class="product_price">
            <p>3.99€</p>
        </div>
        <div class="product_add">
            <a onclick="addToCart(26)" class="cart-btn" id="add2">Dodaj u košaricu</a>
        </div>
    </div>
  </div>
    `
}

function renderProductDetails27(id){
    productPage.innerHTML=`
    <div class="split left" id="renderProductDetails">
    <div class="product_images">
        <img src="proizvodi-slike/27A.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/27B.jpg" alt="candelina ručno rađene svijeće">
    </div>
  </div>
  
  <div class="split right">
  <i class="far fa-window-close fa-5x" onclick="closeProductPage()"></i>
    <div class="product_info">
        <div class="product_name">
            <p>ZAHVALNICA CUPCAKE</p>
        </div>
        <div class="product_size">
            <p>Veličina: 8CM</p>
        </div>
        <div class="product_price">
            <p>6.99€</p>
        </div>
        <div class="product_add">
            <a onclick="addToCart(27)" class="cart-btn" id="add2">Dodaj u košaricu</a>
        </div>
    </div>
  </div>
    `
}

function renderProductDetails28(id){
    productPage.innerHTML=`
    <div class="split left" id="renderProductDetails">
    <div class="product_images">
        <img src="proizvodi-slike/28A.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/28B.jpg" alt="candelina ručno rađene svijeće">
    </div>
  </div>
  
  <div class="split right">
  <i class="far fa-window-close fa-5x" onclick="closeProductPage()"></i>
    <div class="product_info">
        <div class="product_name">
            <p>BOR</p>
        </div>
        <div class="product_size">
            <p>Veličina: 8CM</p>
        </div>
        <div class="product_price">
            <p>2.99€</p>
        </div>
        <div class="product_add">
            <a onclick="addToCart(28)" class="cart-btn" id="add2">Dodaj u košaricu</a>
        </div>
    </div>
  </div>
    `
}

function renderProductDetails29(id){
    productPage.innerHTML=`
    <div class="split left" id="renderProductDetails">
    <div class="product_images">
        <img src="proizvodi-slike/29A.jpg" alt="candelina ručno rađene svijeće">
    </div>
  </div>
  
  <div class="split right">
  <i class="far fa-window-close fa-5x" onclick="closeProductPage()"></i>
    <div class="product_info">
        <div class="product_name">
            <p>SOB</p>
        </div>
        <div class="product_size">
            <p>Veličina: 6CM</p>
        </div>
        <div class="product_price">
            <p>2.49€</p>
        </div>
        <div class="product_add">
            <a onclick="addToCart(29)" class="cart-btn" id="add2">Dodaj u košaricu</a>
        </div>
    </div>
  </div>
    `
}

function renderProductDetails30(id){
    productPage.innerHTML=`
    <div class="split left" id="renderProductDetails">
    <div class="product_images">
        <img src="proizvodi-slike/30A.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/30B.jpg" alt="candelina ručno rađene svijeće">
    </div>
  </div>
  
  <div class="split right">
  <i class="far fa-window-close fa-5x" onclick="closeProductPage()"></i>
    <div class="product_info">
        <div class="product_name">
            <p>POKLONČIĆ</p>
        </div>
        <div class="product_size">
            <p>Veličina: 3CM</p>
        </div>
        <div class="product_price">
            <p>2.99€</p>
        </div>
        <div class="product_add">
            <a onclick="addToCart(30)" class="cart-btn" id="add2">Dodaj u košaricu</a>
        </div>
    </div>
  </div>
    `
}

function renderProductDetails31(id){
    productPage.innerHTML=`
    <div class="split left" id="renderProductDetails">
    <div class="product_images">
        <img src="proizvodi-slike/31A.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/31B.jpg" alt="candelina ručno rađene svijeće">
    </div>
  </div>
  
  <div class="split right">
  <i class="far fa-window-close fa-5x" onclick="closeProductPage()"></i>
    <div class="product_info">
        <div class="product_name">
            <p>PAHULJICA</p>
        </div>
        <div class="product_size">
            <p>Veličina: 2CM</p>
        </div>
        <div class="product_price">
            <p>2.99€</p>
        </div>
        <div class="product_add">
            <a onclick="addToCart(31)" class="cart-btn" id="add2">Dodaj u košaricu</a>
        </div>
    </div>
  </div>
    `
}

function renderProductDetails32(id){
    productPage.innerHTML=`
    <div class="split left" id="renderProductDetails">
    <div class="product_images">
        <img src="proizvodi-slike/32A.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/32B.jpg" alt="candelina ručno rađene svijeće">
    </div>
  </div>
  
  <div class="split right">
  <i class="far fa-window-close fa-5x" onclick="closeProductPage()"></i>
    <div class="product_info">
        <div class="product_name">
            <p>PAHULJICA</p>
        </div>
        <div class="product_size">
            <p>Veličina: 8CM</p>
        </div>
        <div class="product_price">
            <p>4.99€</p>
        </div>
        <div class="product_add">
            <a onclick="addToCart(32)" class="cart-btn" id="add2">Dodaj u košaricu</a>
        </div>
    </div>
  </div>
    `
}

function renderProductDetails33(id){
    productPage.innerHTML=`
    <div class="split left" id="renderProductDetails">
    <div class="product_images">
        <img src="proizvodi-slike/33A.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/33B.jpg" alt="candelina ručno rađene svijeće">
    </div>
  </div>
  
  <div class="split right">
  <i class="far fa-window-close fa-5x" onclick="closeProductPage()"></i>
    <div class="product_info">
        <div class="product_name">
            <p>BLUEBERRY CANDLE</p>
        </div>
        <div class="product_size">
            <p>Veličina: 8CM</p>
        </div>
        <div class="product_price">
            <p>7.99€</p>
        </div>
        <div class="product_add">
            <a onclick="addToCart(33)" class="cart-btn" id="add2">Dodaj u košaricu</a>
        </div>
    </div>
  </div>
    `
}

function renderProductDetails34(id){
    productPage.innerHTML=`
    <div class="split left" id="renderProductDetails">
    <div class="product_images">
        <img src="proizvodi-slike/34A.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/34B.jpg" alt="candelina ručno rađene svijeće">
    </div>
  </div>
  
  <div class="split right">
  <i class="far fa-window-close fa-5x" onclick="closeProductPage()"></i>
    <div class="product_info">
        <div class="product_name">
            <p>ZAHVALNICA OBEĆANJE</p>
        </div>
        <div class="product_size">
            <p>Veličina: 1.5CM</p>
        </div>
        <div class="product_price">
            <p>2.49€</p>
        </div>
        <div class="product_add">
            <a onclick="addToCart(34)" class="cart-btn" id="add2">Dodaj u košaricu</a>
        </div>
    </div>
  </div>
    `
}

function renderProductDetails35(id){
    productPage.innerHTML=`
    <div class="split left" id="renderProductDetails">
    <div class="product_images">
        <img src="proizvodi-slike/35A.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/35B.jpg" alt="candelina ručno rađene svijeće">
    </div>
  </div>
  
  <div class="split right">
  <i class="far fa-window-close fa-5x" onclick="closeProductPage()"></i>
    <div class="product_info">
        <div class="product_name">
            <p>STATUA</p>
        </div>
        <div class="product_size">
            <p>Veličina: 10CM</p>
        </div>
        <div class="product_price">
            <p>3.99€</p>
        </div>
        <div class="product_add">
            <a onclick="addToCart(35)" class="cart-btn" id="add2">Dodaj u košaricu</a>
        </div>
    </div>
  </div>
    `
}

function renderProductDetails36(id){
    productPage.innerHTML=`
    <div class="split left" id="renderProductDetails">
    <div class="product_images">
        <img src="proizvodi-slike/36A.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/36B.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/36C.jpg" alt="candelina ručno rađene svijeće">
    </div>
  </div>
  
  <div class="split right">
  <i class="far fa-window-close fa-5x" onclick="closeProductPage()"></i>
    <div class="product_info">
        <div class="product_name">
            <p>BOŽIČNA KUGLA</p>
        </div>
        <div class="product_size">
            <p>Veličina: 8CM</p>
        </div>
        <div class="product_price">
            <p>7.99€</p>
        </div>
        <div class="product_add">
            <a onclick="addToCart(36)" class="cart-btn" id="add2">Dodaj u košaricu</a>
        </div>
    </div>
  </div>
    `
}

function renderProductDetails37(id){
    productPage.innerHTML=`
    <div class="split left" id="renderProductDetails">
    <div class="product_images">
        <img src="proizvodi-slike/37A.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/37B.jpg" alt="candelina ručno rađene svijeće">
    </div>
  </div>
  
  <div class="split right">
  <i class="far fa-window-close fa-5x" onclick="closeProductPage()"></i>
    <div class="product_info">
        <div class="product_name">
            <p>JASLE</p>
        </div>
        <div class="product_size">
            <p>Veličina: 9CM</p>
        </div>
        <div class="product_price">
            <p>3.99€</p>
        </div>
        <div class="product_add">
            <a onclick="addToCart(37)" class="cart-btn" id="add2">Dodaj u košaricu</a>
        </div>
    </div>
  </div>
    `
}

function renderProductDetails38(id){
    productPage.innerHTML=`
    <div class="split left" id="renderProductDetails">
    <div class="product_images">
        <img src="proizvodi-slike/38A.jpg" alt="candelina ručno rađene svijeće">
    </div>
  </div>
  
  <div class="split right">
  <i class="far fa-window-close fa-5x" onclick="closeProductPage()"></i>
    <div class="product_info">
        <div class="product_name">
            <p>GNOM S VJENČIĆEM</p>
        </div>
        <div class="product_size">
            <p>Veličina: 8CM</p>
        </div>
        <div class="product_price">
            <p>2.99€</p>
        </div>
        <div class="product_add">
            <a onclick="addToCart(38)" class="cart-btn" id="add2">Dodaj u košaricu</a>
        </div>
    </div>
  </div>
    `
}

function renderProductDetails39(id){
    productPage.innerHTML=`
    <div class="split left" id="renderProductDetails">
    <div class="product_images">
        <img src="proizvodi-slike/39A.jpg" alt="candelina ručno rađene svijeće">
    </div>
  </div>
  
  <div class="split right">
  <i class="far fa-window-close fa-5x" onclick="closeProductPage()"></i>
    <div class="product_info">
        <div class="product_name">
            <p>GNOM S BORIĆEM</p>
        </div>
        <div class="product_size">
            <p>Veličina: 8CM</p>
        </div>
        <div class="product_price">
            <p>2.99€</p>
        </div>
        <div class="product_add">
            <a onclick="addToCart(39)" class="cart-btn" id="add2">Dodaj u košaricu</a>
        </div>
    </div>
  </div>
    `
}

function renderProductDetails40(id){
    productPage.innerHTML=`
    <div class="split left" id="renderProductDetails">
    <div class="product_images">
        <img src="proizvodi-slike/40A.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/40B.jpg" alt="candelina ručno rađene svijeće">
    </div>
  </div>
  
  <div class="split right">
  <i class="far fa-window-close fa-5x" onclick="closeProductPage()"></i>
    <div class="product_info">
        <div class="product_name">
            <p>ORAŠAR</p>
        </div>
        <div class="product_size">
            <p>Veličina: 13CM</p>
        </div>
        <div class="product_price">
            <p>5.99€</p>
        </div>
        <div class="product_add">
            <a onclick="addToCart(40)" class="cart-btn" id="add2">Dodaj u košaricu</a>
        </div>
    </div>
  </div>
    `
}

function renderProductDetails41(id){
    productPage.innerHTML=`
    <div class="split left" id="renderProductDetails">
    <div class="product_images">
        <img src="proizvodi-slike/41A.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/41B.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/41C.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/41D.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/41E.jpg" alt="candelina ručno rađene svijeće">
    </div>
  </div>
  
  <div class="split right">
  <i class="far fa-window-close fa-5x" onclick="closeProductPage()"></i>
    <div class="product_info">
        <div class="product_name">
            <p>VELIKA REBRASTA SVIJEĆA</p>
        </div>
        <div class="product_size">
            <p>Veličina: 16CM</p>
        </div>
        <div class="product_price">
            <p>7.49€</p>
        </div>
        <div class="product_add">
            <a onclick="addToCart(41)" class="cart-btn" id="add2">Dodaj u košaricu</a>
        </div>
    </div>
  </div>
    `
}

function renderProductDetails42(id){
    productPage.innerHTML=`
    <div class="split left" id="renderProductDetails">
    <div class="product_images">
        <img src="proizvodi-slike/42A.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/42B.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/42C.jpg" alt="candelina ručno rađene svijeće">
    </div>
  </div>
  
  <div class="split right">
  <i class="far fa-window-close fa-5x" onclick="closeProductPage()"></i>
    <div class="product_info">
        <div class="product_name">
            <p>SPIRALNA SVIJEĆA</p>
        </div>
        <div class="product_size">
            <p>Veličina: 16CM</p>
        </div>
        <div class="product_price">
            <p>4.49€</p>
        </div>
        <div class="product_add">
            <a onclick="addToCart(42)" class="cart-btn" id="add2">Dodaj u košaricu</a>
        </div>
    </div>
  </div>
    `
}

function renderProductDetails43(id){
    productPage.innerHTML=`
    <div class="split left" id="renderProductDetails">
    <div class="product_images">
        <img src="proizvodi-slike/43A.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/43B.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/43C.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/43D.jpg" alt="candelina ručno rađene svijeće">
    </div>
  </div>
  
  <div class="split right">
  <i class="far fa-window-close fa-5x" onclick="closeProductPage()"></i>
    <div class="product_info">
        <div class="product_name">
            <p>PLETENA SVIJEĆA USKA</p>
        </div>
        <div class="product_size">
            <p>Veličina: 18CM</p>
        </div>
        <div class="product_price">
            <p>3.99€</p>
        </div>
        <div class="product_add">
            <a onclick="addToCart(43)" class="cart-btn" id="add2">Dodaj u košaricu</a>
        </div>
    </div>
  </div>
    `
}

function renderProductDetails44(id){
    productPage.innerHTML=`
    <div class="split left" id="renderProductDetails">
    <div class="product_images">
        <img src="proizvodi-slike/44A.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/44B.jpg" alt="candelina ručno rađene svijeće">
    </div>
  </div>
  
  <div class="split right">
  <i class="far fa-window-close fa-5x" onclick="closeProductPage()"></i>
    <div class="product_info">
        <div class="product_name">
            <p>VISOKA REBRASTA SVIJEĆA ROZA</p>
        </div>
        <div class="product_size">
            <p>Veličina: 16CM</p>
        </div>
        <div class="product_price">
            <p>3.49€</p>
        </div>
        <div class="product_add">
            <a onclick="addToCart(44)" class="cart-btn" id="add2">Dodaj u košaricu</a>
        </div>
    </div>
  </div>
    `
}

function renderProductDetails45(id){
    productPage.innerHTML=`
    <div class="split left" id="renderProductDetails">
    <div class="product_images">
        <img src="proizvodi-slike/45A.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/45B.jpg" alt="candelina ručno rađene svijeće">
        <img src="proizvodi-slike/45C.jpg" alt="candelina ručno rađene svijeće">
    </div>
  </div>
  
  <div class="split right">
  <i class="far fa-window-close fa-5x" onclick="closeProductPage()"></i>
    <div class="product_info">
        <div class="product_name">
            <p>KONUS SRCE</p>
        </div>
        <div class="product_size">
            <p>Veličina: 8CM</p>
        </div>
        <div class="product_price">
            <p>2.49€</p>
        </div>
        <div class="product_add">
            <a onclick="addToCart(45)" class="cart-btn" id="add2">Dodaj u košaricu</a>
        </div>
    </div>
  </div>
    `
}

function closeProductPage(){
    productPage.innerHTML="";
}