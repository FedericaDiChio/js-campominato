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


/* 
1. creo un array vuoto per contenere le bombe; ok
2. come genero le bombe? Con math.random; da 1 a 100;     ok
3. come le inserisco nell'array? con push;     ok 
4. bisogna però chiedergli di fare questa cosa del random finchè non inserisce 16 numeri nell'array; ok
5.  Controllo di non inserire random uguali.
*/ 

var bombs = [];                                         /* per memorizzare le bombe */ 
var bombsNumbers = 6;                        /*(16)     /* lunghezza dell'array bombe */
var maxNumbers = 10;                      /*(100)       /* tetto massimo numerico */
var userChance = maxNumbers - bombsNumbers;             /* le chance totali dell'utente */ 
var userNumbers = [];                                    /* per memorizzare i numeri scelti dall'utente */
var userChoice;                                         /* per chiedere i numeri all'utente */
var isGameOver = false;                                 /* per interrompere il ciclo*/


// Controlliamo che non ci siano due numeri uguali nelle bombe 
while (bombs.length < bombsNumbers) {
    var cpuRandom = randomNumber (1, maxNumbers) 
    if (!bombs.includes(cpuRandom)) {
        bombs.push(cpuRandom);
    }
}
// Includes va eseguito più volte, si potrebbe fare una funzione? 

// Funzione che permette di calcolare numeri random da 1 a 100 
function randomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(bombs);


/*6. Dobbiamo chiedere un numero all'utente */
// 7. Controlliamo che questo numero sia un numero, che vada dal min al max e che l'utente non lasci il campo vuoto 


while (!isGameOver && userNumbers < userChance) { /*controlliamo che i numeri dell'utente siano tanti quanti i tentativi */
    do {
        userChoice = parseInt(prompt("Inserisci un numero fino a " +maxNumbers))
    } while (!userChoice /*controlliamo no null ecc */ || !isNaN(userChoice) /*controlliamo che sia un numero*/ || userChoice < 1 || userChoice > maxNumbers /*controlliamo max e min*/) 

} 

/* ok */


/* Controlliamo che il numero scelto dall'utente non sia nelle bombe*/

if(bombs.includes(userChoice)) {
    console.log("Hai perso") 
} else {
    
}