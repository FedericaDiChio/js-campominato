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

var bombs = [];
while (bombs.length < 16) {
    var cpuRandom = Math.floor(Math.random() * 100 - 1 + 1) + 1; /*-> creare una funzione */
    if (!bombs.includes(cpuRandom)) {
        bombs.push(cpuRandom);
    }
}

console.log(bombs);

