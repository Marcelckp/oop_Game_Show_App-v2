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

        const phrases = [

            new Phrase('Close but no cigar'),
            new Phrase('javaScript is the best language'),
            new Phrase('I spy with my little eye'),
            new Phrase('A fool and his Money are soon parted'),
            new Phrase('I have got the best view in the city even the sunset cant compare'),
            new Phrase('You and I see eye to eye'),
            new Phrase('Today im feeling a bit under the weather'),
            new Phrase('Coding Has been a blessing in disguise'),
            new Phrase('It feels as if theres a elephant in the room'),
            new Phrase('Work hard daily no Pain no Gain')

        ]

        return phrases;

    }

    /**
     * Selects random phrase from phrases property
     * @return {object} Phrase object chosen to be used in the game 
     */

    getRandomPhrase() {

        let randomPhrase = this.phrases[Math.floor(Math.random() * 10)]

        return randomPhrase;

    }

    /**
     * Begins game by selection a random phrase and displaying it to the user/ person playing the game
     */

    startGame() {

        // this.activePhrase = this.getRandomPhrase();

        const overlayDiv = document.querySelector('#overlay');

        overlayDiv.style.display = 'none';

        this.activePhrase = this.getRandomPhrase();
        // console.log(this.activePhrase)

        this.activePhrase.addPhraseToDisplay();

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

        if (this.missed < heartTries.length) {

            heartTries[this.missed].src = 'images/lostHeart.png';

        }

        this.missed++;

    }


    /**
     * Displays game over message 
     * @param {boolean} gameWon - whether or not the user won the game
     */

    gameOver(gameWon) {

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

            // console.log('you ran out of lives')
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

        const checkTrueOrFalse = this.activePhrase.checkLetter(button.textContent);
        console.log(checkTrueOrFalse)

        if (checkTrueOrFalse === false) {

            this.removeLife();
            button.disabled = true;
            button.className = 'wrong';

        }

        if (checkTrueOrFalse === true) {

            button.disabled = true;
            button.className = 'chosen'
            this.activePhrase.showMatchedLetter(button.textContent);
            this.checkForWin();
            this.gameOver();

        }

        this.resetGame();

    }

    resetGame() {

        const overlay = document.querySelector('#overlay');
        const gameOverMsg = document.querySelector('#game-over-message')
        const phraseUl = document.querySelector('#phrase ul');
        const phraseUlChildren = document.querySelectorAll('#phrase ul li');

        const keyBoard = document.querySelectorAll('.keyrow button')
        const hearts = document.querySelectorAll('#scoreboard .tries img')

        if (this.gameOver() === false ||
            this.gameOver() === true) {

            console.log('time to reset the game')

            this.activePhrase = null

            phraseUlChildren.forEach((li) => {

                li.className = ''
                phraseUl.removeChild(li)

            })

            keyBoard.forEach((button) => {

                button.disabled = false;
                button.className = 'key'
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