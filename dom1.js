const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const highlight = document.querySelector('#highlight');
const bold = document.querySelectorAll('.bolded');

h1.addEventListener('mouseover', () => h1.style.cursor = 'help');
h1.addEventListener('click', () => h1.innerHTML = 'Sweet')

window.addEventListener('mousemove', () => {
	h2.style.color = '#'+Math.random().toString(16).substr(-6);
	document.body.style.cursor = 'crosshair';
})

highlight.addEventListener('mouseenter', () => highlight.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png'));
const logo = document.querySelector('#logo');
highlight.addEventListener('mouseout', () => highlight.setAttribute('src', 'https://www.brandsoftheworld.com/sites/default/files/styles/logo-original-577x577/public/082014/js1_0.png?itok=zdiqYk3L'));



bold.forEach( (bold) => {
	bold.addEventListener('click', (e) => {
		bold.classList.toggle('boldest')
		if (bold.textContent === "Thanks for Clicking Me!") {
			bold.textContent = "Click Me Again!";
		} else {
			bold.textContent = "Thanks for Clicking Me!";
		}
	});
		// if( bold.classList.contains('boldest')) {
		// 	bold.classList.remove('boldest');
		// } else {
		// 	bold.classList.add('boldest');
		// }
	bold.addEventListener('mouseover', () => bold.style.cursor = 'progress');
})
