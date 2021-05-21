/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {

    constructor(phrase) {

        this.phrase = phrase.toLowerCase();

    }

    /**
     * Display phrase on game board 
     */

    addPhraseToDisplay() {

        const letters = this.phrase.split('')
        console.log(letters)

        const phraseList = document.querySelector('#phrase ul');

        letters.forEach((letter) => {

            const newLi = document.createElement('li')

            newLi.textContent = letter;

            if (newLi.textContent === ' ') {

                newLi.className = 'space';

            } else {

                newLi.className = `hide letter ${newLi.textContent}`;

            }

            // console.log(newLi);

            phraseList.appendChild(newLi)

        })

        console.log(phraseList);
        return letters

    }

    /**
     * Checks if passed letter is in phrase
     * @param {string} letter - letter to check
     */

    checkLetter(letterStr) {

        let letters = this.phrase.split('');
        console.log(letters)

        letters.forEach((letter) => {

            if (letter === letterStr) {



            }

        })

        // onScreenButtons.addEventListener('click', () => {

        //     const capturedLetter = event.target.textContent;
        //     // console.log(capturedLetter)

        //     letters.forEach((l) => {

        //         // console.log(letter)
        //         if (capturedLetter === l) {

        //             return `the letter ${l} is in the phrase well done`


        //         } else {

        //             return `the letter ${l} is not in the phrase try again`

        //         }
        //     })
        // });
    }

    /**
     * Displays passed letter on screen after a match is found
     * @param {string} letter - letter to display 
     */

    showMatchedLetter() {



    }

}