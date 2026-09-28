function getComputerChoice(){
    randomValue = Math.random()
    if (randomValue < 1/3) {
        return "rock"
    }
    else if (randomValue < 2/3){
        return "scissors"
    }
    else {
        return "paper"
    }
}

function playGame(humanChoice){
    function playRound(humanChoice, computerChoice){
        options = {"rock":1, "paper":2, "scissors":3};
        console.log("User: ", humanChoice)
        console.log("computer: ", computerChoice)
        difference = options[humanChoice] - options[computerChoice];
        if (difference === 0) {
            roundResult.innerHTML = "Draw! You are a loser!";
        } else if (difference === 2 || difference === -1) {
            roundResult.innerHTML = `You lose! ${computerChoice} beats ${humanChoice}`;
            computerScore += 1;
            computerScoreDisplay.innerHTML = `Computer score: ${computerScore}`
        } else {
            roundResult.innerHTML = `You win! ${humanChoice} beats ${computerChoice}`;
            humanScore += 1;
            humanScoreDisplay.innerHTML = `Human score: ${humanScore}`
        }
    }

    playRound(humanChoice, getComputerChoice());
    if (humanScore === 5) {
        winner.innerHTML = "You won!"
    } else if (computerScore === 5) {
        winner.innerHTML = "Computer won!"
    }
}

let humanScore = 0;
let computerScore = 0;

const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");

document.body.appendChild(rockButton);
document.body.appendChild(paperButton);
document.body.appendChild(scissorsButton);

rockButton.textContent = 'Rock';
paperButton.textContent = 'Paper';
scissorsButton.textContent = 'Scissors';

rockButton.addEventListener('click', function(){
    playGame("rock");
});

paperButton.addEventListener('click', function(){
    playGame("paper");
});

scissorsButton.addEventListener('click', function(){
    playGame("scissors");
});

const display = document.createElement("div");
document.body.appendChild(display);

const humanScoreDisplay = document.createElement("div");
humanScoreDisplay.innerHTML = "Your score: 0"
display.appendChild(humanScoreDisplay);

const computerScoreDisplay = document.createElement("div");
computerScoreDisplay.innerHTML = "Computer score: 0"
display.appendChild(computerScoreDisplay);

const roundResult = document.createElement("div");
display.appendChild(roundResult);

const winner = document.createElement("div");
display.appendChild(winner);