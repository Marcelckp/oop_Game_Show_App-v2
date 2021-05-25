/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();
// console.log(game)

// game.phrases.forEach((phrase, index) => console.log(`Phrase ${index} - Phrase: ${phrase.phrase}`))

const beginGame = game.startGame;

const startGameBtn = document.querySelector('#btn__reset');
const onScreenButtons = document.querySelector('#qwerty');

startGameBtn.addEventListener('click', () => {

    beginGame();

})

onScreenButtons.addEventListener('click', () => {

    // phrase.checkLetter(event.target.textContent);
    phrase.showMatchedLetter(event.target.textContent);

    game.checkForWin();
    // game.removeLife();

    let numLives = 10;
    let hit = phrase.checkLetter(event.target.textContent)

    if (hit === false) {

        numLives--;
        console.log(numLives)

    }

})

const randomPhrase = game.getRandomPhrase();
// console.log(randomPhrase);

let phrase = new Phrase(randomPhrase);
// phrase.addPhraseToDisplay();