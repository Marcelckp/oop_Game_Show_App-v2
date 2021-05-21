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

        const phrase1 = new Phrase('how are you')
        const phrase2 = new Phrase('Grime and drill are amazing');
        const phrase3 = new Phrase('I swing my arms in a figure of eight');
        const phrase4 = new Phrase('If i pull up best believe the car getting dented');
        const phrase5 = new Phrase('I keep my huston rocket');

        phrases.push(phrase1);
        phrases.push(phrase2);
        phrases.push(phrase3);
        phrases.push(phrase4);
        phrases.push(phrase5);

        return phrases

    }

    /**
     * Selects random phrase from phrases property
     * @return {object} Phrase object chosen to be used in the game 
     */


    getRandomPhrase() {

        const randomPhrase = this.phrases[Math.floor(Math.random() * 5)]

        const phrase = randomPhrase.phrase
            // console.log(phrase)

        return phrase;

    }

    /**
     * Begins game by selection a random phrase and displaying it to the user/ person playing the game
     */

    startGame() {

        const overlayDiv = document.querySelector('#overlay');

        overlayDiv.style.display = 'none'

        const randomPhrase = game.getRandomPhrase();
        // console.log(randomPhrase);

        let phrase = new Phrase(randomPhrase);
        phrase.addPhraseToDisplay();


    }

    handleInteraction() {



    }

}