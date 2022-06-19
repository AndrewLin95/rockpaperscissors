let input = document.querySelector('select');
let play = document.querySelector('#playButton');
let div = document.querySelector('div');
let body = document.querySelector('body');
let p = document.createElement('p');
let playAgainButton = document.createElement('button');

// Function to store the player input and clear the selection box

let playerDecision = () => {
    const playerAction = input.value;
    input.value = '';
    return playerAction;
}

// Function to randomize and output rock paper or scissors

let computerDecision = () => {
    let randomNum = Math.floor(Math.random()*3);
    if (randomNum === 0){
        return 'Rock';
    } else if (randomNum === 1){
        return 'Paper';
    } else{
        return 'Scissors';
    }
}

// Empty selection check

let chooseValueFunc = () => {

    if (input.value == ''){
        p.textContent = 'Error - choose one!';
        body.appendChild(p);
    } else {
        compareDecisions();
    }
}

// Function to compare the two decisions and displays the a result in a text

let compareDecisions = () => {
    let playerResult = playerDecision();
    let computerResult = computerDecision();

    increaseCounter();

    const string = 'You played ' + playerResult + ' against the computer\'s ' + computerResult;

    if (playerResult == computerResult){
        p.textContent = string + '. You tied!';
        body.appendChild(p);
        generatePlayAgain();
    } else if ((playerResult == 'Rock' && computerResult == 'Scissors') || (playerResult == 'Paper' && computerResult == 'Rock') || (playerResult == 'Scissors' && computerResult == 'Paper')) {
        increasePlayerScoreFunc();
        p.textContent = string + '. You win!';
        body.appendChild(p);
        generatePlayAgain();
    } else {
        increaseComputerScoreFunc();
        p.textContent = string + '. You lose!';
        body.appendChild(p);
        generatePlayAgain();
    }
}

// Changes the Play! button to Play Again! and clears the line.

let generatePlayAgain = () => {
    play.remove();
    playAgainButton.textContent = 'Play Again!';
    div.appendChild(playAgainButton);
}


// Counters for the round, player score and computer score
let roundLabel = document.querySelector('.roundLabel');
let roundCount = 0;

let increaseCounter = () => {
    roundCount ++;
    roundLabel.textContent = roundCount;
}

let playerScoreLabel = document.querySelector('.playerScore')
let playerScore = 0;

let increasePlayerScoreFunc = () => {
    playerScore ++;
    playerScoreLabel.textContent = playerScore;
}

let computerScoreLabel = document.querySelector('.computerScore')
let computerScore = 0;

let increaseComputerScoreFunc = () => {
    computerScore ++;
    computerScoreLabel.textContent = computerScore;
}

play.addEventListener('click', chooseValueFunc);
playAgainButton.addEventListener('click', chooseValueFunc);
body.addEventListener('keypress', function(event){
    if (event.key === 'Enter'){
        chooseValueFunc();
        event.preventDefault();
    } else {
        return;
    }
})

