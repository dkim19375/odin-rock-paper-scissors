let points = 0;
let rounds = 0;

const moves = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    const random = Math.random() * 3;
    if (random < 1) return "Rock";
    if (random < 2) return "Paper";
    return "Scissors";
}

function getResult(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) return "tie";
    const playerI = moves.indexOf(playerSelection);
    const computerI = moves.indexOf(computerSelection);
    if (playerI + 1 === computerI || playerI - 2 === computerI) {
        return "lost";
    }
    return "won";
}

function playRound(playerSelection, computerSelection) {
    document.getElementById('computer-selection-text').textContent = computerSelection;
    const result = getResult(playerSelection, computerSelection);
    setResult(result);
}

function setResult(won) {
    let element = document.getElementById("result");
    if (element == null) {
        element = document.createElement("h2");
        element.id = "result";
        document.body.appendChild(element);
    }
    element.textContent = (won === "won") ? "You Won!" : (won === "tie" ? "Tie!" : "You Lost!")
    if (won === "tie") return;
    const pointCountElement = document.getElementById("point-count");
    const winRateElement = document.getElementById("win-rate");
    rounds++;
    if (won === "won") {
        points++;
    }
    const winRate = Math.round(points / rounds * 100);
    pointCountElement.textContent = `Points: ${points}`;
    winRateElement.textContent = `Win Rate: ${winRate}%`;
}

function onButtonClick() {
    if (points === 5) return;
    if (this.classList.contains("button-selected")) {
        return;
    }
    resetButtons();
    this.classList.add("button-selected");
    playRound(this.textContent, getComputerChoice());
    const currentRound = rounds;
    setTimeout(() => {
        if (currentRound !== rounds) return;
        this.classList.remove("button-selected");
    }, 200);
}

const buttons = Array.from(document.getElementsByClassName("player-selection"));
buttons.forEach((b) => b.addEventListener('click', onButtonClick));

function resetButtons() {
    buttons.forEach((b) => b.classList.remove("button-selected"));
}