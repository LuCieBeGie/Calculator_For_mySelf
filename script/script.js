const changeColorButton = document.querySelector('.color-change-btn')
console.log(changeColorButton);
const calculatorTable = document.querySelector('.calculator-table')
const body = document.querySelector('body')
console.log(body);
changeColorButton.onclick = function () {
    calculatorTable.classList.toggle('calculator-table-dark')
    body.classList.toggle('body_dark')
}