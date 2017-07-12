var playerChoice = "Rock"
var compChoices = ["Rock", "Paper", "Scissors"];
var compChoice = compChoices[Math.floor(Math.random()*3)];
//Tie
if (compChoice == playerChoice) {
    console.log("It's a tie");
    //Computer = Paper and Player = Rock
    } else if (compChoice == "Paper" && playerChoice == "Rock") {
    console.log("The computer wins.");
        //Computer = Scissors and Player = paper
        } else if (compChoice == "Scissors" && playerChoice == "Paper") {
        console.log("The computer wins");
        // Computer = Rock and Player = Scissors
            } else if (compChoice == "Rock" && playerChoice == "Scissors") {
                console.log("The computer wins");
                //Computer = Scissors and Player = paper
                } else if (compChoice == "Scissors" && playerChoice == "Rock") {
                console.log("The player wins.");
        
                    }