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
        difference = options[humanChoice.toLowerCase()] - options[computerChoice];
        if (difference === 0) {
            console.log("Draw! You are a loser!")
        } else if (difference === 2 || difference === -1) {
            console.log("You lose!", computerChoice, "beats", humanChoice.toLowerCase())
            computerScore += 1;
        } else {
            console.log("You win!", humanChoice.toLowerCase(), "beats", computerChoice)
            humanScore += 1;
        }
    }

    let humanScore = 0;
    let computerScore = 0;

    //for (let i = 0; i < 5; i++) {
    //}
    playRound(humanChoice, getComputerChoice());

    console.log("Your score:", humanScore)
    console.log("Computer score:", computerScore)
}


const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");


document.body.appendChild(rockButton);
document.body.appendChild(paperButton);
document.body.appendChild(scissorsButton);


rockButton.addEventListener('click', playGame());
paperButton.addEventListener('click', playGame());
scissorsButton.addEventListener('click', playGame());


rockButton.textContent = 'Rock';
paperButton.textContent = 'Paper';
scissorsButton.textContent = 'Scissors';