let playerOneScore = document.querySelector('#playerOneScore');
let playerOneCounter = 0;
let playerTwoScore = document.querySelector('#playerTwoScore');
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
	}
})

playerTwoButton.addEventListener('click', () => {
	if (playerTwoCounter < scoreLimit.value) {
		playerTwoCounter++;
		playerTwoScore.innerHTML = playerTwoCounter;
	}
})

if (scoreLimit.value >= 1 && playerOneCounter == scoreLimit.value) {
		playerOneScore.style.color = 'green';
		winnerBanner.innerHTML = "Player One Wins!";
		playerOneButton.disabled = true;
		playerTwoButton.disabled = true;
}

if (scoreLimit.value >= 1 && playerTwoCounter == scoreLimit.value) {
		playerTwoScore.style.color = 'green';
		winnerBanner.innerHTML = "Player Two Wins!";
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

