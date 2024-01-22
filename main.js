function makeVisible(itemId){
    item = document.getElementById(itemId);
    item.style.display = "inline";
}

function makeInvisible(itemId){
    item = document.getElementById(itemId);
    item.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function(){
    var pick_cardCheckbox = document.getElementById("pick-payment");
    var pick_cashCheckbox = document.getElementById("pick-payment2");
    var deli_cardCheckbox = document.getElementById("deli-payment");
    var deli_cashCheckbox = document.getElementById("deli-payment2");

    pick_cardCheckbox.addEventListener("change", function(){
        togglePaymentDivs();
    })
    pick_cashCheckbox.addEventListener("change", function(){
        togglePaymentDivs();
    })
    deli_cardCheckbox.addEventListener("change", function(){
        togglePaymentDivs();
    })
    deli_cashCheckbox.addEventListener("change", function(){
        togglePaymentDivs();
    })


    function togglePaymentDivs(){
        var pick_cardPaymentDiv = document.getElementById("pick-cardPayment-expand");
        var pick_cashPaymentDiv = document.getElementById("pick-cashPayment-expand");
        var deli_cardPaymentDiv = document.getElementById("deli-cardPayment-expand");
        var deli_cashPaymentDiv = document.getElementById("deli-cashPayment-expand");

        if(pick_cardCheckbox.checked && pick_cashCheckbox.checked){
            alert("You cannot pay with both! Please select only one payment option.");
            pick_cashPaymentDiv.style.display = "none";
            pick_cardPaymentDiv.style.display = "none";
        }
        else if(pick_cardCheckbox.checked){
            pick_cardPaymentDiv.style.display = "inline";
            pick_cashPaymentDiv.style.display = "none";
        }
        else if(pick_cashCheckbox.checked){
            pick_cashPaymentDiv.style.display = "inline";
            pick_cardPaymentDiv.style.display = "none";
        }
        else if(!(pick_cardCheckbox.checked && pick_cashPaymentDiv.checked)){
            pick_cashPaymentDiv.style.display = "none";
            pick_cardPaymentDiv.style.display = "none";
        }

        if(deli_cardCheckbox.checked && deli_cashCheckbox.checked){
            alert("You cannot pay with both! Please select only one payment option.");
            deli_cashPaymentDiv.style.display = "none";
            deli_cardPaymentDiv.style.display = "none";
        }
        else if(deli_cardCheckbox.checked){
            deli_cardPaymentDiv.style.display = "inline";
            deli_cashPaymentDiv.style.display = "none";
        }
        else if(deli_cashCheckbox.checked){
            deli_cashPaymentDiv.style.display = "inline";
            deli_cardPaymentDiv.style.display = "none";
        }
        else if(!(deli_cardCheckbox.checked && deli_cashPaymentDiv.checked)){
            deli_cashPaymentDiv.style.display = "none";
            deli_cardPaymentDiv.style.display = "none";
        }
    }
});
