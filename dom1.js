const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const highlight = document.querySelector('#highlight');
const bold = document.querySelectorAll('.bolded');

h1.addEventListener('click', () => {
	window.location = 'http://www.google.com';
})

window.addEventListener('mousemove', () => {
	h2.style.color = '#'+Math.random().toString(16).substr(-6);
})

highlight.addEventListener('mouseover', () => highlight.style.color = 'pink');
highlight.addEventListener('mouseout', () => highlight.style.color = 'black');

bold.forEach( (bold) => {
	bold.addEventListener('click', (e) => {
		if( bold.style.fontWeight === 'bold' ) {
			bold.style.fontWeight = 'normal';
		} else {
			bold.style.fontWeight = 'bold';
		}
	})
})
