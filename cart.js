var shoppingCart = [];
const menu = [
    ["Pretzel Bites", "Fried Pickles", "Cheese Curds", "Cheese Bread", "Mozzarella Sticks", "Mac Balls", "Nachos", "Chips N' Salsa", "Chips N' Queso"],
    ["Caesar Salad", "House Salad", "Grilled Chicken Salad"],
    ["Fish N' Chips", "Grilled Salmon", "Shrimp Scampi"],
    ["Classic American Cheeseburger", "Philly Cheese Steak", "Chicken Philly", "Create Your Own Sandwich"],
    ["Classic Pizza (Small)", "Classic Pizza (Medium)", "Classic Pizza (Large)", "Deep Dish Pizza (Small)", "Deep Dish Pizza (Medium)", "Deep Dish Pizza (Large)", "Thin-Crust Pizza (Small)", "Thin-Crust Pizza (Medium)", "Thin-Crust Pizza (Large)"],
    ["French Fries", "Fresh Fruit", "Fresh Vegetables", "Apple Sauce", "Mac N' Cheese", "Chips", "Baked Potato", "House Salad", "French Onion Soup"],
    ["Mac N' Cheese", "Chicken Strips", "Grilled Cheese", "Hot Dog", "Junior Burger"],
    ["Ice Cream", "Pie", "Double Chocolate Cake", "Brownie", "Brownie Surprise", "Cookie Cake", "Strawberry Shortcake"],
    ["Water", "Fountain Soda", "Apple Juice", "Milk", "Chocolate Milk", "Lemonade", "Blue-Raspberry Lemonade", "Milkshake", "Rootbeer Float"],
    ["Vegan Pizza", "Vegan Burger", "Gluten Free Pizza"],
    ["Belgium Waffle", "Short Stack", "Tall Stack", "Eggs Your Way", "Breakfast Blow-Out"],
    ["Sausage Links", "Sausage Patties", "Bacon", "Fresh Fruit", "Hashbrowns", "Grits"],
    ["Coffee", "Orange Juice", "Hot Tea"]
];
const prices = [
    [5.99, 5.99, 5.99, 11.99, 5.99, 5.99, 4.99, 4.88, 5.99],
    [5.99, 5.99, 5.99],
    [7.99, 14.99, 14.99],
    [8.99, 7.99, 7.99, 5.99],
    [9.99, 12.99, 15.99, 10.99, 13.99, 16.99, 8.99, 11.99, 14.99],
    [0, 0, 0, 0, 0, 0, 0, 1.99, 1.99],
    [5.99, 6.99, 5.99, 4.99, 6.99],
    [4.99, 4.99, 6.99, 4.99, 7.99, 7.99, 4.99, 6.99],
    [0, 3.99, 2.99, 2.99, 2.99, 2.99, 2.99, 4.99, 4.99],
    [11.99, 10.99, 12.99],
    [5.99, 4.99, 6.99, 4.99, 8.99],
    [0, 0, 0, 0, 1.99, 1.99],
    [4.99, 4.99, 4.99]
];

class foodItem {
    constructor(identifier, identifier2){
        /* 99 used as the default value, used as a check
        condition later in the constructor to makesure the 
        foodItem object is constructed properly. */
        var type = 99;
        var num = 99;

        if(identifier == 'A' || identifier == 'a'){
            type = 0;
        } 
        else if(identifier == 'B' || identifier == 'b'){
            type = 1;
        } 
        else if(identifier == 'C' || identifier == 'c'){
            type = 2;
        } 
        else if(identifier == 'D' || identifier == 'd'){
            type = 3;
        } 
        else if(identifier == 'E' || identifier == 'e'){
            type = 4;
        } 
        else if(identifier == 'F' || identifier == 'f'){
            type = 5;
        } 
        else if(identifier == 'G' || identifier == 'g'){
            type = 6;
        } 
        else if(identifier == 'H' || identifier == 'h'){
            type = 7;
        } 
        else if(identifier == 'I' || identifier == 'i'){
            type = 8;
        } 
        else if(identifier == 'J' || identifier == 'j'){
            type = 9;
        } 
        else if(identifier == 'K' || identifier == 'k'){
            type = 10;
        }
        else if(identifier == 'L' || identifier == 'l'){
            type = 11;
        }
        else if(identifier == 'M' || identifier == 'm'){
            type = 12;
        } 
        else{
            alert("Food item LETTER identifier not recognized");
        }

        // check if the food item letter identifier was input correctly
        if(type != 99){
            // Check if variable identifier2 is within the valid range
            const maxItems = menu[type].length;
            if (identifier2 >= 1 && identifier2 <= maxItems){
                num = identifier2 - 1; // Adjust user input to usable array index
            } 
            else{
                alert("Food item NUMBER identifier not recognized.");
                return;
            }
        }
        else{
            return;
        }   
        this.type = type;
        this.num = num;
    }
}

function makeItem(input, input2){
    const newItem = new foodItem(input, input2);
    if(newItem != undefined){
        var name = menu[newItem.type][newItem.num];
        alert(name + " added to your cart.");
        return newItem;
    }
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
        if(item != undefined){
            shoppingCart.push(item);
            displayItem(shoppingCart.length - 1);
        }
    });
});