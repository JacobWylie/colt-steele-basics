const body = document.querySelector('body');
const colorChanger = document.querySelector('.colorButton');

colorChanger.addEventListener('click', () => {
	body.classList.toggle('colorChanger');
})