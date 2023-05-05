const changeColorButton = document.querySelector('.color-change-btn')
const calculatorTable = document.querySelector('.calculator-table')
const body = document.querySelector('body')
const screen = document.querySelector('#result')
const numberButtons = document.querySelectorAll('[data-number]')
const actionButtons = document.querySelectorAll('[data-action]')
const equalButton = document.querySelector('[data-equal]')
const clear = document.querySelector('[data-clear]')
const clear_all = document.querySelector('[data-clear-all]')

changeColorButton.onclick = function () {
    calculatorTable.classList.toggle('calculator-table-dark')
    body.classList.toggle('body_dark')
}

clear_all.addEventListener('click', function () {
    screen.value = ''
})

numberButtons.forEach((el) => {
    el.addEventListener('click', function () {
        if (el.value === '.') {
            if (!screen.value.includes('.') && screen.value != "") {
                screen.value += "."
            }
        } else if (screen.value == '0') {
            if (el.value !== ".") {
                screen.value = el.value
            }
        }
        else {
            screen.value += el.value
        }
    })
})

actionButtons.forEach((el) => {
    el.addEventListener('click', function () {
        let lastAction = el.value
        if (screen.value.endsWith(lastAction)) {
        }
        else {
            screen.value += lastAction
        }
    })
})