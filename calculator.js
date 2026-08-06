// Select elements
const display = document.querySelector(".display");

const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");

const equalsButton = document.querySelector(".equals");
const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");
const decimalButton = document.querySelector(".decimal");

// Variables
let firstNumber = "";
let secondNumber = "";
let operator = "";
let waitingForSecondNumber = false;

// Number buttons
numberButtons.forEach(button => {
    button.addEventListener("click", () => {

        if (display.value === "0" || waitingForSecondNumber) {
            display.value = button.textContent;
            waitingForSecondNumber = false;
        } else {
            display.value += button.textContent;
        }

    });
});

// Decimal button
decimalButton.addEventListener("click", () => {

    if (waitingForSecondNumber) {
        display.value = "0.";
        waitingForSecondNumber = false;
        return;
    }

    if (!display.value.includes(".")) {
        display.value += ".";
    }

});

// Operator buttons
operatorButtons.forEach(button => {
    button.addEventListener("click", () => {

        firstNumber = parseFloat(display.value);
        operator = button.textContent;
        waitingForSecondNumber = true;

    });
});

// Equals button
equalsButton.addEventListener("click", () => {

    if (operator === "") return;

    secondNumber = parseFloat(display.value);

    let result;

    switch (operator) {

        case "+":
            result = firstNumber + secondNumber;
            break;

        case "-":
            result = firstNumber - secondNumber;
            break;

        case "*":
            result = firstNumber * secondNumber;
            break;

        case "/":

            if (secondNumber === 0) {
                display.value = "Error";
                reset();
                return;
            }

            result = firstNumber / secondNumber;
            break;

        case "%":
            result = firstNumber % secondNumber;
            break;

        default:
            return;

    }

    display.value = result;
    firstNumber = result;
    operator = "";
    waitingForSecondNumber = true;

});

// Clear button
clearButton.addEventListener("click", reset);

// Delete button
deleteButton.addEventListener("click", () => {

    if (waitingForSecondNumber) return;

    if (display.value.length === 1) {
        display.value = "0";
    } else {
        display.value = display.value.slice(0, -1);
    }

});

// Reset function
function reset() {

    display.value = "0";
    firstNumber = "";
    secondNumber = "";
    operator = "";
    waitingForSecondNumber = false;

}