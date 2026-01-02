//                                  Question 1
function pwr(a, b) {
    var result = 1;
    var i = 0;
    while (i < b) {
        result = result * a;
        i++;
    }
    return result;
}

//                                  Question 2
function ly(y) {
    switch (true) {
        case (y % 4 === 0 && y % 100 !== 0):
        case (y % 400 === 0):
            return true;
        default:
            return false;
    }
}

//                                  Question 3
function tArea(a, b, c) {
    var s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

//                                  Question 4
function avg(marks) {
    var sum = 0;
    var i = 0;
    while (i < marks.length) {
        sum += marks[i];
        i++;
    }
    return sum / marks.length;
}

function pct(marks) {
    var sum = 0;
    var i = 0;
    while (i < marks.length) {
        sum += marks[i];
        i++;
    }
    return (sum / 300) * 100;
}

function main(marks) {
    return {
        average: avg(marks),
        percentage: pct(marks)
    };
}

//                                  Question 5
function idxOf(str, char) {
    var i = 0;
    while (i < str.length) {
        if (str[i] === char) return i;
        i++;
    }
    return -1;
}

//                                  Question 6
function delVowels(sentence) {
    if (sentence.length > 25) return "Sentence too long";
    var vowels = "aeiouAEIOU";
    var result = "";
    var i = 0;
    while (i < sentence.length) {
        if (vowels.indexOf(sentence[i]) === -1) {
            result += sentence[i];
        }
        i++;
    }
    return result;
}

//                                  Question 7
function consVowels(sentence) {
    var vowels = "aeiouAEIOU";
    var count = 0;
    var i = 0;
    while (i < sentence.length - 1) {
        switch (true) {
            case (vowels.indexOf(sentence[i]) !== -1 &&
                  vowels.indexOf(sentence[i + 1]) !== -1):
                count++;
        }
        i++;
    }
    return count;
}

//                                  Question 8
function toMeters(km) {
    return km * 1000;
}
function toFeet(km) {
    return km * 3280.84;
}
function toInches(km) {
    return km * 39370.1;
}
function toCentimeters(km) {
    return km * 100000;
}

var km;
do {
    km = prompt("Q8: Enter distance in KM");
    if (km === null) break;
    km = parseFloat(km);
} while (isNaN(km) || km < 0);

if (km !== null) {
    console.log("Meters: " + toMeters(km));
    console.log("Feet: " + toFeet(km));
    console.log("Inches: " + toInches(km));
    console.log("Centimeters: " + toCentimeters(km));
}

//                                  Question 9
function otPay(hours) {
    var overtime = 0;
    if (hours > 40) overtime = hours - 40;
    return overtime * 12;
}

var hours;
do {
    hours = prompt("Q9: Enter hours worked");
    if (hours === null) break;
    hours = parseInt(hours);
} while (isNaN(hours) || hours < 0);

if (hours !== null) {
    console.log("Overtime Pay: Rs. " + otPay(hours));
}

//                                  Question 10
function calcNotes(amount) {
    var hundreds = 0, fifties = 0, tens = 0;
    switch (true) {
        case amount >= 100:
            hundreds = Math.floor(amount / 100);
            amount = amount % 100;
        case amount >= 50:
            fifties = Math.floor(amount / 50);
            amount = amount % 50;
        case amount >= 10:
            tens = Math.floor(amount / 10);
    }
    return { hundreds, fifties, tens };
}

var withdraw;
do {
    withdraw = prompt("Q10: Enter amount (multiple of 10)");
    if (withdraw === null) break;
    withdraw = parseInt(withdraw);
} while (isNaN(withdraw) || withdraw % 10 !== 0);

if (withdraw !== null) {
    var notes = calcNotes(withdraw);
    console.log("100 Notes: " + notes.hundreds);
    console.log("50 Notes: " + notes.fifties);
    console.log("10 Notes: " + notes.tens);
}







function showAlert() {
    alert("Welcome to JavaScript");
}

var mobiles = ["Samsung", "iPhone", "Oppo"];

function buyMobile(index) {
    alert("Thanks for purchasing " + mobiles[index]);
}

function deleteRow(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function changeImage(img) {
    img.src = "img/image copy 4.png";
}

function resetImage(img) {
    img.src = "img/image copy 5.png";
}

var count = 0;

function increase() {
    count++;
    document.getElementById("counter").innerHTML = count;
}

function decrease() {
    count--;
    document.getElementById("counter").innerHTML = count;
}
