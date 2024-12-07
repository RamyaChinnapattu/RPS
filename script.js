const userScoreElement = document.getElementById('users');
const computerScoreElement = document.getElementById('coms');
const messageElement = document.getElementById('mess');
const choices = document.querySelectorAll('.ch');


let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'Paper', 'scissor'];
    const randomIndex = Math.floor(Math.random() *3);
    return choices[randomIndex];
}
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) 
        {
        return 'tie';
        }
    if (
        (userChoice === 'rock' && computerChoice === 'scissor') ||
        (userChoice === 'Paper' && computerChoice === 'rock') ||
        (userChoice === 'scissor' && computerChoice === 'Paper')
    ) 
    {
        return 'win';
    }

    return 'lose';
}
 choices.forEach(choice => {
    choice.addEventListener('click', function() {
        const userChoice = this.id;
        const computerChoice = getComputerChoice();
        const result = determineWinner(userChoice, computerChoice);
        
        if (result === 'win') {
            userScore++;
            messageElement.textContent = ` You win!`;
            messageElement.style.backgroundColor = 'green';
            messageElement.style.borderRadius='50px';
            
        } else if (result === 'lose') {
            computerScore++;
            messageElement.textContent = ` You lose!`;
           messageElement.style.backgroundColor = 'red';
            messageElement.style.color = 'white'
            messageElement.style.borderRadius='50px';
        } else {
            messageElement.textContent = `It's a tie!`;
            messageElement.style.backgroundColor = ''; 
            messageElement.style.color = ''; 
            messageElement.style.borderRadius='50px';
        }

        userScoreElement.textContent = userScore;
        computerScoreElement.textContent = computerScore;
    });
});