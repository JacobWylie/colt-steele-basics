// Check off todo items when clicked
$('ul').on('click', 'li', function () {
	$(this).toggleClass('check-off');
})

// Click X to delete todo item
$('ul').on('click', 'span', function(e) {
	e.stopPropagation();
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
})

// Add item to Todo list
$('input[type="text"]').keypress(function(e) {
	// adds to list with enter key and input text required
	if(e.which === 13 && $(this).val() !== '') {
		$('ul').append(`<li><i class="fa fa-trash-o"></i> ${$(this).val()}</li>`)
		$(this).val('');
	}
})

// Toggle add item with write button
$('.fa-pencil-square-o').click( () => {
	$('input').toggle();
})
