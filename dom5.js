const todo = document.querySelectorAll('.todo');
const list = document.querySelector('ul')
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
	if (input.value.length !== 0) {
		const newItem = document.createElement('li');
		newItem.addEventListener('mouseover', function() {
	    	this.classList.toggle('mouseOver');
	    })
	    newItem.addEventListener('mouseout', function() {
	    	this.classList.toggle('mouseOver');
		})
	    newItem.addEventListener('click', function() {
	    	this.classList.toggle('strikeout');
		})
		newItem.innerHTML = input.value;
		list.appendChild(newItem);
		input.value = "";
	}
})



// For Example todo items already in list
todo.forEach( todo => {
  todo.addEventListener('mouseover', function() {
    this.classList.toggle('mouseOver');
  })
  todo.addEventListener('mouseout', function() {
    this.classList.toggle('mouseOver');
  })
  todo.addEventListener('click', function() {
    this.classList.toggle('strikeout');
  })
})
