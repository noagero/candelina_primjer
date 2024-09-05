function emailSend(){

	var userName = document.getElementById('ime').value;
	var phone = document.getElementById('num').value;
	var email = document.getElementById('mail').value;
    var grad = document.getElementById('grad').value;
    var adresa = document.getElementById('adresa').value;
    var PB = document.getElementById('PB').value;

	var messageBody = "Ime i prezime: " + userName +
	"<br/> Broj telefona: " + phone +
	"<br/> E-mail: " + email +
    "<br/> Adresa: " + adresa +
    "<br/> Poštanski broj: " + PB +
    "<br/> Grad: " + grad;

    let cart = JSON.parse(localStorage.getItem("CART"));
    let temp=-1;
    console.log("cart: ", cart);
    cart.forEach((item) => {
        temp++;
        messageBody +=`<br> ${cart[temp].item.name} ${cart[temp].numberOfUnits}`;
    });
    messageBody +=`<br> Cijena: ${totalPrice}€`;

	Email.send({
    Host : "smtp.elasticemail.com",
    Username : "info@candelina.hr",
    Password : "CD9520677C5E7CA89A188D9D7C66694DE33E",
    Port: 2525,
    To : 'info@candelina.hr',
    From : "info@candelina.hr",
    Subject : "Candelina - NARUŽBA",
    Body : messageBody
}).then(
    placanje()
);
    /*
    message => {
        if(message=='OK'){
            swal("Hvala!", "Narudžba uspješno poslana!", "success");
        }
        else{
            swal("Greška!", "Nije moguće poslati upit!", "error");
        }
    }
  
);
    //localStorage.clear();*/
}

const paymentOptions = document.querySelector(".payment-options");
let userForm = document.getElementById("userForm");
console.log(userForm);
function placanje(){
    userForm.innerHTML=``;
    paymentOptions.style.cssText = "display: flex;";
}

function bank_transfer(){
    alert("Upute za plaćanje dobit ćete ubrzo na e-mail!")
}