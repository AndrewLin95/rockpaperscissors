const rpsButtons = document.querySelectorAll('button');
let div = document.querySelector('div');
let body = document.querySelector('body');
let p = document.createElement('p');

// Creating constants for rock paper and scissors
const rock = 'rock';
const paper = 'paper';
const scissor = 'scissor';


// Variable to store the type of button that was clicked.
let playerDecision = '';

// Function to randomize and output rock paper or scissors

let computerDecision = () => {
    let optionArray = [rock, paper, scissor];
    let randomNum = optionArray[Math.floor(Math.random()*optionArray.length)];
    return randomNum;
}

// Function to compare the two decisions and displays the a result in a text

let compareDecisions = () => {
    let computerResult = computerDecision();

    increaseCounter();

    const string = 'You played ' + playerDecision + ' against the computer\'s ' + computerResult;

    if (playerDecision == computerResult){
        p.textContent = string + '. You tied!';
        body.appendChild(p);
    } else if ((playerDecision == rock && computerResult == scissor) || (playerDecision == paper && computerResult == rock) || (playerDecision == scissor && computerResult == paper)) {
        increasePlayerScoreFunc();
        p.textContent = string + '. You win!';
        body.appendChild(p);
    } else {
        increaseComputerScoreFunc();
        p.textContent = string + '. You lose!';
        body.appendChild(p);
    }
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


rpsButtons.forEach((button) => {
    button.addEventListener('click', ()=>{
        if (button.id = rock){
            playerDecision = rock;
            compareDecisions();
        } else if (button.id = paper){
            playerDecision = paper;
            compareDecisions();
        } else {
            playerDecision = scissor;
            compareDecisions();
        }
    }); 
});


