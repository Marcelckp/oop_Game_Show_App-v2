/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//start the initiation of the game class to be called later in the start game event listener handler
let game;

//Create all necessary variables to store the DOM selections and log them to ensure you are targeting the correct DOM elements 

const startGameBtn = document.querySelector('#btn__reset');
const onScreenButtons = document.querySelectorAll('#qwerty .keyrow button');
const resetBtn = document.querySelector('#resetG_btn');
const darkModeBtn_on = document.querySelector('#darkMode_on');
const body = document.querySelector('body');
const headerPHunter = document.querySelector('.header')
const darkModeBtn_off = document.querySelector('#darkMode_off');
const darkBtnElement = document.querySelector('#scoreboard .button')

//Added styling to the phrase hunter overlay 
overlay.style.backgroundColor = '#235789';

/**
 * @create event listener and place it on the start game button on the phrase hunter overlay
 * 
 * @within the handler initiate a new instance of the page class and call the startGame() method
 * add a conditional that checks if the id of the dark mode button is 'darkMode_off' 
 *      if the condition is met then give the keyboard the class Name of 'darkMode_keyboard'
 *      so that on page load the keyboard has the correct styling applied to it based on wether or not dark mode is active
 * 
 * log all variables to ensure you're targeting/working with the correct data/DOM elements
 */

startGameBtn.addEventListener('click', () => {

    game = new Game();
    game.startGame();

    game.resetGame();

    if (darkBtnElement.id === 'darkMode_off') {

        onScreenButtons.forEach((button) => {

            button.className = 'darkMode_Keyboard'

        })

    }

})

/**
 * Iterate over all buttons and give each button a event listener on a click event so that each button element
 * displayed on the page has a event listener so that if you click around the button and not on the button the event listener won't
 * be triggered
 * 
 * @within the event listener place the call back handleInteractions method from the Game class and pass into it's @param {the target of the event}
 * 
 * log all variables to ensure you're targeting/working with the correct data/DOM elements
 */

onScreenButtons.forEach((button) => {

    button.addEventListener('click', (event) => {

        game.handleInteraction(event.target);

    })

})

/**
 * @create a event listener on a click event and place it on the dark mode button element in the DOM
 * 
 * @within the handler of the event loop over all the button elements that are displayed on the page and set there class Name 
 * to/add a className of 'darkMode_keyboard' to change the style of the on screen keyboard
 * also 
 * change the header color to white
 * and the background color to a darker color '#333333'
 * and once the button has been clicked and dark mode is active disable the dark mode button
 * 
 * @create a conditional statement that checks if the dark mode buttons inner textContent is 'Dark Mode on'
 *      if condition is met the log 'dark mode is on'
 *      and set the id of the button to 'darkMode_off'
 * 
 * log all variables to ensure you're targeting/working with the correct data/DOM elements
 */

darkModeBtn_on.addEventListener('click', () => {

    onScreenButtons.forEach((button) => {

        button.classList.add('darkMode_Keyboard')
            // button.classList.remove('key')

    })

    headerPHunter.style.color = 'white'
    body.style.backgroundColor = '#333333'

    resetG_btn.id = 'resetG_btn_darkMode'

    darkModeBtn_on.innerHTML = 'Dark Mode on';
    darkModeBtn_on.disabled = true


    if (darkBtnElement.textContent === 'Dark Mode on') {

        console.log('dark mode is on');
        darkModeBtn_on.id = 'darkMode_off';



    }
})

/**
 * @create a event listener on the click event and place it on the reset button element
 * so that if button is clicked then the page will reset itself
 * 
 * @within the handler call the handleInteraction() method  / here its written out as a inline function /  
 * but since you are resetting the game and the game hasn't been 'won' or 'lost' you need to edit the overlay
 *      @overlay equate its innerHTML property it an empty string to reset the overlays inner text, then set the game over message to 
 *      'The game has been reset' and change the start games button inner text content to 'Start A New Game'
 *      
 * log all variables to ensure you're targeting/working with the correct data/DOM elements
 */

resetBtn.addEventListener('click', () => {

    const overlay = document.querySelector('#overlay');
    const gameOverMsg = document.querySelector('#game-over-message');
    const liPlaceholders = document.querySelectorAll('#phrase ul li');
    const keyBoard = document.querySelectorAll('.keyrow button');
    const hearts = document.querySelectorAll('#scoreboard .tries img');
    const liParent = document.querySelector('#phrase ul');

    liPlaceholders.forEach((li) => {

        // 
        li.className = 'hide'

        liParent.removeChild(li);

    })

    keyBoard.forEach((button) => {

        button.disabled = false;
        button.className = ''

        if (darkBtnElement.id === 'darkMode_off') {

            button.className = 'key darkMode_Keyboard'

        }

    })

    hearts.forEach((heart) => {

        // console.log(heart)
        heart.src = 'images/liveHeart.png';
        game.missed = 0;

    })

    overlay.style.display = '';
    overlay.style.backgroundColor = '#235789';
    gameOverMsg.innerHTML = 'The game has been reset'
    startGameBtn.innerHTML = 'Start A New Game'

})

/**
 * @Create a event listener on the keyup event to check for physical keyboard presses
 * 
 * @within the handler loop over all buttons on the on screen keyboard and 
 *      @create a condition if statement to check if the button that has been physically pressed ( event.key ) is === the the textContent of the specific iterated over element 
 * @and
 *      if the button that has been clicked is not disabled ( button.disabled === false )
 *          if the condition is met then call the handleInteraction() method in the game class and pass the the @param of the button that has been pressed 
 * 
 *      @create another if statement to check if the button that has been pressed is disabled and if its true then console.log('The button you pressed has been disabled and this button press has not been registered')
 */

window.addEventListener('keyup', (event) => {

    onScreenButtons.forEach((button) => {

        if (button.textContent === event.key && button.disabled === false) {

            game.handleInteraction(button)

        }

        if (button.disabled) {

            // console.log('The button you pressed has been disabled and this button press has not been registered');

        }

    })

})