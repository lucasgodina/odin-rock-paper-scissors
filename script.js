let humanScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('button');
const resultDisplay = document.querySelector('#result');

function getComputerChoice() {
	let randomNumber = Math.floor(Math.random() * 3);
	switch (randomNumber) {
		case 0:
			return 'rock';
		case 1:
			return 'paper';
		case 2:
			return 'scissors';
	}
}

function playRound(computerChoice, humanChoice) {
	if (computerChoice === humanChoice) {
		return "It's a tie!";
	} else if (computerChoice === 'rock' && humanChoice === 'scissors') {
		computerScore++;
		return 'Computer wins!';
	} else if (computerChoice === 'paper' && humanChoice === 'rock') {
		computerScore++;
		return 'Computer wins!';
	} else if (computerChoice === 'scissors' && humanChoice === 'paper') {
		computerScore++;
		return 'Computer wins!';
	} else {
		humanScore++;
		return 'Human wins!';
	}
}

function removeEventListeners(buttons) {
	buttons.forEach((button) => {
		button.removeEventListener('click', handleClick);
	});
}

function handleClick(event) {
	const humanChoice = event.target.id;
	const computerChoice = getComputerChoice();
	console.log('Computer choice: ' + computerChoice);
	console.log('Human choice: ' + humanChoice);
	console.log(playRound(computerChoice, humanChoice));

	console.log('Human score: ' + humanScore);
	console.log('Computer score: ' + computerScore);
	resultDisplay.textContent = `Human: ${humanScore} Computer: ${computerScore}`;

	if (humanScore === 5) {
		resultDisplay.textContent = 'Human wins the game!';
		removeEventListeners(buttons);
	} else if (computerScore === 5) {
		resultDisplay.textContent = 'Computer wins the game!';
		removeEventListeners(buttons);
	}
}

function playGame() {
	buttons.forEach((button) => {
		button.addEventListener('click', handleClick);
	});
}

playGame();
