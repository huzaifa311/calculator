let currentInput = "";
let currentOperator = "";
let result = 0;

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById("display").value = currentInput;
}

function clearDisplay() {
    currentInput = "";
    currentOperator = "";
    result = 0;
    document.getElementById("display").value = "";
}

function cancelLastInput() {
    currentInput = currentInput.slice(0, -1); // Remove the last character from the currentInput
    document.getElementById("display").value = currentInput;
}

function calculatePercentage() {
    try {
        result = eval(currentInput) / 100;
        document.getElementById("display").value = result;
        currentInput = result.toString();
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById("display").value = currentInput;
}

function calculateResult() {
    try {
        result = eval(currentInput);
        document.getElementById("display").value = result;
        currentInput = result.toString();
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}
