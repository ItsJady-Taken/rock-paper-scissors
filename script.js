
// Create a list of options 
const options = ["rock", "paper", "scissors"]

// Track the computer and your scores
let playerScore = 0, computerScore = 0;

// Get computer to choose randomly
function getComputerChoice() {
    const computerChoice = options[Math.floor(Math.random() * options.length)];
    return computerChoice;
}   

// Get player choice if it valid and case sensitive
function getPlayerChoice() {
    let is_valid = false;
    while(is_valid == false) {
        const playerChoice = prompt("rock paper or scissors:");
        const allLowerCase = playerChoice.toLowerCase();
        if(playerChoice == null) {
            continue;
        }
        if(options.includes(allLowerCase)) {
            is_valid = true;   
            return allLowerCase;
        }
        
    }
    
}


function playRound(playerSelection, computerSelection) {  
    // tie if have the same result
    if(playerSelection === computerSelection) {
        return("Round: Tie, no one win.");
    }
    // if player choice rock
    else if(playerSelection == 'rock'){
        if(computerSelection == 'paper') {
            computerScore++;
            return("Round: You lose, paper beats rock.");   
        }
        else if(computerSelection == 'scissors'){
            playerScore++;
            return("Round: You win, rock beats scissors.");   
        }
        return playerScore, computerScore;
    }
    // if player choice paper
    else if(playerSelection == 'paper'){
        if(computerSelection == 'scissors') {
            computerScore++;
            return("Round: You lose, scissors beats paper.")
            
        }
        else if(computerSelection == 'rock'){
            playerScore++;
            return("Round: You win, paper beats rock.")      
        }
        return playerScore, computerScore;
    }
    // if player choice scissors
    else if(playerSelection == 'scissors'){
        if(computerSelection == 'paper') { 
            playerScore++;
            return("Round: You win, scissors beats paper.")             
        }
        else if(computerSelection == 'rock'){  
            computerScore++;
            return("Round: You lose, rock beats scissors.")    
        }
        return playerScore, computerScore;
    }  
    return playerSelection, computerSelection;
}

// play five round of the game 
function playGame() {
   for(let i=0; i<5; i++) {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    console.log(`Player: ${playerSelection}`);
    console.log(`Computer: ${computerSelection}`);
    console.log(playRound(playerSelection, computerSelection));
   }  
 
   console.log("GAME OVER")
   console.log(`Player: ${playerScore} / computer: ${computerScore}`);
   if(playerScore > computerScore) {
    console.log("Congratulation! YOU WIN!");
   }
    if(playerScore < computerScore) {
    console.log("Too Bad! YOU LOSE!");
   }
   else {
    console.log("It's a TIE");
   }    
}
playGame()


