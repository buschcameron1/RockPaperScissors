const options = ["rock","paper","scissors"];

function randomSelection(items){
    return items[Math.floor(Math.random()*items.length)];
}

function computerSelect(){
    return computerSelection = randomSelection(options);
}

function playerInput(){
    do{
        selection = prompt("Please select Rock, Paper, or Scissors: ").toLocaleLowerCase();
        if(selection == "rock" || selection == "paper" || selection == "scissors" || selection == "peepee"){
            return selection;
        }
        else{
            alert("Invalid input, please try again");
        }
    }while(1);
}

function game(){
    var compWin = 0;
    var playerWin = 0;
    do{
        computerSelect();
        playerInput();
        if(selection == computerSelection){
            console.log("Tie");
        }
        else if(selection == "peepee"){
            playerWin++;
            console.log("Player chose peepee, peepee always wins")
        }
        else if(selection == "rock"){
            if(computerSelection == "paper"){
                compWin++;
                console.log("Computer Wins");
            }
            else if(computerSelection == "scissors"){
                playerWin++;
                console.log("Player Wins");
            }
        }
        else if(selection == "paper"){
            if(computerSelection == "rock"){
                playerWin++;
                console.log("Player Wins");
            }
            else if(computerSelection == "scissors"){
                compWin++;
                console.log("Computer Wins");
            }
        }
        else if(selection == "scissors"){
            if(computerSelection == "paper"){
                playerWin++;
                console.log("Player Wins")
            }
            else if(computerSelection == "rock"){
                compWin++;
                console.log("Computer Wins");
            }
        }

    }while(compWin < 3 && playerWin < 3);

    if(compWin >= 3){
        alert("Game over, Computer Wins")
    }
    else if(playerWin >= 3){
        alert("Game over, Player Wins")
    }
    else{
        alert("Something broke, no one wins")
    }
}

game();