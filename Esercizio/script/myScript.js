// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// Dichiarazione container elementi in Html
const mainContainer = document.querySelector('.container');

// Dichiarazione bottone Play
const playButton = document.getElementById('play');

// Al click del bottone play
playButton.addEventListener('click', function() {

   // Creazione griglia vuota
   mainContainer.innerHTML = '';

  // Creazione 100 divs
  let itemsGenerated = 100; 
  
  // Numero di Bombe
  let bombs = generateArrayRandom(1, 100, 16);
  console.log(bombs);

  let score = 0;

  for (let i = 1; i <= itemsGenerated; i++) {

    // Creazione elemento (tramite funzione)
    const myNewElement = createMyElement('div', 'square');

    // Append contenuto
    myNewElement.append(i);

    // Append elemento creato in container
    mainContainer.append(myNewElement);

    // Al click del div .square
    myNewElement.addEventListener('click', function() {

      // Se "le bombe" hanno valore = al numero della variabile i
      if (bombs.includes(i)) {
        // Bomba
        myNewElement.classList.add('dead');
        alert(`Hai perso, il tuo punteggio è ${score}`);
        score = 0; // Reimposta il punteggio quando si perde
      } else {
        // Sei salvo
        myNewElement.classList.add('save');
        score++;
      }
    });
    
  }

});



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

  // Finchè gli elementi nell'array sono uguali al n° di elementi
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