const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const highlight = document.querySelector('#highlight');
const bold = document.querySelectorAll('.bolded');

h1.addEventListener('mouseover', () => h1.style.cursor = 'help');
h1.addEventListener('click', () => {
	window.location = 'http://www.google.com';
})

window.addEventListener('mousemove', () => {
	h2.style.color = '#'+Math.random().toString(16).substr(-6);
	document.body.style.cursor = 'crosshair';
})

highlight.addEventListener('mouseover', () => highlight.style.color = 'pink');
highlight.addEventListener('mouseout', () => highlight.style.color = 'black');

bold.forEach( (bold) => {
	bold.addEventListener('click', (e) => {
		if( bold.classList.contains('boldest')) {
			bold.classList.remove('boldest');
		} else {
			bold.classList.add('boldest');
		}
	})
	bold.addEventListener('mouseover', () => bold.style.cursor = 'progress');
})
