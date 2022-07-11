function computerPlay() {
    randomNumber = Math.floor(Math.random() * 3) + 1;
    if(randomNumber == 1) {
        return "Rock";
    } else if (randomNumber == 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function roundPlay(playerSelection, computerSelection) {
    if (playerSelection == "rock") {
        if (computerSelection == "Rock") {
            return "Draw! Rock cannot beat Rock";
        } else if (computerSelection == "Paper") {
            return "You lose! Paper beats Rock";
        } else {
            return "You win! Rock beats Scissors";
        } 
    } else if (playerSelection == "paper") {
        if (computerSelection == "Rock") {
            return "You win! Paper beats Rock";
        } else if (computerSelection == "Paper") {
            return "Draw! Paper cannot beat Paper";
        } else {
            return "You lose! Scissors beats Paper";
        } 
    } else {
        if (computerSelection == "Rock") {
            return "You lose! Rock beats Scissors";
        } else if (computerSelection == "Paper") {
            return "You win! Scissors beat Paper";
        } else {
            return "Draw! Scissors cannot beats Scissors";
        } 
    }
}


let computerSelection = computerPlay();
game();

function game() {
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Rock, Paper or Scissors ?").toLowerCase();
        let computerSelection = computerPlay();
        console.log(roundPlay(playerSelection, computerSelection));
    }
}