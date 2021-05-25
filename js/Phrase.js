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
        console.log(phraseList);

        // return letters

    }

    /**
     * Checks if passed letter is in phrase
     * @createArray of the letters that are displayed on the page - to check 
     * if the letter in being clicked is a letter in the phrase displayed on screen
     */

    checkLetter(letter) {

        //Select all li placeholder elements that are currently displayed on the page and log your results to insure correct selection
        let phrase = document.querySelectorAll('#phrase ul li');
        // console.log(phrase)

        //Declare an editable empty array with the let keyword
        let letters = [];

        /**
         * Loop over all items selected in the phrase variable and 
         * place all the loop over li elements
         * @target their textContent using .textContent and push it to a new array (letters[]) 
         */

        phrase.forEach((letR) => {

            //gets the text content of all the selected phrase letters and pushes each letter into an array (letters[])
            let l = letR.textContent;
            // console.log(l)

            //push the l variable to the declared array with the array method .push()
            letters.push(l);

        })

        //Declare a test using .includes() method and store the boolean value that it returns in a variable and log the result to insure it works as intended
        let doesInclude = letters.includes(letter);
        // console.log(doesInclude);

        //return the boolean value for the test the was declared above
        return doesInclude;
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
                    // console.log(element.className);

                    // console.log(letter)
                    // console.log(`${element.className}`)

                }

            }

        })

    }

}