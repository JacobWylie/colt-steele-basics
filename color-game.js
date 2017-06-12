const squares = document.querySelectorAll('.square');

squares.forEach(squares => {
	squares.style.backgroundColor = '#'+Math.random().toString(16).substr(-6);
})

