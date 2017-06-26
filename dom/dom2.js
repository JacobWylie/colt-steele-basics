const googleLogo = document.querySelector('div[title="Google"]');
const input = document.querySelector('input[value="Google Search"]');
const subtext = document.querySelector('.logo-subtext');
const links = document.querySelectorAll('a');

googleLogo.style.background = 'url("http://logos-download.com/wp-content/uploads/2016/02/bing-tm-logo.png")';

googleLogo.addEventListener('mouseover', () => {
	// googleLogo.classList.toggle('googleLogo');
	if (googleLogo.style.border === '5px solid black') {
		googleLogo.style.border = 'none';
	} else {
		googleLogo.style.border = '5px solid black';
	}
})

input.value = "Feeling lucky punk?";

subtext.innerHTML = 'Welcome to Bing!';
subtext.style.color = "black"

links.forEach( links => {
	links.setAttribute('href', 'http://www.bing.com');
})







