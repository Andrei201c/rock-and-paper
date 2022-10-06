
function getComputerChoice() {
    let items = [
        "Rock",
        "Paper",
        "Scissors"
    ];
    let item = items[Math.floor(Math.random() * items.length)]
    item = item.toString().toLowerCase();
  return item;  
  }

getComputerChoice();
let playerscore = 0;
let cpuscore = 0;
let playerChoice = prompt("Enter your element: ").toString().toLowerCase();
playerChoice = ' ';
let computerChoice = getComputerChoice();
computerChoice  = ' ';

function playGround() {
  computerChoice
}