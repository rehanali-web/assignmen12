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
function toggleSign() {
    if (display.value.charAt(0) === "-") {
        display.value = display.value.slice(1);
    } else {
        display.value = "-" + display.value;
    }
}
    function calculate() {
    let exp = display.value;
    if (exp.indexOf("+") !== -1) {
        let parts = exp.split("+");
        let result = Number(parts[0]) + Number(parts[1]);
        display.value = result;
    }
    else if (exp.indexOf("-") !== -1) {
        let parts = exp.split("-");
        let result = Number(parts[0]) - Number(parts[1]);
        display.value = result;
    }
    else if (exp.indexOf("*") !== -1) {
        let parts = exp.split("*");
        let result = Number(parts[0]) * Number(parts[1]);
        display.value = result;
    }
    else if (exp.indexOf("/") !== -1) {
        let parts = exp.split("/");
        let result = Number(parts[0]) / Number(parts[1]);
        display.value = result;
    }

    else {
        alert("Invalid Expression");
    }
}
