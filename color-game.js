const squares = document.querySelectorAll('.square');
const rgbDisplay = document.querySelector('.rgbDisplay');
const notice = document.querySelector('.notice');
const newColors = document.querySelector('.newColors');
const modeButtons = document.querySelectorAll('.mode')
const header = document.querySelector('.header');
const footer = document.querySelector('.navbar');
let difficulty = 6;

const randomNumber = () => Math.floor(Math.random()*256).toString();
const randomRGB = () => `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;

const generateRandomColors = (num) => {
	// make an array
	let arr = []
	// add num random colors to array
	for(i = 0; i < num; i++) {
		arr.push(randomRGB());
	}
	// return array
	return arr;
}

let colors = generateRandomColors(difficulty);

// refresh the colors
const refreshColors = () => {
	// generate new colors
	let colors = generateRandomColors(difficulty);
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
const winner = () => {
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

// select winning color from array
let winningColor = colors[Math.floor(Math.random() * colors.length)];

//display winning color rgb value in header
rgbDisplay.textContent = winningColor;

// newColors button
newColors.addEventListener('click', refreshColors)

// difficulty mode buttons functionality
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

// loop through color squares
for(i = 0; i < squares.length; i++) {
	// add initial colors to squares
	squares[i].style.backgroundColor = colors[i];
	squares[i].style.transition = 'all .6s';

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




