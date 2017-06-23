$('button').on('click', function() {
  if ($('input').val() !== '') {
    $('ul').append(`<li><span class='delete'></span>${$('input').val()}</li>`);
  }
  $('li:last-of-type').hide().slideDown(1000);
  $('.delete').on('click', function() {
    $(this).parent().slideUp(1000, function() {
      $(this).remove();
    });
  })
  $('input').val('');
})




