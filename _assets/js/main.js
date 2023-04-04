/*

Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.

Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, 
i numeri che ha visto precedentemente, tramite il prompt().

Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei 
numeri da indovinare sono stati individuati.

*/

// Array vuoto numeri
let numbers = [];

const numbersList = document.createElement("ul");
const rememberText = document.querySelector(".rememberText");

// Ciclo While fino a un massimo di 5 numeri senza ripetizioni di numeri uguali
while(numbers.length < 5) {
    // Generazione di un numero random fino a un massimo di 100
    const number = Math.floor(Math.random() * 100);
    if (!numbers.includes(number)) {
        numbers.push(number)
    }
}
console.log(numbers)

// aggiunta dei numeri alla lista
for (const number of numbers) {
    const listItem = document.createElement("li");
    listItem.textContent = number;
    numbersList.appendChild(listItem);
}

// Stampo in pagina la lista dei numeri
rememberText.appendChild(numbersList);

// I numeri generati spariscono dopo 1,8 secondi
setTimeout(function () {
    numbersList.remove();

}, 1800);

// I prompt appaiono dopo 2 secondi
setTimeout(function () {
    let guessedNumbers = [];
    for (let i = 0; i < 5; i++) {
        let guess = parseInt(prompt("Inserisci il " + (i + 1) + "° numero:"));
        if (!isNaN(guess)) {
            guessedNumbers.push(guess);
        }
    }

    let correctNumbers = [];
    for (let j = 0; j < guessedNumbers.length; j++) {
        let number = guessedNumbers[j];
        if (numbers.indexOf(number) !== -1 && correctNumbers.indexOf(number) === -1) {
            correctNumbers.push(number);
        }
    }

    const containerResults = document.querySelector(".comtainer_results");


    let numCorrect = correctNumbers.length;
    if (numCorrect === 0) { // Se non hai indovinato nemmeno un numero esce questo messaggio
        // alert("Mi dispiace, non hai indovinato nessun numero.");
        containerResults.innerHTML = `
            <p class="results">Mi dispiace, non hai indovinato nessun numero.</p>
        `;
    } else if (numCorrect === 1) { // Se hai indovinato solo un numero esce questo messaggio
        // alert("Hai indovinato un numero: " + correctNumbers[0] + ".");
        containerResults.innerHTML = `
            <p class="results">Hai indovinato un numero: ${correctNumbers[0]}."</p>
        `;
    } else { // Se hai indovinato più di un numero esce questo messaggio
        // alert("Hai indovinato " + numCorrect + " numeri: " + correctNumbers.join(", ") + ".");
        containerResults.innerHTML = `
            <p class="results">Hai indovinato: ${numCorrect} numeri: ${correctNumbers}.</p>
        `;
    }

}, 2000);