let X;
let Y;
let OP;

let inputString = "";

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
    return x / y;
}

function clearInput() {
    const inputBar = document.querySelector(".inputBar");
    inputBar.value = "";
}

function updateInputString(char) {
    const inputBar = document.querySelector(".inputBar");
    inputBar.value += char + " ";
    inputString += char + " ";
}

function createNumberButtons() {
    const container = document.querySelector(".numberButtons");

    let number = 1;
    for (let i = 0; i < 3; i++) {
        const row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < 3; j++) {
            const n = number;
            const button = document.createElement("button");
            button.textContent = `${n}`;
            button.onclick = function() {
                updateInputString(`${n}`);
            };
            button.classList.add("numberButton");
            row.appendChild(button);
            number++;
        }

        container.prepend(row);
    }

    const row = document.createElement("div");
    row.classList.add("row");
    const zero = document.createElement("button");
    zero.textContent = "0";
    zero.classList.add("numberButton");
    zero.onclick = function() {
        updateInputString("0");
    };
    row.appendChild(zero);
    container.appendChild(row);
}

function parseInput() {
    const split = inputString.split(" ");
    X = parseInt(split[0]);
    OP = split[1];
    Y = parseInt(split[2]);
}

function operate(op = OP, x = X, y = Y) {
    parseInput();
    let output;
    if (op === "+") output = add(x, y);
    if (op === "-") output = subtract(x, y);
    if (op === "x") output = multiply(x, y);
    if (op === "/") output = divide(x, y);

    const inputBar = document.querySelector(".inputBar");
    inputBar.value = `${output}`;
}

createNumberButtons();
