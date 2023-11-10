// FUNCTION getComputerChoice
function getComputerChoice() {
//     DECLARE string computerChoice
    let computerChoice;
//     DECLARE integer randomNumber
    let randomNumber;
//     SET randomNumber random value 1, 2, or 3
    randomNumber = Math.floor(Math.random() * 3) + 1;
//     IF randomNumber is 1:
//         SET computerChoice equal to "Rock"
    if (randomNumber == 1) {
        computerChoice = 'rock';
    }
//     ELIF randomNumber is 2:
//         SET computerChoice equal to "Paper"
    else if (randomNumber == 2) {
        computerChoice = 'paper';
    }
//     ELSE:
//         SET computerChoice equal to "Scissors"
    else {
        computerChoice = 'scissors';
    }

    //     RETURN computerChoice
    return computerChoice;
    //console.log(computerChoice);

// END FUNCTION

}

// FUNCTION playRound(playerSelection, computerSelection)
function playRound(playerSelection, computerSelection) {

//     FORMAT playerSelection to lowercase and trim
    playerSelection = playerSelection.toLowerCase().trim();
//     DECLARE string winLose
    let winLose;
    let result;
//     IF playerSelection equal to computerSelection
//         RETURN "It's a Tie!"
//     ELSE
//         IF playerSelection equal to rock
//             IF computerSelection equal to scissors
//                 SET winLose equal to "Win"
//             IF computerSelection equal to paper
//                 SET winLose equal to "Lose"
//         IF playerSelection equal to paper
//             IF computerSelection equal to scissors
//                 SET winLose equal to "Lose"
//             IF computerSelection equal to rock
//                 SET winLose equal to "Win"
//         IF playerSelection equal to scissors
//             IF computerSelection equal to rock
//                 SET winLose equal to "Lose"
//             IF computerSelection equal to paper
//                 SET winLose equal to "Win"
//         ELSE
//             RETURN You must only enter rock, paper, or scissors! Please try again. 
    if (playerSelection === computerSelection) {
        return "It's a Tie!";
    }
    else {
        if (playerSelection == "rock") {
            if (computerSelection == "scissors") {
                winLose = "Win";
            }
            if (computerSelection == "paper") {
                winLose = "Lose";
            }
        }
        else if (playerSelection == "paper") {
            if (computerSelection == "rock") {
                winLose = "Win";
            }
            if (computerSelection == "scissors") {
                winLose = "Lose";
            }
        }
        else if (playerSelection == "scissors") {
            if (computerSelection == "paper") {
                winLose = "Win";
            }
            if (computerSelection == "rock") {
                winLose = "Lose";
            }
        }
        else {
            return "You must only enter rock, paper, or scissors! Please try again.";
        }
    }

//         IF winLose equal to "Win"
//             RETURN You winLose! playerSelection beats computerSelection
//         ELSE
//             RETURN You winLose! computerSelection beats playerSelection
    if (winLose == "Win") {
        return `You ${winLose}! ${playerSelection} beats ${computerSelection}`;
    }
    else {
        return `You ${winLose}! ${computerSelection} beats ${playerSelection}`;
    }






// END FUNCTION
}

// Play 5 games of rock paper scissors, print the results to console
function game() {
    for (i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, paper, or scissors?");
        console.log(playRound(playerSelection, getComputerChoice()));
    }
}

game();