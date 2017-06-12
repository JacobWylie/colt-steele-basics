const squares = document.querySelectorAll('.square');
const rgbDisplay = document.querySelector('.rgbDisplay');
const notice = document.querySelector('.notice');
const newColors = document.querySelector('.newColors');
const header = document.querySelector('.header');
const footer = document.querySelector('.navbar');

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
const winningColor = colors[Math.floor(Math.random() * colors.length)];

//display winning color rgb value in header
rgbDisplay.textContent = winningColor;

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
			newColors.textContent = 'TRY AGAIN?';
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


