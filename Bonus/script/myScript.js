// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// Dichiarazione container elementi in Html
const mainContainer = document.querySelector('.container');

// Dichiarazione bottone Play
const playButton = document.getElementById('play');

const stop = document.getElementById('reset');

// Dichiarazione scleta Difficoltà
const userChoice = document.getElementById('choice');

// Dichiaraione elementi
  let itemsGenerated = 0;

// Al click del bottone play
playButton.addEventListener('click', function() {

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

  }

  // Dichiarazione elementi per riga (Math.sqrt = radice quadrata degli square generati)
  const itemsPerRow = Math.sqrt(itemsGenerated);

  // Larghezza di ogni colonna
  const columnWidth = 100 / itemsPerRow;

  for (let i = 1; i <= itemsGenerated; i++) {

    // Creazione elemento (tramite funzione)
    const myNewElement = createMyElement('div', 'square');

    // Append contenuto
    myNewElement.append(i);

    // Larghezza di ogni riga in %
    myNewElement.style.width = `${columnWidth}%`;

    // Append elemento creato in container
    mainContainer.append(myNewElement);

    // Al click del div .square
    myNewElement.addEventListener('click', function() {
    
      myNewElement.classList.add('clicked');

      console.log([i]);
    
    });
    
  }

});

// Al click del bottone reset
stop.addEventListener('click', function() {

  // Creazione griglia vuota
  mainContainer.innerHTML = '';

})

// Funzione Creazione Elementi in Html
function createMyElement(htmlElement, className) {

  const newElement = document.createElement(htmlElement);
  newElement.classList.add(className);

  return newElement;
};