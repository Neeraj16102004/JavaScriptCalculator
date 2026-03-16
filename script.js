function appendValue(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate(){

    let display = document.getElementById("display");

    try{
        display.value = Function("return " + display.value)();
    }
    catch{
        display.value = "Error";
    }

}

function backspace() {

    let display = document.getElementById("display");

    display.value = display.value.slice(0, -1);

}

document.addEventListener("keydown", function(event) {

    const key = event.key;

    if(!isNaN(key) || key === "." || key === "+" || key === "-" || key === "*" || key === "/") {
        appendValue(key);
    }

    if(key === "Enter") {
        calculate();
    }

    if(key === "Backspace") {
        backspace();
    }

    if(key === "Escape") {
        clearDisplay();
    }

});