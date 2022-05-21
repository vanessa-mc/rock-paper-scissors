
/* get input from user */
function playerChoice () {
    let input = prompt('Choose rock, paper, or scissors.');
    while (input == null) {
        input = prompt('Choose rock, paper, or scissors.')
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false) {
        input = prompt('Choose rock, paper, or scissors.');
        while (input == null) {
            input = prompt('Choose rock, paper, or scissors.');
        }
        input = input.toLowerCase();
        check = validateInput(input);
    }
    return input;
}

function validateInput(choice) {
    if (choices.includes(choice)) {
        return true;
    } else {
        return false;
    }
}

/* to generate random plays by computer */
const options = ['rock', 'paper', 'scissors'];
const winners = [];

function computerPlay(options) {
    return options[Math.floor(Math.random() * options.length)];
}

function checkWinner(player, computer) {
    if (player === computer) {
        return "Tie";
    } else if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return 'Player';
    } else {
        return 'Computer';
    }
}



function playRound(round) {
    const playerSelection = playerChoice();
    const computerSelection = computerPlay();
    const winner = checkWinner(playerSelection, computerSelection); 
    winners.push(winner);
    logRound(playerSelection, computer, winner, round)
 }



function game() {
    for (let i = 1; i <= 5; i++) {
        playRound(i);
    } 
    logWins();
}
function logWins() {
    let playerWins = winners.filter((item) => item == 'Player').length;
    let computerWins = winners.filter((item) => item == 'Computer').length;
    let ties = winners.filter((item) => item == 'Tie').length;
    console.log('Results:');
    console.log('Player Wins:', playerWins);
    console.log('Computer Wins:', computerWins);
    console.log('Ties:', ties);
}

function logRound(playerChoice, computerChoice, winner, round) {
    console.log('Round:', round);
    console.log('Player Chose:', playerChoice);
    console.log('Computer Chose:', computerChoice);
    console.log(winner, 'Won the Round');
}