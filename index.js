
function getComputerChoice() {
    let items = [
        "Rock",
        "Paper",
        "Scissors"
    ];
    let item = items[Math.floor(Math.random() * items.length)]
    item = item.toLowerCase();
      return item;
}

let answerOne;
let answerTwo;
let playerChoice = prompt("Input one of Rock, scissors or Paper: ").toString().toLowerCase();
const computerChoice = getComputerChoice();

function playGround(playerChoice, computerChoice) {
     
    if ( playerChoice === computerChoice) {
    console.log("tied");
   } else if( (computerChoice == "scissors" &&  playerChoice == "rock" ) || 
              (computerChoice == "rock" && playerChoice == "paper") ||
              (computerChoice == "paper" && playerChoice == "scissors")){
    answerOne = "You win! " + playerChoice + " beat " + computerChoice + "!";
   return answerOne;
     
   } else {
     answerTwo = "You lose! " + computerChoice + " beat " + playerChoice + "!";
     return answerTwo;
   }
}
 
function game() {
   for (i = 0; i < 5; i++){
    playGround(playerChoice, computerChoice);
   }
}



   

console.log(playGround(playerChoice, computerChoice));
