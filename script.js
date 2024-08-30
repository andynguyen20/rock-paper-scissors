function getComputerChoice() {
    let number = Math.random();
    if (number < 0.3333) {
    return "rock";
    } else if (0.3333 < number && number < 0.6666) {
    return "paper";
    } else {
        return "scissors";
    }
}


function getHumanChoice() {
    while(true) {
    const status = prompt("rock, paper, scissors").toLowerCase();
    if (status === "rock" || status === "paper" || status === "scissors") {
        return status;
    } else {
     alert("not a valid option, please try again");
    }
}
}


function playGame () {
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            alert("Tie, nobody gets a point");
        } else if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper") {
            alert("You win!! +1 point");
            humanScore++;
        } else {
            alert("You lost. +1 point for Computer");
            computerScore++;
        }
}

    while (humanScore < 5 && computerScore < 5) {
        const humanChoice = getHumanChoice(); 
        const computerChoice = getComputerChoice(); 
    
        playRound(humanChoice, computerChoice); 
    
        console.log(`Current Score - Human: ${humanScore}, Computer: ${computerScore}`);
    }

    if (humanScore === 5) {
        console.log("Congratulations! You won the game!");
    } else if (computerScore === 5) {
        console.log("Computer wins the game! Better luck next time.");
    }
}

playGame();