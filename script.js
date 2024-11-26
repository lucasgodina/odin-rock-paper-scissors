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

function getHumanChoice() {
	let choice = prompt('Enter your choice: ');
	choice = choice.toLowerCase();
	while (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors') {
		choice = prompt('Invalid choice. Please enter rock, paper, or scissors: ');
	}
	return choice;
}

let humanScore = 0;
let computerScore = 0;

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

function playGame() {
	for (let i = 0; i < 5; i++) {
		const humanChoice = getHumanChoice();
		const computerChoice = getComputerChoice();
		console.log('Computer choice: ' + computerChoice);
		console.log('Human choice: ' + humanChoice);
		console.log(playRound(computerChoice, humanChoice));
	}
	console.log('Human score: ' + humanScore);
	console.log('Computer score: ' + computerScore);
}

playGame();
