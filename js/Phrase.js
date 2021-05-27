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

        //store the new created phrases characters ( each character ) in an array and log to ensure it works as intended
        const letters = this.phrase.split('');
        // console.log(letters);

        //Select the ul element where you want to insert the newly created li elements that will be placeholders for the phrases characters and store it in a variable to access it
        const phraseList = document.querySelector('#phrase ul');

        /**
         * Loop through the array of split letters which make up a phrase
         * @create li elements and set the textContent of each li element to each character in the phrase
         * @create a if statement to check for spaces
         * if the array character/li elements textContent is an empty space (' ') 
         *      then set the class Name of the li element to 'space'
         * else 
         *      set the class Name of the li element to `hide letter ${newLi.textContent}`
         * 
         * then after the if statement append the new created li elements to the ul space previously selected using the .appendChild() method
         */

        letters.forEach((letter) => {

            const newLi = document.createElement('li');

            newLi.textContent = letter;

            if (newLi.textContent === ' ') {

                newLi.className = 'space';

            } else {

                newLi.className = `hide letter ${newLi.textContent}`;

            }

            // console.log(newLi);

            phraseList.appendChild(newLi);

        })

        //log the phrase list to check if each placeholder is created and if each of the li placeholders have the correct class names
        // console.log(phraseList);

    }

    /**
     * Checks if passed letter is in phrase
     * @param (string) letter - letter that has to be checked against the active phrase
     */

    checkLetter(letter) {

        return game.activePhrase.phrase.includes(letter)

    }

    /**
     * Displays passed letter on screen after a match is found
     * @param {string} letter - letter to display 
     */

    showMatchedLetter(letter) {

        //Call back for the checkLetter() Method which holds a boolean value and is stored is a variable (TorF/True or False)
        let TorF = this.checkLetter(letter);

        //select all li placeholders elements that are currently displayed on the page
        let liElement = document.querySelectorAll('#phrase ul li'); //returns a node list array and stores it in a variable
        // console.log(liElement)

        let elementDataStr = [];

        liElement.forEach((li) => {

            elementDataStr.push(li);

            // console.log(elementDataStr);
        })

        elementDataStr.forEach((element) => {

            if (TorF) {

                // console.log(element.className)

                if (element.className === `hide letter ${letter}`) {

                    element.className = `show letter ${letter}`;

                }

            }

        })

    }

}