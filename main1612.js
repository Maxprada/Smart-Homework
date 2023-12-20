function calculateFactorial() {
    var number = document.getElementById("num").value;

    if (isNaN(number)) {
        console.log("Будь ласка, введіть число.");
        return;
    }

    var factorial = 1;
    for (var i = 1; i <= number; i++) {
        factorial *= i;
    }

    console.log("Факторіал числа " + number + " дорівнює: " + factorial);
}