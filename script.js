
function getComputerChoice () {
    let randomNumber  = Math.random();
    if (randomNumber <= 0.33) {
        return 'Rock';
    } else if (randomNumber <= 0.66) {
        return 'Paper';
    }
    return'Scissors';
}

 let playRound = ( playerSelection,computerSelection) => {
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1)
    // check for draw
    if (playerSelection == computerSelection) return 'tie!';
    //  check if player win
    if 
    (
         (playerSelection =='Rock' && computerSelection== 'Scissors' ) ||
         (playerSelection == 'Scissors' && computerSelection== 'Paper' ) ||
         (playerSelection =='Paper' && computerSelection== 'Rock' )         
    ) 
        { 
            return  `You Win! ${playerSelection} beats ${computerSelection}`
        }
    else 
    {
        return  `You Lose! ${computerSelection} beats ${playerSelection}`
    }
 }
 
 function game () {
    let playerSelection = prompt("Choose (Rock, paper, Scissors)" , "Rock")
 
    // validate user inpue
    if (playerSelection.toUpperCase() != "ROCK" &&
        playerSelection.toUpperCase() != "PAPER" && 
        playerSelection.toUpperCase() != "SCISSORS"  
        )
    {
        alert("Wrong input, Value has been set to Rock");
    }
    let computerSelection =getComputerChoice();
     console.log(playRound(playerSelection, computerSelection));
 }

 game();
 game();
 game();
 game();
 game();