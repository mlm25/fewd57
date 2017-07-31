// Create a variable humanScore. Give it a value of the number 0.
// Create a variable computerScore. Give it a value of the number 0.

// Create a function play. It should accept two parameters: humanPlay and computerPlay.
// Inside the function:

  // Log "You played {humanPlay}. The bot played {computerPlay}" to the console.
  // For example: "You played rock. The bot played scissors."
  var humanScore = 0;
  computerScore = 0;

function play (humanPlay,computerPlay) {
  if (humanPlay===computerPlay){
      console.log("You tied :/");
  }
  else if (humanPlay>='paper' && computerPlay>='rock'||humanPlay>='rock' && computerPlay>="scissors" || humanPlay>='scissors' && computerPlay>='paper'){
      console.log("You win! :)");
      humanScore += 1;
  }
  else {
    console.log("You lose! :(");
    computerScore += 1;
  }
      console.log("You have " + humanScore + "points");
      console.log("The bot has " + computerScore + "points");
}

play('rock', 'rock');
play('paper', 'rock');
play('scissors', 'rock');
play('rock', 'paper');
play('paper', 'paper');
play('scissors', 'paper');

// BONUS:
// Create a "best of 3" version



// SUPER CHALLENGE:
// Google and implement a random choice for the computer each time.
