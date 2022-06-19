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

// Function to compare the two decisions and displays the a result in a text

let compareDecisions = () => {
    let playerResult = playerDecision();
    let computerResult = computerDecision();

    const string = 'You played ' + playerResult + ' against the computers ' + computerResult;

    if (playerResult == computerResult){
        p.textContent = string + '. You tied!';
        body.appendChild(p);
        generatePlayAgain();
    } else if ((playerResult == 'Rock' && computerResult == 'Scissors') || (playerResult == 'Paper' && computerResult == 'Rock') || (playerResult == 'Scissors' && computerResult == 'Paper')) {
        p.textContent = string + '. You win!';
        body.appendChild(p);
        generatePlayAgain();
    } else {
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


play.addEventListener('click', compareDecisions);
playAgainButton.addEventListener('click', compareDecisions);



// Output: you played __input__ against the computers __computerAction_. You win! / You Lose!/ You tied!