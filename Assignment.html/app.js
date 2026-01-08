let display = document.getElementById("display");

function press(value) {
    if (display.value === "0") {
        display.value = value;
    } else {
        display.value += value;
    }
}
function clearDisplay() {
    display.value = "0";
}
function backspace() {
    display.value = display.value.slice(0, -1);
    if (display.value === "") {
        display.value = "0";
    }
}
function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        alert("Invalid Expression");
    }
}
function toggleSign() {
    if (display.value.charAt(0) === "-") {
        display.value = display.value.slice(1);
    } else {
        display.value = "-" + display.value;
    }
}
