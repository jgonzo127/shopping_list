$(document).ready(function() {
//delete items	
		$(".ex").on('click', function(){
		$(this).parent('li').remove();
	});
//cross off items
		$(".check").on('click', function () {
    	$(this).parent('li').toggleClass('line-through');

    });
//submit new items
	$('.submit_button').click(function(e){
		e.preventDefault();
		var add = $('.add_bar').val();
//delete new items			
		$(".ex").on('click', function(){
		$(this).parent('li').remove();
		})

//cross off new items
		$(".check").on('click', function () {
    	$(this).parent('li').toggleClass('line-through');
   		})
//put new items into DOM and on list
		$('#list').append('<li class="item"><div class="check"></div><span>'
		 + add + '</span><div class="ex"></div></li>');
		});

//disables submit button until text is input
	$('form').bind('keyup', function() {
		var nameLength = $('form input').length;
		if (nameLength > 0) {
			$('.submit_button').removeAttr('disabled');
		}
	});

	

	
});