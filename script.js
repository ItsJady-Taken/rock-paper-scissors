
// Create a list of options 
const options = ["rock", "paper", "scissors"]

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
        return("Result: Tie, no one win.");
    }
    // if player choice rock
    else if(playerSelection == 'rock'){
        if(computerSelection == 'paper') {
            return("Result: You lose, paper beats rock.");   
        }
        else if(computerSelection == 'scissors'){
            return("Result: You win, rock beats scissors.");   
        }
    }
    // if player choice paper
    else if(playerSelection == 'paper'){
        if(computerSelection == 'scissors') {
            return("Result: You lose, scissors beats paper.")
            
        }
        else if(computerSelection == 'rock'){
            return("Result: You win, paper beats rock.")      
        }
    }
    // if player choice scissors
    else if(playerSelection == 'scissors'){
        if(computerSelection == 'paper') { 
            return("Result: You win, scissors beats paper.")             
        }
        else if(computerSelection == 'rock'){  
            return("Result: You lose, rock beats scissors.")    
        }
       
    }  
    // result

    return playerSelection, computerSelection;
}

// play five round of this game 
function playGame() {
   for(let i=0; i<5; i++) {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    console.log(`Player: ${playerSelection}`);
    console.log(`Computer: ${computerSelection}`);
    console.log(playRound(playerSelection, computerSelection));
   } 
    
}
playGame()
//const playerSelection = prompt("rock paper, scissors:");
//const computerSelection = getComputerChoice();

//console.log(playGame());
//console.log("player: " + playerSelection)


