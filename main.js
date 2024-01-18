function makeVisible(itemId){
    item = document.getElementById(itemId);
    item.style.display = "inline";
}

function makeInvisible(itemId){
    item = document.getElementById(itemId);
    item.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function(){
    var cardCheckbox = document.getElementById("payment");
    var cashCheckbox = document.getElementById("payment2");

    cardCheckbox.addEventListener("change", function(){
        togglePaymentDivs();
    })

    cashCheckbox.addEventListener("change", function(){
        togglePaymentDivs();
    })

    function togglePaymentDivs(){
        var cardPaymentDiv = document.getElementById("cardPayment-expand");
        var cashPaymentDiv = document.getElementById("cashPayment-expand");

        if(cardCheckbox.checked && cashCheckbox.checked){
            alert("You cannot pay with both! Please select only one payment option.");
            cashPaymentDiv.style.display = "none";
            cardPaymentDiv.style.display = "none";
        }

        else if(cardCheckbox.checked){
            cardPaymentDiv.style.display = "inline";
            cashPaymentDiv.style.display = "none";
        }

        else if(cashCheckbox.checked){
            cashPaymentDiv.style.display = "inline";
            cardPaymentDiv.style.display = "none";
        }
        
        else if(!(cardCheckbox.checked && cashPaymentDiv.checked)){
            cashPaymentDiv.style.display = "none";
            cardPaymentDiv.style.display = "none";
        }
    }
});
