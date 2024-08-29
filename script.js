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
let computerChoice = getComputerChoice();
console.log(computerChoice);

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
let humanChoice = getHumanChoice();
console.log(humanChoice);

humanScore = 0;
computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        alert ("Tie!! No one gets a point");
    } else if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper") {
        alert ("You win. +1 point.");
        humanScore += 1;
    } else 
        alert ("You lose. +1 point for computer.")
        computerScore += 1;
}

let outcome = playRound(humanChoice, computerChoice);
