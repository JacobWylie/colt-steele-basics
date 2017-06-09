const todo = document.querySelectorAll('.todo');

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
});
