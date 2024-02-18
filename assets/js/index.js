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
        console.log(userChoice)
    })
})

// Computer choice
function getComputerChoice() {
    const compChoices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const randomIndex = Math.floor(Math.random() * compChoices.length);
    return compChoices[randomIndex]
}
console.log(getComputerChoice())