/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';

// Dichiara la funzione qui.
function countVocal(word) {
    const vocals = ['a','e','i','o','u']
    return word.split("").filter(word => vocals.includes(word))
}

// Invoca la funzione qui e stampa il risultato in console
const count = countVocal(word);
console.log(count);


//Risultato atteso se si passa 'javascript': 3 (a, a, i)