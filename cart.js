var shoppingCart = [];

function addItem(name, price){
    const item = {name, price};
    shoppingCart.push(item);
    alert("." + name + " added to your cart.");
}