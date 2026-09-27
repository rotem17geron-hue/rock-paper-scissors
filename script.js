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

function getHumanChoice(){
    return(prompt("rock/paper/scissors"))
}



function playGame(){
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

    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    
    console.log("Your score:", humanScore)
    console.log("Computer score:", computerScore)
}

playGame()