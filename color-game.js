const squares = document.querySelectorAll('.square');
const rgbDisplay = document.querySelector('.rgbDisplay');
const notice = document.querySelector('.notice');
const newColors = document.querySelector('.newColors');
const easy = document.querySelector('.easy');
const hard = document.querySelector('.hard');
const header = document.querySelector('.header');
const footer = document.querySelector('.navbar');
let value = 6;

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

let colors = generateRandomColors(6);

// select winning color from array
let winningColor = colors[Math.floor(Math.random() * colors.length)];

//display winning color rgb value in header
rgbDisplay.textContent = winningColor;

// easy button function
easy.addEventListener('click', () => {
	easy.classList.add('selected');
	hard.classList.remove('selected');
	
	colors = generateRandomColors(3);
	for (i=3; i<6; i++) {
		squares[i].style.display = 'none';
	}
	refreshColors();
	return value = 3;
})

// hard button function
hard.addEventListener('click', () => {
	hard.classList.add('selected');
	easy.classList.remove('selected');
	
	colors = generateRandomColors(6);
	for (i=3; i<6; i++) {
		squares[i].style.display = 'initial';
	}
	refreshColors();
	return value = 6
})

// newColors button refresh
newColors.addEventListener('click', refreshColors = () => {
	// generate new colors
	let colors = generateRandomColors(value);
	//pick a new random color
	winningColor = colors[Math.floor(Math.random() * colors.length)];
	//display winning color rgb value in header
	rgbDisplay.textContent = winningColor;
	// change colors of squares
	for(i = 0; i < squares.length; i++) {
		// add colors to squares
		squares[i].style.backgroundColor = colors[i];
		squares[i].classList.remove('hideSquare');
	}
	header.style.backgroundColor = '#437aa8';
	footer.style.backgroundColor = '#437aa8';
	newColors.textContent = 'NEW COLORS';
	notice.textContent = 'Guess the color';
})

// loop through color squares
for(i = 0; i < squares.length; i++) {
	// add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener('click', function() {
		// grab color of clicked square
		let clickedColor = this.style.backgroundColor;
		// compare color to winningColor
		if (clickedColor === winningColor) {
			notice.textContent = 'GREAT JOB!';
			newColors.textContent = 'PLAY AGAIN?';
			header.style.backgroundColor = winningColor;
			footer.style.backgroundColor = winningColor;
			squares.forEach(squares => {
				squares.style.backgroundColor = winningColor;
				squares.classList.remove('hideSquare');
			});
		} else {
			notice.textContent = "TRY AGAIN!"
			this.classList.add('hideSquare');
		}
	})	
}




