/*

Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.

Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, 
i numeri che ha visto precedentemente, tramite il prompt().

Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei 
numeri da indovinare sono stati individuati.

*/

// Array numeri
const numbers = [];

// Ciclo for
for (let i = 0; i < 5; i++) {
    // Generazione di un numero random fino a un massimo di 100
    numbers.push(Math.floor(Math.random() * 100))
}
console.log(numbers)