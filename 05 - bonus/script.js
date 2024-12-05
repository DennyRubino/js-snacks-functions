/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';

const hours = Number(prompt("che ore sono"))
//console.log(hours) Ho aggiunto un controllo

// Dichiara la funzione qui.
function whatTime(hours) {
    if ( hours < 14)
    return ("Buongiorno" + " " + (name));
    else if (hours > 13 && hours <= 17)
        return ("Buon pomeriggi" + " " + (name));
    if (hours > 17 && hours < 25)
        return ("Buonasera" + " " + (name));
    
}

// Invoca la funzione qui e stampa il risultato in console

console.log(whatTime(hours))
//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario