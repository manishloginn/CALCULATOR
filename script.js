



const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearButton() {
    display.value = ""
}

function calculateButton() {
    const result = eval(display.value); 
    display.value = result; 
}