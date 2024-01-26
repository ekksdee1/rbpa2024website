monthNum = 0;
var next = document.getElementById("next");
var past = document.getElementById("past");
var january = document.getElementById("january");
var february = document.getElementById("february");
var march = document.getElementById("march");
var april = document.getElementById("april");
var may = document.getElementById("may");
var june = document.getElementById("june");
var july = document.getElementById("july");
var august = document.getElementById("august");
var september = document.getElementById("september");
var october = document.getElementById("october");
var november = document.getElementById("november");
var december = document.getElementById("december");

function nextMonth() {
    monthNum++;
    //Make sure the previous button is displayed
    past.style.display = "";
    // Reset monthNum to 0 when it reaches 12
    if (monthNum === 11) {
        //monthNum = 0;
        next.style.display = "none";
    }

        //Month cannot be greater than 11
        if(monthNum > 11) {
            monthNum = 11;
        }

    updateMonthDisplay();
}

function pastMonth() {
    monthNum--;
    //Make sure the next button is displayed
    next.style.display = "";

    // Reset monthNum to 11 when it goes below 0
    if (monthNum === 0) {
        //monthNum = 11;
        past.style.display = "none";
    }

    //Month cannot be negative
    if(monthNum < 0) {
        monthNum = 0;
    }

    updateMonthDisplay();
}

function updateMonthDisplay() {
    const months = [january, february, march, april, may, june, july, august, september, october, november, december];

    for (let i = 0; i < months.length; i++) {
        if (i === monthNum) {
            months[i].style.display = "contents";
        } else {
            months[i].style.display = "none";
        }
    }
}

next.addEventListener("click", nextMonth);
past.addEventListener("click", pastMonth);