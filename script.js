/* TRACCIA
Il computer deve generare 16 numeri casuali tra 1 e 100, queste saranno le nostre bombe.
I numeri delle bombe non possono essere duplicati (i 16 numeri devono essere tutti diversi)
Il giocatore, deve cercare di non prendere le bombe. Gli chiederemo 100 - 16 volte di scegliere un numero, 
uno alla volta, sempre compreso tra 1 e 100. 
L'utente non può inserire 2 volte lo stesso numero. 
Ogni  volta che l'utente sceglie un numero che non è presente tra le bombe, 
guadagna un punto e poi gli chiediamo un altro numero.
Se il numero scelto dall'utente è presente tra i numeri bomba, la partita termina.
Quando la partita termina, comunichiamo all'utente il suo punteggio.
*/


var bombs = [];                                             /* per memorizzare le bombe */ 
var bombsNumbers = 6;     /*(16)*/   /modificare/           /* lunghezza dell'array bombe */
var maxNumbers = 10;      /*(100)*/  /modificare/           /* tetto massimo numerico */
var userChance = maxNumbers - bombsNumbers;                 /* le chance totali dell'utente */ 
var userNumbers = [];                                       /* per memorizzare i numeri scelti dall'utente */
var isGameOver = false;                                     /* per interrompere il ciclo*/



/TO DO -  CONTROLLARE COSA PUO DIVENTARE UNA FUNZIONE/ 

// Controlliamo che non ci siano due numeri uguali nelle bombe. Se così non fosse, pushiamo e aggiungiamo all'array; 
while (bombs.length < bombsNumbers) {
    var cpuRandom = randomNumber (1, maxNumbers); 
    if (!bombs.includes(cpuRandom)) {
        bombs.push(cpuRandom);
    }
}

// Funzione che permette di calcolare numeri random da 1 a 100; 
function randomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(bombs);


// Controlliamo che vengano inseriti dei numeri, che non siano spazi, che non sia null e che i valori vadano da min a max;
// Controlliamo inoltre se la scelta dell'utente è presente nell'array bombe e nell'array dei numeri già scelti;
// Se la scelta utente passa i controlli, pushiamo e memorizziamo la scelta dell'utente per nuovi confronti;

while (!isGameOver && userNumbers.length < userChance) {
    do {
        var userChoice = parseInt(prompt("Inserisci un numero"));
    } while (!userChoice || isNaN(userChoice) || userChoice.trim() === " " || userChoice < 1 || userChoice > maxNumbers);  
    /* si può fare funzione per validare numero */
    
    if(bombs.includes(userChoice)) {
        isGameOver = true;
        // break 
        //possiamo interrompere il ciclo con break o con un valore booleano;
    } else {
        if(userNumbers.includes(userChoice)) {
            console.log("Hai già scelto questo numero! Scegline un altro.")
        } else {
            userNumbers.push(userChoice);
        }
    } 
    console.log(userNumbers)
}


// Facciamo sapere all'utente se ha vinto o perso;
if(isGameOver) {
    console.log("Hai perso! Il tuo punteggio è di " + userNumbers.length);
} else {
    console.log("Complimenti, hai vinto!");
}

