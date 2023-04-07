function getComputerChoice() {
    const random = Math.random() * 3;
    if (random < 1) return "Rock";
    if (random < 2) return "Paper";
    return "Scissors";
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection !== playerSelection.toLowerCase() || computerSelection !== computerSelection.toLowerCase()) {
        return playRound(playerSelection.toLowerCase(), computerSelection.toLowerCase());
    }
    if (playerSelection === computerSelection) {
        return `Tie! You both picked ${playerSelection[0].toUpperCase()}${playerSelection.substring(1)}`
    }
    switch (playerSelection) {
        case "rock": {
            if (computerSelection === "paper") return "You Lose! Paper beats Rock";
            return "You Win! Rock beats Scissors";
        }
        case "paper": {
            if (computerSelection === "scissors") return "You Lose! Scissors beats Paper";
            return "You Win! Paper beats Rock";
        }
        default: {
            if (computerSelection === "rock") return "You Lose! Rock beats Scissors";
            return "You Win! Scissors beats Paper";
        }
    }
}

function game() {
    console.log("Welcome to Rock Paper Scissors!\n");
    for (let i = 1; i <= 5; i++) {
        const playerSelection = prompt(`Round ${i}. Do you want to pick Rock, Paper, or Scissors?`);
        console.log(playRound(playerSelection, getComputerChoice()));
    }

}

game();