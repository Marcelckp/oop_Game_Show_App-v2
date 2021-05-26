/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {

    constructor() {

        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;

    }

    /**
     * Creates phrases for use in game
     * @return {array} An array of phrases that can be used within the game
     */

    createPhrases() {

        const phrases = []

        const phrase1 = new Phrase('Close but no cigar')
        const phrase2 = new Phrase('javaScript is the best language');
        const phrase3 = new Phrase('I spy with my little eye');
        const phrase4 = new Phrase('A fool and his Money are soon parted');
        const phrase5 = new Phrase('I have got the best view in the city even the sunset cant compare');
        const phrase6 = new Phrase('You and I see eye to eye');
        const phrase7 = new Phrase('Today im feeling a bit under the weather');
        const phrase8 = new Phrase('Coding Has been a blessing in disguise');
        const phrase9 = new Phrase('It feels as if theres a elephant in the room');
        const phrase10 = new Phrase('Work hard daily no Pain no Gain');

        phrases.push(phrase1);
        phrases.push(phrase2);
        phrases.push(phrase3);
        phrases.push(phrase4);
        phrases.push(phrase5);
        phrases.push(phrase6);
        phrases.push(phrase7);
        phrases.push(phrase8);
        phrases.push(phrase9);
        phrases.push(phrase10);

        return phrases;

    }

    /**
     * Selects random phrase from phrases property
     * @return {object} Phrase object chosen to be used in the game 
     */


    getRandomPhrase() {

        const randomPhrase = this.phrases[Math.floor(Math.random() * 10)]

        const phrase = randomPhrase.phrase;
        // console.log(phrase)

        return phrase;

    }

    /**
     * Begins game by selection a random phrase and displaying it to the user/ person playing the game
     */

    startGame() {

        const overlayDiv = document.querySelector('#overlay');

        overlayDiv.style.display = 'none';

        const randomPhrase = game.getRandomPhrase();
        // console.log(randomPhrase);

        let phrase = new Phrase(randomPhrase);
        phrase.addPhraseToDisplay();


    }

    /**
     * Checks for winning move 
     * @return {boolean} True if the game has been won and false if the games hasn't been won
     */

    checkForWin() {

        const phraseLi = document.querySelectorAll('#phrase ul li')

        let trueOrNot = true;

        phraseLi.forEach((li) => {

            // console.log(li);

            if (li.className === `hide letter ${li.textContent}`) {

                trueOrNot = false;

            }

        })

        // console.log(trueOrNot)
        // if (trueOrNot) {
        //     console.log('Congratulations you have won the game')
        // } else {
        //     console.log('game hasn\'t been won as yet')
        // }

        return trueOrNot;

    }

    /**
     * Increase the value of the missed property
     * Removes a life from the scoreboard
     * Checks if player has remaining lives and ends game if player is out of lives
     */

    removeLife() {

        const heartTries = document.querySelectorAll('.tries img');

        // console.log(heartTries)
        // console.log(heartTries[this.missed]);
        // console.log(this.missed)

        heartTries[this.missed].src = 'images/lostHeart.png';

        this.missed++;

        if (this.missed === 5) {

            this.gameOver(false);
            console.log(`you ran out of all your hearts, so the games has been lost Try Again`)

        }
    }

    /**
     * Displays game over message 
     * @param {boolean} gameWon - whether or not the user won the game
     */

    gameOver(gameWon) {

        let message = '';
        const overlay = document.querySelector('#overlay');
        const startGameButton = document.querySelector('#btn__reset');
        const h1MessageDisplay = document.querySelector('#game-over-message');
        h1MessageDisplay.innerHTML = '';

        if (this.missed === 5) {
            gameWon = false;
        }

        if (this.checkForWin() === true) {
            gameWon = true;
        }


        if (gameWon === true) {

            overlay.style.backgroundColor = '';
            h1MessageDisplay.innerHTML = `Congratulations you cracked the code and won the game!`;
            overlay.className = 'win';
            overlay.style.display = '';
            startGameButton.innerHTML = 'Start A New Game';

        }

        if (gameWon === false) {

            overlay.style.backgroundColor = '';
            h1MessageDisplay.innerHTML = `Unlucky you couldn\'t crack the code try again...`;
            overlay.className = 'lose'
            overlay.style.display = '';
            startGameButton.innerHTML = 'Try Again';

        }

        return gameWon;

    }

    /**
     * Handles onscreen keyboard button clicks
     * @param (HTMLButtonElement) button - the clicked button element
     */
    handleInteraction(button) {

        console.log(button)


        let checkTrueOrFalse = phrase.checkLetter(event.target.textContent);

        if (checkTrueOrFalse === false) {

            this.removeLife();
            button.disabled = true;
            button.className = 'wrong';

        }

        if (checkTrueOrFalse === true) {

            button.disabled = true;
            button.className = 'chosen'
            phrase.showMatchedLetter(event.target.textContent);
            this.checkForWin();
            this.gameOver();

        }

        this.resetGame();

    }

    resetGame() {

        const overlay = document.querySelector('#overlay');
        const gameOverMsg = document.querySelector('#game-over-message')
        const liPlaceholders = document.querySelectorAll('#phrase ul li');
        // console.log(liPlaceholders)

        const keyBoard = document.querySelectorAll('.keyrow button')
        const hearts = document.querySelectorAll('#scoreboard .tries img')

        if (this.gameOver() === false ||
            this.gameOver() === true) {

            // console.log('time to reset the game')

            liPlaceholders.forEach((li) => {

                // console.log(li)
                li.className = 'hide'

                li.innerHTML = '';

            })

            keyBoard.forEach((button) => {

                button.disabled = false;
                button.className = ''
                    // console.log(button)

            })

            hearts.forEach((heart) => {

                // console.log(heart)
                heart.src = 'images/liveHeart.png';
                this.missed = 0;

            })

        }

    }
}