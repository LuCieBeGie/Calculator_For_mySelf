const changeColorButton = document.querySelector('.color-change-btn')
console.log(changeColorButton);
const calculatorTable = document.querySelector('.calculator-table')

changeColorButton.onclick = function () {
    calculatorTable.classList.toggle('calculator-table-dark')
}