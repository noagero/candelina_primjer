const products = [
    {
        "id":1,
        "name": "HBDAY CANDLE",
        "price": 3.99,
        "image":"proizvodi-slike/1B.JPG",
        "visina/gramaža":"7CM"
    }, 
    {
        "id":2,
        "name": "CUPCAKE CANDLE",
        "price": "3.99",
        "image":"proizvodi-slike/2C.JPG",
        "visina/gramaža":"6CM"
    },
    {
        "id":3,
        "name": "PUDDING CANDLE",
        "price": "3.99",
        "image":"proizvodi-slike/3A.jpg",
        "visina/gramaža":"8CM"
    },
    {
        "id":4,
        "name": "MINI BUBBLE",
        "price": "2.99",
        "image":"proizvodi-slike/4B.jpg",
        "visina/gramaža":"3CM"
    },
    {
        "id":5,
        "name": "SVIJEČA S DRVENIM FITILJEM",
        "price": "7.99",
        "image":"proizvodi-slike/5A.jpg",
        "visina/gramaža":"150g"
    },
    {
        "id":6,
        "name": "SVIJEĆA SA SKRIVENOM PORUKOM",
        "price": "4.99",
        "image":"proizvodi-slike/6F.jpg",
        "visina/gramaža":""
    },
    {
        "id":7,
        "name": "ZLATNA SVIJEĆA",
        "price": "5.99",
        "image":"proizvodi-slike/7D.jpg",
        "visina/gramaža":"7CM"
    },
    {
        "id":8,
        "name": "SUNCOKRET U POSUDI",
        "price": "4.99",
        "image":"proizvodi-slike/8A.jpg",
        "visina/gramaža":"5CM"
    },
    {
        "id":9,
        "name": "PLETENA SVIJEĆA",
        "price": "7.99",
        "image":"proizvodi-slike/9D.jpg",
        "visina/gramaža":"12Cm"
    },
    {
        "id":10,
        "name": "BUKET RUŽA",
        "price": "9.99",
        "image":"proizvodi-slike/10A.jpg",
        "visina/gramaža":"12CM"
    },
    {
        "id":11,
        "name": "VELIKI MEDO",
        "price": "10.99",
        "image":"proizvodi-slike/11A.jpg",
        "visina/gramaža":"10CM"
    },
    {
        "id":12,
        "name": "MINI METALNA",
        "price": "3.99",
        "image":"proizvodi-slike/12A.jpg",
        "visina/gramaža":"4CM"
    },
    {
        "id":13,
        "name": "BUKET RUŽA, POJEDINAČNO",
        "price": "11.99",
        "image":"proizvodi-slike/13C.jpg",
        "visina/gramaža":"20CM"
    },
    {
        "id":14,
        "name": "GEOMETRIJSKA SVIJEĆA",
        "price": "3.49",
        "image":"proizvodi-slike/14A.jpg",
        "visina/gramaža":"5CM"
    },
    {
        "id":15,
        "name": "OKRUGLO CVIJEĆE",
        "price": "2.99",
        "image":"proizvodi-slike/15A.jpg",
        "visina/gramaža":"3CM"
    },
    {
        "id":16,
        "name": "ŠAPICA",
        "price": "2.99",
        "image":"proizvodi-slike/16B.jpg",
        "visina/gramaža":"2CM"
    },
    {
        "id":17,
        "name": "MINI BUKET CVIJEĆA",
        "price": "3.99",
        "image":"proizvodi-slike/17C.jpg",
        "visina/gramaža":"7CM"
    },
    {
        "id":18,
        "name": "SRCOLIKE RUŽE",
        "price": "2.49",
        "image":"proizvodi-slike/18B.jpg",
        "visina/gramaža":"2CM"
    },
    {
        "id":19,
        "name": "ŠKOLJKA",
        "price": "2.99",
        "image":"proizvodi-slike/19A.jpg",
        "visina/gramaža":"4CM"
    },
    {
        "id":20,
        "name": "BUBBLE",
        "price": "4.49",
        "image":"proizvodi-slike/20A.jpg",
        "visina/gramaža":"5CM"
    },
    {
        "id":21,
        "name": "CANDLE BOX",
        "price": "24.99",
        "image":"proizvodi-slike/21A.jpg",
        "visina/gramaža":"25CM"
    },
    {
        "id":22,
        "name": "ŠARENA SVIJEĆA",
        "price": "5.99",
        "image":"proizvodi-slike/22A.jpg",
        "visina/gramaža":"5CM"
    },
    {
        "id":23,
        "name": "RUŽA U ČAŠI",
        "price": "7.99",
        "image":"proizvodi-slike/23C.jpg",
        "visina/gramaža":"8CM"
    },
    {
        "id":24,
        "name": "BOŽUR",
        "price": "3.49",
        "image":"proizvodi-slike/24A.jpg",
        "visina/gramaža":"3CM"
    },
    {
        "id":25,
        "name": "VISOKA REBRASTA SVIJEĆA BIJELA",
        "price": "3,49",
        "image":"proizvodi-slike/25B.jpg",
        "visina/gramaža":"16CM"
    },
    {
        "id":26,
        "name": "DJEVOJKA S POVEZOM",
        "price": "3.99",
        "image":"proizvodi-slike/26B.jpg",
        "visina/gramaža":"9CM"
    },
    {
        "id":27,
        "name": "ZAHVALNICA CUPCAKE",
        "price": "6.99",
        "image":"proizvodi-slike/27A.jpg",
        "visina/gramaža":"8CM"
    },
    {
        "id":28,
        "name": "BOR",
        "price": "2.99",
        "image":"proizvodi-slike/28A.jpg",
        "visina/gramaža":"8CM"
    },
    {
        "id":29,
        "name": "SOB",
        "price": "2.49",
        "image":"proizvodi-slike/29A.jpg",
        "visina/gramaža":"6CM"
    },
    {
        "id":30,
        "name": "POKLONČIĆ",
        "price": "2.99",
        "image":"proizvodi-slike/30B.jpg",
        "visina/gramaža":"3CM"
    },
    {
        "id":31,
        "name": "PAHULJICA",
        "price": "2.99",
        "image":"proizvodi-slike/31A.jpg",
        "visina/gramaža":"2CM"
    },
    {
        "id":32,
        "name": "MEDO U ČAŠI",
        "price": "4.99",
        "image":"proizvodi-slike/32A.jpg",
        "visina/gramaža":"8CM"
    },
    {
        "id":33,
        "name": "BLUEBERRY CANDLE",
        "price": "7.99",
        "image":"proizvodi-slike/33A.jpg",
        "visina/gramaža":"8CM"
    },
    {
        "id":34,
        "name": "ZAHVALNICA OBEĆANJE",
        "price": "2.59",
        "image":"proizvodi-slike/34A.jpg",
        "visina/gramaža":"1.5CM"
    },
    {
        "id":35,
        "name": "STATUA",
        "price": "3.99",
        "image":"proizvodi-slike/35B.jpg",
        "visina/gramaža":"10CM"
    },
    {
        "id":36,
        "name": "BOŽIĆNA KUGLA",
        "price": "7.99",
        "image":"proizvodi-slike/36B.jpg",
        "visina/gramaža":"8CM"
    },
    {
        "id":37,
        "name": "JASLE",
        "price": "3.99",
        "image":"proizvodi-slike/37A.jpg",
        "visina/gramaža":"9CM"
    },
    {
        "id":38,
        "name": "GNOM S VJENČIĆEM",
        "price": "2.99",
        "image":"proizvodi-slike/38A.jpg",
        "visina/gramaža":"8CM"
    },
    {
        "id":39,
        "name": "GNOM S BORIĆEM",
        "price": "2.99",
        "image":"proizvodi-slike/39A.jpg",
        "visina/gramaža":"8CM"
    },
    {
        "id":40,
        "name": "ORAŠAR",
        "price": "5.99",
        "image":"proizvodi-slike/40B.jpg",
        "visina/gramaža":"13CM"
    },
    {
        "id":41,
        "name": "VELIKA REBRASTA SVIJEĆA",
        "price": "7.49",
        "image":"proizvodi-slike/41A.jpg",
        "visina/gramaža":"16CM"
    },
    {
        "id":42,
        "name": "SPIRALNA SVIJEĆA",
        "price": "4.49",
        "image":"proizvodi-slike/42B.jpg",
        "visina/gramaža":"16CM"
    },
    {
        "id":43,
        "name": "PLETENA SVIJEĆA USKA",
        "price": "2.99",
        "image":"proizvodi-slike/43A.jpg",
        "visina/gramaža":"18CM"
    },
    {
        "id":44,
        "name": "VISOKA REBRASTA SVIJEĆA ROZA",
        "price": "3.49",
        "image":"proizvodi-slike/44A.jpg",
        "visina/gramaža":"16CM"
    },
    {
        "id":45,
        "name": "KONUS SRCE",
        "price": "2.49",
        "image":"proizvodi-slike/45C.jpg",
        "visina/gramaža":"8CM"
    },
]