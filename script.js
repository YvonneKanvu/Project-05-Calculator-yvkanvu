//import { constants } from "fs/promises";
//import { calculate } from './calculator';

// TODO: Faire la manipulation du DOM dans ce fichier
const enterInput = document.getElementById('input');
const etiqueteCalcul = document.getElementById('calcul');
const buttons = document.getElementsByClassName('digit');
const resetButton = document.getElementById('reset');
const clearButton = document.getElementById('clear');
const equalsButton = document.getElementById('equals');
//const twoozerosButton = document.getElementById('twoozeros');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const divideby = document.getElementById('divideby');
const times = document.getElementById('times');

//Appliquer une action à chaque élement,

for (let element of buttons) {
    element.addEventListener('click', ()=>{
        enterInput.value += element.innerText;
    });
    
}

clearButton.addEventListener('click',() => {
    enterInput.value='';
})

resetButton.addEventListener('click',() => {
    enterInput.value='';
    etiqueteCalcul.innerText='';
})

plus.addEventListener('click',() => {
    etiqueteCalcul.innerText= enterInput.value + '+';
    enterInput.value= '';
   // print.innerText= enterInput.value plus;
minus.addEventListener('clic', () => {
    etiqueteCalcul.innerText= enterInput.value + '-';
    enterInput.value= '';
})
divideby.addEventListener('click', () => {
    etiqueteCalcul.innerText= enterInput.value + ':';
    enterInput.value= '';
})
times.addEventListener ('click', () => {
    etiqueteCalcul.innerText= enterInput.value + '*';
    enterInput.value= '';
}) 


})