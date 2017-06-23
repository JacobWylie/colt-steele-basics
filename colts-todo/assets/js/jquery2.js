// Check off todo items when clicked
$('ul').on('click', 'li', function () {
	$(this).toggleClass('check-off');
})

// Click X to delete todo item
$('ul').on('click', '.delete', function(e) {
	e.stopPropagation();
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
})

// Add item to Todo list
$('input[type="text"]').keypress(function(e) {
	if(e.which === 13) {
		$('ul').append(`<li><span class='delete'>X</span> ${$(this).val()}</li>`)
		$(this).val('');
	}
})
