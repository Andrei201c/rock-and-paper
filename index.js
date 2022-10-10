const choices = ["rock", "paper", "scissors"];
const winners = [];

function game () {
    //how many rounds paly game
    for (i = 1; i <= 5; i++) {
        playRound(i);
    }
}

function playRound(round) {
    //decides who is winner
   const playerSelection = playerChoice();
   const cpuSelection = cpuChoice();
   const winner = choseWinner(playerSelection, cpuSelection);
  winners.push(winner);
  logWins();
}

function playerChoice() {
    //player choice 
    let input = prompt("Rock, Paper or scissors: ");
    
    while (input == null) {
        input = prompt("Type one of Rock, Paper or Scissors:")
    }
    
    input = input.toLowerCase();
    
    let check = validateInput(input);
    
    while (check == false) {
      input =  prompt("Type Rock, Paper or Scissors");
      while(input == null) {
        input = prompt("Type Rock, Paper or Scissors:");
      }
      input = input.toLowerCase();
      check = validateInput(input);
    }
    return input;
}

function validateInput(choice) {
    return choices.includes(choice);
}


function cpuChoice () {
    //cpu selection
    return choices[Math.floor(Math.random() * choices.lenght)];
}


function choseWinner(choiceP, choiceC){
    if(choiceP == choiceC){
        return "Tie!";
    } else if ( (choiceP === "rock" && choiceC == "scssors") ||
                (choiceP === "scissors" && choiceC == "paper") ||
                (choiceC === "paper" && choiceC == "rock") ) {
                    return "You win!" + choiceP + " beats " + choiceC; 
                } else {
                    return "You lose!" + choiceC + " beats " + choiceP;
                }
}

function logWins() {
    console.log(winners);
}