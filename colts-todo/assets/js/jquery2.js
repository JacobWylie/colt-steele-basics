// Check off todo items when clicked
$('li').click(function () {
	$(this).toggleClass('check-off');
})

// Delete todo item
$('.delete').click(function() {
	$(this).parent().remove();
})