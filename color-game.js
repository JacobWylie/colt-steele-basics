const squares = document.querySelectorAll('.square');
const rgbDisplay = document.querySelector('.rgbDisplay')

const randomNumber = () => Math.floor(Math.random()*256).toString();
const randomRGB = () => `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
let colors = [
	randomRGB(),
	randomRGB(),
	randomRGB(),
	randomRGB(),
	randomRGB(),
	randomRGB(),
]

const winningColor = colors[Math.floor(Math.random()*colors.length)];

rgbDisplay.textContent = winningColor;

for(i = 0; i < squares.length; i++) {
	// add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener('click', function() {
		// grab color of clicked square
		let clickedColor = this.style.backgroundColor;
		// compare color to winningColor
		if (clickedColor === winningColor) {
			alert('goodjob');
		} else {
			this.classList.add('hideSquare');
		}
	})	
}


