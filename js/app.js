/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

const startGameBtn = document.querySelector('#btn__reset');
const onScreenButtons = document.querySelectorAll('#qwerty .keyrow button');
const resetBtn = document.querySelector('#resetG_btn');
const darkModeBtn_on = document.querySelector('#darkMode_on');
const body = document.querySelector('body');
const headerPHunter = document.querySelector('.header')
const darkModeBtn_off = document.querySelector('#darkMode_off');
const darkBtnElement = document.querySelector('#scoreboard .button')

overlay.style.backgroundColor = '#235789';

startGameBtn.addEventListener('click', () => {

    game = new Game();
    game.startGame();

    if (darkBtnElement.id === 'darkMode_off') {

        onScreenButtons.forEach((button) => {

            button.className = 'darkMode_Keyboard'

        })

    }

})

onScreenButtons.forEach((button) => {

    button.addEventListener('click', (event) => {

        game.handleInteraction(event.target);

    })

})

darkModeBtn_on.addEventListener('click', () => {

    onScreenButtons.forEach((button) => {

        button.classList.add('darkMode_Keyboard')
            // button.classList.remove('key')

    })

    headerPHunter.style.color = 'white'
    body.style.backgroundColor = '#333333'

    resetG_btn.id = 'resetG_btn_darkMode'

    darkModeBtn_on.innerHTML = 'Dark Mode on';
    // darkModeBtn_on.disabled = true


    if (darkBtnElement.textContent === 'Dark Mode on') {

        console.log('dark mode is on');
        darkModeBtn_on.id = 'darkMode_off';



    }
})



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