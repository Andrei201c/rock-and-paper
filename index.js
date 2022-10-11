const choices = ["rock", "paper", "scissors"];
const winners = [];

function game(){
    for(let i = 1; i <= 5; i++) {
        playRound(i);
    }
    document.querySelector("button").textContent = "Play new game";
    logWins();
}

function playerChoice(){
    let input = prompt("Type Rock, Paper or Scissors: ");
    while (input == null) {
        input = prompt("Type only one of this choices \"Rock, Paper or Scissors\"");
    }
    input = input.toLowerCase();
    let check = validateInput(input);

    while (check == false) {
        input = prompt("Type only one of this choices \"Rock, Paper or Scissors\"");
        while(input == null) {
            input = prompt("Type only one of this choices \"Rock, Paper or Scissors\"");
        }
        input = input.toLowerCase();
        check = validateInput(input);
    }
    return input;
} // finished


function validateInput(choice) {
    return choices.includes(choice);
} // finished

function cpuChoice(){
      return choices[Math.floor(Math.random() * choices.length)];
} // finished

function playRound(round){
    const playerSelection = playerChoice();
    const cpuSelection = cpuChoice();
    const winner = checkWinner(playerSelection, cpuSelection);
    winners.push(winner);
    logRound(playerSelection, cpuSelection, winner, round);
}

function checkWinner(choiceP, choiceC){
    if(choiceP === choiceC) {
        return "Tie!"
    } else if (
        (choiceC === "rock" && choiceP == "scissors") ||
        (choiceC === "paper" && choiceP == "rock") ||
        (choiceC === "scissors" && choiceP == "paper") ){
        return "Computer"; 
    } else {
        return "Player";
    }
}

function logWins() {
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    let ties = winners.filter((item) => item == "Tie!").length;
    console.log("Results:");
    console.log("Player Wins:", playerWins);
    console.log("Computer Wins:", computerWins);
    console.log("Ties", ties);
}

function logRound(playerSelection, cpuSelection, winner, round) {
    console.log("Round:", round);
    console.log("Player chose:", playerSelection);
    console.log("Computer chose:", cpuSelection);
    console.log(winner, "Won!");
    console.log("-----Another game-----");
}

