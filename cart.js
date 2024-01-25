var shoppingCart = [];
const menu = [
    ["Pretzel Bites", "Fried Pickles", "Cheese Curds", "Cheese Bread", "Mozzarella Sticks"],
    ["Caesar Salad", "House Salad", "Grilled Chicken Salad"],
    ["Fish N' Chips"],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
];
const prices = [
    [5.99, 5.99, 5.99, 11.99, 5.99],
    [5.99, 5.99, 5.99],
    [7.99],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
];

class foodItem {
    constructor(identifier, identifier2){
        var type = 99;
        var num = 99;
        if(identifier == 'A' || identifier == 'a'){
            type = 0;
            if(identifier2 == 1){
                num = 0;
            }
            else if(identifier2 == 2){
                num = 1;
            }
            else if(identifier2 == 3){
                num = 2;
            }
            else if(identifier2 == 4){
                num = 3;
            }
            else if(identifier2 == 5){
                num = 4;
            }
            else{
                num = 99;
            }
        }
        else if(identifier == 'B' || identifier == 'b'){
            type = 1;
            if(identifier2 == 1){
                num = 0;
            }
            else if(identifier2 == 2){
                num = 1;
            }
            else if(identifier2 == 3){
                num = 2;
            }
            else{
                num = 99;
            }
        }
        else if(identifier == 'C' || identifier == 'c'){
            type = 2;
            if(identifier2 == 1){
                num = 0;
            }
            else if(identifier2 == 2){
                num = 1;
            }
            else if(identifier2 == 3){
                num = 2;
            }
            else{
                num = 99;
            }
        }
        else if(identifier == 'D' || identifier == 'd'){
            type = 3;
            if(identifier2 == 1){
                num = 0;
            }
            else if(identifier2 == 2){
                num = 1;
            }
            else if(identifier2 == 3){
                num = 2;
            }
            else{
                num = 99;
            }
        }
        else if(identifier == 'E' || identifier == 'e'){
            type = 4;
            if(identifier2 == 1){
                num = 0;
            }
            else if(identifier2 == 2){
                num = 1;
            }
            else if(identifier2 == 3){
                num = 2;
            }
            else{
                num = 99;
            }
        }
        else if(identifier == 'F' || identifier == 'f'){
            type = 5;
            if(identifier2 == 1){
                num = 0;
            }
            else if(identifier2 == 2){
                num = 1;
            }
            else if(identifier2 == 3){
                num = 2;
            }
            else{
                num = 99;
            }
        }
        else if(identifier == 'G' || identifier == 'g'){
            type = 6;
            if(identifier2 == 1){
                num = 0;
            }
            else if(identifier2 == 2){
                num = 1;
            }
            else if(identifier2 == 3){
                num = 2;
            }
            else{
                num = 99;
            }
        }
        else if(identifier == 'H' || identifier == 'h'){
            type = 7;
            if(identifier2 == 1){
                num = 0;
            }
            else if(identifier2 == 2){
                num = 1;
            }
            else if(identifier2 == 3){
                num = 2;
            }
            else{
                num = 99;
            }
        }
        else if(identifier == 'I' || identifier == 'i'){
            type = 8;
            if(identifier2 == 1){
                num = 0;
            }
            else if(identifier2 == 2){
                num = 1;
            }
            else if(identifier2 == 3){
                num = 2;
            }
            else{
                num = 99;
            }
        }
        else if(identifier == 'J' || identifier == 'j'){
            type = 9;
            if(identifier2 == 1){
                num = 0;
            }
            else if(identifier2 == 2){
                num = 1;
            }
            else if(identifier2 == 3){
                num = 2;
            }
            else{
                num = 99;
            }
        }
        else if(identifier == 'K' || identifier == 'k'){
            type = 10;
            if(identifier2 == 1){
                num = 0;
            }
            else if(identifier2 == 2){
                num = 1;
            }
            else if(identifier2 == 3){
                num = 2;
            }
            else{
                num = 99;
            }
        }
        else{
            type = 99;
            alert("Food item identifier not recognized");
        }

        this.type = type;
        this.num = num;
    }
}

function makeItem(input, input2){
    const newItem = new foodItem(input, input2);
    var name = menu[newItem.type][newItem.num];
    alert(name + " added to your cart.");
    return newItem;
}

document.addEventListener("DOMContentLoaded", function(){
    function displayItem(index){
        const item = shoppingCart[index];
        const name = menu[item.type][item.num];
        const price = prices[item.type][item.num];
        
        var newElement = document.createElement("p");
        newElement.innerHTML = name + "...$" + price;
    
        var button = document.getElementById("addItem");
        document.getElementById("currentOrder").insertBefore(newElement, button);
    }

    document.getElementById("addItem").addEventListener("click", function(){
        var input = prompt('Please enter ONLY the LETTER portion of the food item identifier \n\nThis would be listed on the menu (e.g. A1, C3)');  
        var input2 = prompt('Please enter ONLY the NUMBER portion of the food item identifier \n\nThis would be listed on the menu (e.g. A1, C3)');
        var item = makeItem(input, input2);
        shoppingCart.push(item);
        displayItem(shoppingCart.length - 1);
    });
});