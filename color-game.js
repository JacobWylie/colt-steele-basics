let difficulty = 6;
let colors = [];
let winningColor;
const squares = document.querySelectorAll('.square');
const rgbDisplay = document.querySelector('.rgbDisplay');
const notice = document.querySelector('.notice');
const newColors = document.querySelector('.newColors');
const modeButtons = document.querySelectorAll('.mode')
const header = document.querySelector('.header');
const footer = document.querySelector('.navbar');
const randomNumber = () => Math.floor(Math.random()*256).toString();
const randomRGB = () => `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;

init();

function init() {
	setupModeButtons();
	setupSquares();
	refreshColors();
}

// generates the colors in an array
function generateRandomColors (num) {
	// make an array
	let arr = []
	// add num random colors to array
	for(i = 0; i < num; i++) {
		arr.push(randomRGB());
	}
	// return array
	return arr;
}

function setupSquares () {
	for(i = 0; i < squares.length; i++) {
		//add click listeners to squares
		squares[i].addEventListener('click', function() {
			// grab color of clicked square
			let clickedColor = this.style.backgroundColor;
			// compare color to winningColor
			if (clickedColor === winningColor) {
				winner();
			} else {
				notice.textContent = "TRY AGAIN!"
				this.classList.add('hideSquare');
			}
		})	
	}
}

// difficulty mode buttons functionality
function setupModeButtons () {
	for(i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener('click', function() {
			modeButtons[0].classList.remove('selected');
			modeButtons[1].classList.remove('selected');
			this.classList.add('selected');
			this.innerText === 'EASY' ? difficulty = 3: difficulty = 6;
			refreshColors();
			return colors = generateRandomColors(difficulty);
		})
	}
}

// refresh the colors
function refreshColors () {
	// generate new colors
	colors = generateRandomColors(difficulty);
	//pick a new random color
	winningColor = colors[Math.floor(Math.random() * colors.length)];
	//display winning color rgb value in header
	rgbDisplay.textContent = winningColor;
	// change colors of squares
	for(i = 0; i < squares.length; i++) {
		// add colors to squares
		if(colors[i]) {
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.transition = 'all .6s';
			squares[i].classList.remove('hideSquare');
			squares[i].style.display = 'initial';
		} else {
			squares[i].style.display = 'none';
		}
	}
	header.style.backgroundColor = '#437aa8';
	footer.style.backgroundColor = '#437aa8';
	newColors.textContent = 'NEW COLORS';
	notice.textContent = 'Guess the color';
}

// when winning color is chosen
function winner () {
	notice.textContent = 'GREAT JOB!';
	newColors.textContent = 'PLAY AGAIN?';
	header.style.backgroundColor = winningColor;
	header.style.transition = 'all .6s';
	footer.style.backgroundColor = winningColor;
	footer.style.transition = 'all .6s';
	squares.forEach(squares => {
		squares.style.backgroundColor = winningColor;
		squares.classList.remove('hideSquare');
	});
}

// newColors button
newColors.addEventListener('click', refreshColors)











