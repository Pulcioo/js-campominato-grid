console.log("JS OK")

// Creare una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range compreso tra 1 e 100
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.


/////// 1.Creo una griglia di gioco su CSS

/////// 2.Aggiungo il div con #griglia nel documento HTML

/////// 3.Imposto la griglia su 10 righe e 10 colonne in JS

// seleziono 'griglia' tramite ID
const griglia = document.getElementById('griglia');
// variabili d'appoggio per definire righe e colonne
let colonne = 10
let righe = 10
// calcolo le celle totali
let celleTotali = colonne * righe

// 4.CICLO per ogni cella della griglia
for (let i = 0; i < celleTotali; i++) {
    // creo la cella usando la funzione creata sotto
    const cella = creoCella();
    // aggiungo .cella nella griglia
    griglia.appendChild(cella)
}









// creo una cella tramite funzione
function creoCella() {
    const item = document.createElement('div');
    item.classList.add('cella');
    return item;
}