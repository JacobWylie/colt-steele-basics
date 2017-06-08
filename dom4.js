const playerOneScore = document.querySelector('#playerOneScore');
let playerOneCounter = 0;
const playerTwoScore = document.querySelector('#playerTwoScore');
let playerTwoCounter = 0;
const winnerBanner = document.querySelector('#winnerBanner');
const scoreLimitDisplay = document.querySelector('#scoreLimitDisplay');
const scoreLimit = document.querySelector('input');
const playerOneButton = document.querySelector('#playerOneButton');
const playerTwoButton = document.querySelector('#playerTwoButton');
const resetButton = document.querySelector('#resetButton');

playerOneButton.addEventListener('click', () => {
	if (playerOneCounter < scoreLimit.value) {
		playerOneCounter++;
		playerOneScore.innerHTML = playerOneCounter;
		if (scoreLimit.value >= 1 && playerOneCounter == scoreLimit.value) {
			playerOneWins(playerOneCounter);
		}
	}
})

playerTwoButton.addEventListener('click', () => {
	if (playerTwoCounter < scoreLimit.value) {
		playerTwoCounter++;
		playerTwoScore.innerHTML = playerTwoCounter;
		if (scoreLimit.value >= 1 && playerTwoCounter == scoreLimit.value) {
			playerTwoWins(playerTwoCounter);
		}
	}
})

const playerOneWins = playerOneCounter => {
		playerOneScore.style.color = 'green';
		winnerBanner.innerHTML = "Player One Wins!";
		setInterval( () => {
	    	winnerBanner.style.color = '#'+Math.random().toString(16).substr(-6);
	    }, 300);
		playerOneButton.disabled = true;
		playerTwoButton.disabled = true;
}

const playerTwoWins = playerTwoCounter => {
		playerTwoScore.style.color = 'green';
		winnerBanner.innerHTML = "Player Two Wins!";
		setInterval( () => {
	    	winnerBanner.style.color = '#'+Math.random().toString(16).substr(-6);
	    }, 300);
		playerOneButton.disabled = true;
		playerTwoButton.disabled = true;
}

resetButton.addEventListener('click', () => {
	playerOneCounter = 0; 
	playerTwoCounter = 0;
	playerOneScore.innerHTML = playerOneCounter;
	playerTwoScore.innerHTML = playerTwoCounter;
	winnerBanner.innerHTML = '';
	playerOneScore.style.color = 'black';
	playerTwoScore.style.color = 'black';
	playerOneButton.disabled = false;
	playerTwoButton.disabled = false;
})

scoreLimit.addEventListener('input', () => {
	if (scoreLimit.value >= 0) {
		if (scoreLimit.value === "0") {
			scoreLimitDisplay.innerHTML = "Set Limit"
		} else {
			scoreLimitDisplay.innerHTML = scoreLimit.value;
		}
	}

})

