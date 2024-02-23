const choices = document.querySelectorAll('.choice');
const userScoreSpan = document.getElementById('user-score');
const computerScoreSpan = document.getElementById('computer-score');
const resultMessage = document.getElementById('result');

let userScore = 0;
let computerScore = 0;


// GAME

// My choice listener with arrow function
choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('data-choice');
        // console.log(userChoice)
        userChoiceHandler(userChoice);
    });
});

// Computer choice
function getComputerChoice() {
    const compChoices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const randomIndex = Math.floor(Math.random() * compChoices.length);
    return compChoices[randomIndex];
}

// Determine winner
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'It\'s draw!';
    } else if (
        (userChoice === 'rock' && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
        (userChoice === 'paper' && (computerChoice === 'rock' || computerChoice === 'spock')) ||
        (userChoice === 'scissors' && (computerChoice === 'paper' || computerChoice === 'lizard')) ||
        (userChoice === 'lizard' && (computerChoice === 'spock' || computerChoice === 'paper')) ||
        (userChoice === 'spock' && (computerChoice === 'rock' || computerChoice === 'scissors'))
    ) {
        return `You win! You chose ${userChoice}, computer chose ${computerChoice}.`;
    } else {
        return `Computer wins! Computer chose ${computerChoice}, you chose ${userChoice}.`;
    }
}

// Update score and result message

function updateScore(userChoice, computerChoice) {
    if (userScore < 5 && computerScore < 5) {
        const result = determineWinner(userChoice, computerChoice);
        if (result.startsWith('You win')) {
            userScore++;
        } else if (result.startsWith('Computer wins')) {
            computerScore++;
        }

        userScoreSpan.textContent = userScore;
        computerScoreSpan.textContent = computerScore;
        resultMessage.textContent = result;

        if (userScore === 5 || computerScore === 5) {
            console.log('end');
            endGame();
        }
    }
}

// Choice handler 
function userChoiceHandler(userChoice) {
    const computerChoice = getComputerChoice();
    updateScore(userChoice, computerChoice);
}

// End game
function endGame() {
    if (userScore > computerScore) {
        resultMessage.textContent = `Game over! You win the game with a score of ${userScore}-${computerScore}. Press Reset button to play again!`;
    } else if (computerScore > userScore) {
        resultMessage.textContent = `Game over! Computer wins the game with a score of ${computerScore}-${userScore}. Press Reset button to play again!`;
    } else {
        resultMessage.textContent = `Game over! It's a draw with a score of ${userScore}-${computerScore}.`;
    }

    choices.forEach(choice => choice.removeEventListener('click', null));
}


// MODALS
// Info modal
const modal = document.getElementById("info-modal");
const infoBtn = document.getElementById("infob");
const span = document.getElementsByClassName("close")[0];

// When the user clicks on info button, open the modal
infoBtn.onclick = function () {
    modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
};

// INSTRUCTION ONLOAD w Timeout
function modalOff() {
    modal.style.display = 'none';
}

window.onload = function onOff() {
    modal.style.display = 'block';
    window.setTimeout(modalOff, 3000);
};




//   Reset modal
const decisionModal = document.getElementById('decision-modal');
const resetIcon = document.getElementById('restartb');
const restartBtn = document.getElementById("restartBtn");
const cancelBtn = document.getElementById('cancel');

// Reset Icon
resetIcon.onclick = function () {
    decisionModal.style.display = "block";
};

// Reset game
restartBtn.onclick = function () {
    userScore = 0;
    computerScore = 0;
    resultMessage.textContent = '';
    userScoreSpan.textContent = '0';
    computerScoreSpan.textContent = '0';
    decisionModal.style.display = "none";
};

// Cancel reset game
cancelBtn.onclick = function () {
    decisionModal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal || event.target == decisionModal) {
        modal.style.display = "none";
        decisionModal.style.display = "none";
    }
};