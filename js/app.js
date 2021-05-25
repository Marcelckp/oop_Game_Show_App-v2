/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();
// console.log(game)

// game.phrases.forEach((phrase, index) => console.log(`Phrase ${index} - Phrase: ${phrase.phrase}`))

const beginGame = game.startGame;

const startGameBtn = document.querySelector('#btn__reset');
const onScreenButtons = document.querySelectorAll('#qwerty .keyrow button');
// console.log(onScreenButtons)

startGameBtn.addEventListener('click', () => {

    beginGame();

})

onScreenButtons.forEach((button) => {

    button.addEventListener('click', () => {

        game.handleInteraction(event.target);

    })

})
const randomPhrase = game.getRandomPhrase();
// console.log(randomPhrase);

let phrase = new Phrase(randomPhrase);
// phrase.addPhraseToDisplay();