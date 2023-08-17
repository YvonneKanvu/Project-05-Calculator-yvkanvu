import { calculate } from './calculator.js';

// // TODO: Faire la manipulation du DOM dans ce fichier
const calculElement = document.querySelector('#calcul');
const inputElement = document.querySelector('#input');
const buttonsElements = document.querySelectorAll('.numpad');
const operators = document.querySelectorAll('#divideby, #times, #minus, #plus');
const equals = document.querySelector('#equals');
const reset = document.querySelector('#reset');
const clear = document.querySelector('#clear');


let prevElement = '';
let currentElement = '';
inputElement.value = '';
let result = null;
let lastOperator = '';

//Parcourir tout les boutons numerique
for (let number of buttonsElements) {
    number.addEventListener('click', (e) => {
        currentElement += e.target.innerText;
        inputElement.value = currentElement;

    })
}
// Parcourir tout les boutons operations
for (let operation of operators) {
    operation.addEventListener('click', (e) => {
        if (!currentElement) return;

        const operationName = e.target.innerText;
        if (prevElement && currentElement && lastOperator) {
            operations();
        } else {
            result = parseFloat(currentElement);
        }
        clearElement(operationName);
        lastOperator = operationName;
    })
}

// effacer l'element dans display Current
function clearElement(name = '') {
    prevElement += currentElement + ' ' + name + ' ';
    calculElement.innerText = prevElement;
    inputElement.value = '';
    currentElement = '';
}
//calcul
function operations() {
    if (lastOperator === '×') {
        result = parseFloat(result) * parseFloat(currentElement);
    }
    else if (lastOperator === '+') {
        result = parseFloat(result) + parseFloat(currentElement);
    }
    else if (lastOperator === '-') {
        result = parseFloat(result) - parseFloat(currentElement);
    } else if (lastOperator === '÷') {
        result = parseFloat(result) / parseFloat(currentElement);
    }
}
//bouton egal
equals.addEventListener('click', (e) => {
    if (!prevElement || !currentElement) return;

    operations();
    clearElement();
    
        calculElement.innerHTML += '='
        inputElement.value = result;
    currentElement = result
    prevElement = ''
})
//bouton reset
reset.addEventListener('click', (e) => {
    calculElement.innerText = '';
    inputElement.value = '';
    currentElement = '';
    prevElement = '';
    result = '';
});
// bouton clear
clear.addEventListener('click', (e) => {
    if (inputElement.value == '') {
        return
    } else {
        inputElement.value = inputElement.value.slice(0, 0);
    }
})