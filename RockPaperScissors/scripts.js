const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

function play(playerChoice) {
    const computerChoice = getComputerChoice();

    displayPlayerChoice(playerChoice);
    displayComputerChoice(computerChoice);

    const result = getResult(playerChoice, computerChoice);

    displayResult(result);
    updateScore(result);
}

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function displayPlayerChoice(playerChoice) {
    document.getElementById('player-pick').innerText = playerChoice.toUpperCase();
}

function displayComputerChoice(computerChoice) {
    document.getElementById('computer-pick').innerText = computerChoice.toUpperCase();
}

function getResult(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'tie';
    } else if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
               (playerChoice === 'paper' && computerChoice === 'rock') ||
               (playerChoice === 'scissors' && computerChoice === 'paper')) {
        return 'win';
    } else {
        return 'lose';
    }
}

function displayResult(result) {
    const resultElement = document.getElementById('result');

    switch (result) {
        case 'tie':
            resultElement.innerText = 'IT\'S A TIE';
            resultElement.style.color = 'black';
            break;
        case 'win':
            resultElement.innerText = 'You Win';
            resultElement.style.color = 'green';
            break;
        case 'lose':
            resultElement.innerText = 'You Lose';
            resultElement.style.color = 'red';
            break;
    }
}

function updateScore(result) {
    if (result === 'win') {
        playerScore++;
    } else if (result === 'lose') {
        computerScore++;
   }

    document.getElementById('player-score').innerText = playerScore;
    document.getElementById('computer-score').innerText = computerScore;
}