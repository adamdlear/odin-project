let X = "";
let Y = "";
let OP = null;

const numberButtons = document.querySelector(".numberButtons");
const operationButtons = document.querySelector("operationButtons");

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y === 0) return null;
    else return x / y;
}

function operate(op = OP, x = X, y = Y) {
    x = Number(x);
    y = Number(y);

    switch (op) {
        case "+":
            return add(x, y);
        case "-":
            return subtract(x, y);
        case "x":
            return multiply(x, y);
        case "/":
            return divide(x, y);
        default:
            return null;
    }
}
    
