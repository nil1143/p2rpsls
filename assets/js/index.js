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
        const userChoice = choice.getAttribute('data-choice')
        // console.log(userChoice)
   
        userChoiceHandler(userChoice) 
    })
})

// Computer choice
function getComputerChoice() {
    const compChoices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const randomIndex = Math.floor(Math.random() * compChoices.length);
    return compChoices[randomIndex]
}

const computerChoice = getComputerChoice();

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
        return `You win! You chose ${userChoice}, computer chose ${computerChoice}.`
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
            console.log('end')
        }
    }
}

// Choice handler 
function userChoiceHandler(userChoice) {
    const computerChoice = getComputerChoice();
    updateScore(userChoice, computerChoice);
}