var pickup_button = document.getElementById("pick");
var delivery_button = document.getElementById("deli");
var pick_expand = document.getElementById("pick-expand");
var deli_expand = document.getElementById("deli-expand");

pickup_button.addEventListener("click", function(){
    pick_expand.style.visibility = visible;
});

delivery_button.addEventListener("click", function(){
    deli_expand.style.visibility = visible;
});