var USD = 10700;
var EURO = 11900;
var RUB = 147;

var elButton = document.getElementById("form__button");
var elCurrencyInput = document.getElementById("inputGroupSelect04");


elButton.addEventListener("click", function(evt){
    evt.preventDefault();
    var elInput = document.getElementById("input").value;
    if (elCurrencyInput.value == 1) {
        alert(elInput / EURO + " so'm");
        console.log(Math.round(elInput / EURO))
    }
    if (elCurrencyInput.value == 2) {
        alert(elInput / USD + " so'm");
        console.log(Math.round(elInput / USD ))
    }
    if (elCurrencyInput.value == 3) {
        alert(elInput / RUB + " so'm");
        console.log(Math.round(elInput / RUB))
    }
})