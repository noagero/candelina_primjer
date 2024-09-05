const proizvodi = [
    {
        "id":"1",
        "name": "HBDAY CANDLE",
        "price": "3.99",
        "image":"proizvodi-slike/1B.JPG",
        "visina/gramaža":"7CM"
    }, 
    {
        "id":"2",
        "name": "CUPCAKE CANDLE",
        "price": "3.99",
        "image":"proizvodi-slike/2C.JPG",
        "visina/gramaža":"6CM"
    },
    {
        "id":"3",
        "name": "PUDDING CANDLE",
        "price": "3.99",
        "image":"proizvodi-slike/3A.jpg",
        "visina/gramaža":"8CM"
    },
    {
        "id":"4",
        "name": "MINI BUBBLE",
        "price": "2.99",
        "image":"proizvodi-slike/4B.jpg",
        "visina/gramaža":"3CM"
    },
    {
        "id":"5",
        "name": "SVIJEČA S DRVENIM FITILJEM",
        "price": "7.99",
        "image":"proizvodi-slike/5A.jpg",
        "visina/gramaža":"150g"
    },
    {
        "id":"6",
        "name": "SVIJEĆA SA SKRIVENOM PORUKOM",
        "price": "4.99",
        "image":"proizvodi-slike/6F.jpg",
        "visina/gramaža":""
    },
    {
        "id":"7",
        "name": "ZLATNA SVIJEĆA",
        "price": "5.99",
        "image":"proizvodi-slike/7D.jpg",
        "visina/gramaža":"7CM"
    },
    {
        "id":"8",
        "name": "SUNCOKRET U POSUDI",
        "price": "4.99",
        "image":"proizvodi-slike/8A.jpg",
        "visina/gramaža":"5CM"
    },
    {
        "id":"9",
        "name": "PLETENA SVIJEĆA",
        "price": "7.99",
        "image":"proizvodi-slike/9D.jpg",
        "visina/gramaža":"12Cm"
    },
    {
        "id":"10",
        "name": "BUKET RUŽA",
        "price": "9.99",
        "image":"proizvodi-slike/10A.jpg",
        "visina/gramaža":"12CM"
    },
    {
        "id":"11",
        "name": "VELIKI MEDO",
        "price": "10.99",
        "image":"proizvodi-slike/11A.jpg",
        "visina/gramaža":"10CM"
    },
    {
        "id":"12",
        "name": "MINI METALNA",
        "price": "3.99",
        "image":"proizvodi-slike/12A.jpg",
        "visina/gramaža":"4CM"
    },
    {
        "id":"13",
        "name": "BUKET RUŽA, POJEDINAČNO",
        "price": "11.99",
        "image":"proizvodi-slike/13C.jpg",
        "visina/gramaža":"20CM"
    },
    {
        "id":"14",
        "name": "GEOMETRIJSKA SVIJEĆA",
        "price": "3.49",
        "image":"proizvodi-slike/14A.jpg",
        "visina/gramaža":"5CM"
    },
    {
        "id":"15",
        "name": "OKRUGLO CVIJEĆE",
        "price": "2.99",
        "image":"proizvodi-slike/15A.jpg",
        "visina/gramaža":"3CM"
    },
    {
        "id":"16",
        "name": "ŠAPICA",
        "price": "2.99",
        "image":"proizvodi-slike/16B.jpg",
        "visina/gramaža":"2CM"
    },
    {
        "id":"17",
        "name": "MINI BUKET CVIJEĆA",
        "price": "3.99",
        "image":"proizvodi-slike/17C.jpg",
        "visina/gramaža":"7CM"
    },
    {
        "id":"18",
        "name": "SRCOLIKE RUŽE",
        "price": "2.49",
        "image":"proizvodi-slike/18B.jpg",
        "visina/gramaža":"2CM"
    },
    {
        "id":"19",
        "name": "ŠKOLJKA",
        "price": "2.99",
        "image":"proizvodi-slike/19A.jpg",
        "visina/gramaža":"4CM"
    },
    {
        "id":"20",
        "name": "BUBBLE",
        "price": "4.49",
        "image":"proizvodi-slike/20A.jpg",
        "visina/gramaža":"5CM"
    },
    {
        "id":"21",
        "name": "CANDLE BOX",
        "price": "24.99",
        "image":"proizvodi-slike/21A.jpg",
        "visina/gramaža":"25CM"
    }
]

function renderProducts2(){

    proizvodi.forEach((proizvod) => {
        productsEl.innerHTML += `
        <div class="box">

            <div class="image">
                <img src="${proizvod.image}" alt="Suncokret">
                <div class="icons">
                    <a href="#" class="fas fa-heart"></a>
                    <a onclick="addToCart(${proizvod.id})" class="cart-btn" id="add2">Dodaj u košaricu</a>
                    <a href="#" class="fas fa-share"></a>
                </div>
            </div>
            <div class="content">
                <h3>${proizvod.name}</h3>
                <div class="price">${proizvod.price}€</div>
            </div>
        </div>`;
    })
}

renderProducts2();

