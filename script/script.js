const changeColorButton = document.querySelector('.color-change-btn');
const calculatorTable = document.querySelector('.calculator-table');
const body = document.querySelector('body');
const screen = document.querySelector('#result');
const numberButtons = document.querySelectorAll('[data-number]');
const actionButtons = document.querySelectorAll('[data-action]');
const equalButton = document.querySelector('[data-equal]');
const clear = document.querySelector('[data-clear]');
const clear_all = document.querySelector('[data-clear-all]');
const backspaceButton = document.querySelector('[data-backspace]');

let currentValue = '';
let storedValue = '';
let currentAction = '';
let resultDisplayed = false;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return 'ERROR!';
    }
    return a / b;
}

function doAction(action, a, b) {
    switch (action) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return 'Invalid action';
    }
}

function screenUpdate() {
    screen.value = currentValue;
}

function checkMaxLength() {
    let maxLength = 10;
    if (currentValue.length > maxLength) {
        currentValue = currentValue.slice(0, maxLength);
        alert('Maximum length is reached');
    }
}

numberButtons.forEach((button) => {
    button.addEventListener('click', function () {
        if (resultDisplayed) {
            currentValue = '';
            resultDisplayed = false;
        }

        if (screen.value === 'ERROR!') {
            screen.value = '';
            currentValue = '';
        }
        if (button.value === '.') {
            if (!currentValue.includes('.')) {
                currentValue += ".";
            }
        } else if (currentValue == '0') {
            if (button.value !== ".") {
                currentValue = button.value;
            }
        } else {
            currentValue += button.value;
        }
        checkMaxLength();
        screenUpdate();
    });
});

actionButtons.forEach((el) => {
    el.addEventListener('click', function () {
        if (currentValue === '' && storedValue !== '' && currentAction !== '') {
            currentAction = el.value;
            return;
        }

        if (storedValue !== '' && currentAction !== '') {
            currentValue = doAction(
                currentAction,
                parseFloat(storedValue),
                parseFloat(currentValue)
            );
            screenUpdate();
        }

        currentAction = el.value;
        storedValue = currentValue;
        currentValue = '';
    });
});

clear_all.addEventListener('click', function () {
    currentValue = '';
    storedValue = '';
    currentAction = '';
    screenUpdate();
});

clear.addEventListener('click', function () {
    currentValue = '';
    screenUpdate();
});

backspaceButton.addEventListener('click', function () {
    currentValue = currentValue.slice(0, -1);
    screenUpdate();
});

equalButton.addEventListener('click', function () {
    if (currentValue === '' || storedValue === '' || currentAction === '') {
        return;
    }
    currentValue = doAction(
        currentAction,
        parseFloat(storedValue),
        parseFloat(currentValue)
    ).toString();
    screenUpdate();
    storedValue = '';
    currentAction = '';
    resultDisplayed = true;
});

changeColorButton.onclick = function () {
    calculatorTable.classList.toggle('calculator-table-dark');
    body.classList.toggle('body_dark');
};
