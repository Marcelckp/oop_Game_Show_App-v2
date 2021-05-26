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

const resetBtn = document.querySelector('#resetG_btn');
const darkModeBtn_on = document.querySelector('#darkMode_on');
const body = document.querySelector('body');
const headerPHunter = document.querySelector('.header')
const darkModeBtn_off = document.querySelector('#darkMode_off');

const randomPhrase = game.getRandomPhrase();

let phrase = new Phrase(randomPhrase);

overlay.style.backgroundColor = '#235789';

startGameBtn.addEventListener('click', () => {

    beginGame();

})

onScreenButtons.forEach((button) => {

    button.addEventListener('click', () => {

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
    darkModeBtn_on.id = 'darkMode_off';
    darkModeBtn_on.disabled = true

})


resetBtn.addEventListener('click', () => {

    const overlay = document.querySelector('#overlay');
    const gameOverMsg = document.querySelector('#game-over-message')
    const liPlaceholders = document.querySelectorAll('#phrase ul li');
    const keyBoard = document.querySelectorAll('.keyrow button')
    const hearts = document.querySelectorAll('#scoreboard .tries img')

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
        game.missed = 0;

    })

    overlay.style.display = '';
    overlay.style.backgroundColor = '#235789';
    gameOverMsg.innerHTML = 'The game has been reset'
    startGameBtn.innerHTML = 'Start A New Game'

})

// window.addEventListener('keyup', () => {

//     console.log(event);

//     let checkTrueOrFalse = phrase.checkLetter(event.target.textContent);

//     if (checkTrueOrFalse === false) {

//         game.removeLife();
//         // button.disabled = true;
//         event.className = 'wrong'

//     }

//     if (checkTrueOrFalse === true) {

//         // button.disabled = true;
//         event.key.className = 'chosen'
//         phrase.showMatchedLetter(event.target.textContent);
//         game.checkForWin();
//         game.gameOver();

//     }

//     game.resetGame();

// })