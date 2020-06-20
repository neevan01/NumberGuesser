let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget(){
    return Math.floor(Math.random()*10);
}

function compareGuesses(humGuess,comGuess,target){
    let result=Math.min(Math.abs(humGuess-target),Math.abs(comGuess-target));
    return Math.abs(humGuess-target)==result?true:false;
}

function updateScore(winner){
    winner=='human'?humanScore++:computerScore++;
}

function advanceRound(){
    currentRoundNumber++;
}