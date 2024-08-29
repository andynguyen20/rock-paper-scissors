function getComputerChoice(initialNumber) {
    let number = Math.random(initialNumber);
    if (number < 0.3333) {
        let choice = "rock";
        console.log(choice);
    } else if (0.3333 < number && number < 0.6666) {
        let choice = "paper";
        console.log(choice);
    } else {
        let choice = "scissors";
        console.log(choice);
    }
}
let number = 10;
getComputerChoice(number);

function getHumanChoice() {

    while(true) {
    const status = prompt("rock, paper, scissors");
    if (status === "rock" || status === "paper" || status === "scissors") {
        return console.log(status);
    } else {
     alert("not a valid option, please try again");
    }
}
}
getHumanChoice();

humanScore = 0;
computerScore = 0;