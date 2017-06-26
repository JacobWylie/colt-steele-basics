const todo = document.querySelectorAll('.todo');
const list = document.querySelector('ul')
const input = document.querySelector('input');
const addButton = document.querySelector('.addButton');


// Creates new todo list items
function addItem () {
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
    newItem.classList.add('todo');
		newItem.innerHTML = `<span class='close'></span>${input.value}`;
		list.appendChild(newItem);
		input.value = "";
	}
  deleter();
}

// Delete list items
function deleter () {
  let deleteButton = document.querySelectorAll('.close');
  deleteButton.forEach( deleteButton => {
    deleteButton.addEventListener('click', function() {
     this.parentNode.remove();
    })
  })
}

addButton.addEventListener('click', addItem);

input.addEventListener('keyup', e => {
  if (e.which === 13) {
    addItem();
  }
});

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
  todo.addEventListener('click', deleter() );
})





