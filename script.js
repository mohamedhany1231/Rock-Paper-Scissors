
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
    console.log(playerSelection ," vs ", computerSelection);
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


//   buttons event listener

let buttonsDiv = document.querySelector(".buttons");
 buttons = buttonsDiv.querySelectorAll("button");
 buttons = Array.from(buttons);
 buttons.forEach(btn => {
     let value = btn.getAttribute("value")
    btn.addEventListener("click" , () => { 
        console.log(playRound(value , getComputerChoice()))
       
    } )
});


