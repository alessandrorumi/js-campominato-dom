// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// Dichiarazione container elementi in Html
const mainContainer = document.querySelector('.container');

// Dichiarazione bottone Play
const playButton = document.getElementById('play');

// Dichiarazione bottone Reset
const stop = document.getElementById('reset');

// Dichiarazione scleta Difficoltà
const userChoice = document.getElementById('choice');

// Dichiarazione div
let itemsGenerated = 0; 

// Reset punteggio
let score = 0;

// Dichiaro la variabile 'Sto ancora giocando'
let didNotLose = true;

// Al click del bottone play
playButton.addEventListener('click', function() {

  // Nascosto Play dopo inzio partita
  play.classList.add('hidden');

  // Reset numero di bombe quando inizia una nuova partita
  numberOfBombs = 16;

  // Creazione griglia vuota
  mainContainer.innerHTML = '';

  let outputUserChoice = userChoice.value;

  // Difficoltà
  // Facile
  if (outputUserChoice === 'easy') {
    itemsGenerated = 100;

    // Medio
  } else if (outputUserChoice === 'medium') {
    itemsGenerated = 81;

    // Difficile
  } else if (outputUserChoice === 'hard') {
    itemsGenerated = 49;

    // Personalizzata
  } else if (outputUserChoice === 'personalizzata') {
    itemsGenerated = parseInt(prompt('Seleziona il n° di caselle'));
    numberOfBombs = parseInt(prompt('Seleziona il n° di bombe'));
  }

  // N° random in base alle bombe
  let bombs = generateArrayRandom(1, itemsGenerated, numberOfBombs);
  console.log(bombs);

  // Dichiarazione elementi per riga (Math.sqrt = radice quadrata degli square generati)
  const itemsPerRow = Math.sqrt(itemsGenerated);

  // Larghezza di ogni colonna
  const columnWidth = 100 / itemsPerRow;

  for (let i = 1; i <= itemsGenerated; i++) {

    // Creazione elemento (tramite funzione)
    const myNewElement = createMyElement('div', 'square');

    // Append contenuto (numeri)
    // myNewElement.append(i);

    // Larghezza di ogni riga in %
    myNewElement.style.width = `${columnWidth}%`;

    // Append elemento creato in container
    mainContainer.append(myNewElement);

    // Al click del div .square
    myNewElement.addEventListener('click', function() {

      // Se non ho ancora perso e l'elemento non è ancora stato cliccato
      if (didNotLose && !myNewElement.classList.contains('clicked')) {

        // Se c'è corrispondenza tra uno dei numeri generati randomicamente (bombe) e uno dei numeri della griglia
        if (bombs.includes(i)) {
          
          // Bomba
          myNewElement.classList.add('dead');
  
          alert(`Hai perso, il tuo punteggio è ${score}`);
  
          // Reset del punteggio quando si perde
          score = 0;
  
          // Blocca le interazioni con gli elementi
          didNotLose = false;
  
        } else {
          // Sei salvo (continua il gioco)
          myNewElement.classList.add('save');

          // Incrementa di 1 il punteggio
          score++;

          // Aggiungo la classe clicked (altrimenti continuando a fare click sullo stesso elemento aumenta il punteggio)
          myNewElement.classList.add('clicked');
        }

        // Vittoria (Il punteggio è uguale agli elementi generati - il n° delle bombe)
        if (score === itemsGenerated - numberOfBombs) {

          alert('Congratulazioni! Gioca subito al SuperEnalotto');

        }

      }
    
    });
    
  }

});

// Al click del bottone reset
stop.addEventListener('click', function() {

  // Creazione griglia vuota
  mainContainer.innerHTML = '';
  didNotLose = true;


  play.classList.remove('hidden');

})


// Funzioni

// Funzione Creazione Elementi in Html
function createMyElement(htmlElement, className) {

  const newElement = document.createElement(htmlElement);
  newElement.classList.add(className);

  return newElement;
};

// Funzione Generazione numeri in array (in modo casuale)
function generateArrayRandom(min, max, arrayLength) {

  // Array vuoto
  arrayRandom = [];

  // Finchè gli elementi nell'array non sono uguali al n° di elementi
  while (arrayRandom.length < arrayLength) {
    
    // Genera n° random
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    // Se il numero random non è presente nell'array
    if (!arrayRandom.includes(randomNumber)) {

      // Push nell'array
      arrayRandom.push(randomNumber);
    }
  }

  // Restituisci l'array
  return arrayRandom;
}
