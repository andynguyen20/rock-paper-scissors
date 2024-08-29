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

function getHumanChoice(input) {
    prompt("Rock, Paper, Scissors");
}
let input;
getHumanChoice(input);