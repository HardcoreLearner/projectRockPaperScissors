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
    let scoreDiv = document.querySelector('.score');
    let score = parseInt(document.querySelector('.score').textContent);
    let scoreMachineDiv = document.querySelector('.scoreMachine');
    let scoreMachine = parseInt(document.querySelector('.scoreMachine').textContent);
    if (playerSelection == "rock") {
        if (computerSelection == "Rock") {
            return "Draw! Rock cannot beat Rock";
        } else if (computerSelection == "Paper") {
            scoreMachine += 1;
            scoreMachineDiv.textContent = scoreMachine;
            if (scoreMachine == 5) {
                win("computer");
            }
            return "You lose! Paper beats Rock";
        } else {
            score += 1;
            scoreDiv.textContent = score;
            if (score == 5) {
                win("player");
            }
            return "You win! Rock beats Scissors";
        } 
    } else if (playerSelection == "paper") {
        if (computerSelection == "Rock") {
            score += 1;
            scoreDiv.textContent = score;
            if (score == 5) {
                win("player");
            }
            return "You win! Paper beats Rock";
        } else if (computerSelection == "Paper") {
            return "Draw! Paper cannot beat Paper";
        } else {
            scoreMachine += 1;
            scoreMachineDiv.textContent = scoreMachine;
            if (scoreMachine == 5) {
                win("computer");
            }
            return "You lose! Scissors beats Paper";
        } 
    } else {
        if (computerSelection == "Rock") {
            scoreMachine += 1;
            scoreMachineDiv.textContent = scoreMachine;
            if (scoreMachine == 5) {
                win("computer");
            }
            return "You lose! Rock beats Scissors";
        } else if (computerSelection == "Paper") {
            score += 1;
            scoreDiv.textContent = score;
            if (score == 5) {
                win("player");
            }
            return "You win! Scissors beat Paper";
        } else {
            return "Draw! Scissors cannot beats Scissors";
        } 
    }
}

function win(winner) {
    alert("The "+ winner + " wins the game!");
    let scoreMachineDiv = document.querySelector('.scoreMachine');
    let scoreDiv = document.querySelector('.score');
    scoreDiv.textContent = "0";
    scoreMachineDiv.textContent = "0";
}


function game(playerSelection) {
    let computerSelection = computerPlay();
    console.log(roundPlay(playerSelection, computerSelection));
}

const buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener("click", function(e) {
    game(this.className);
} ));
