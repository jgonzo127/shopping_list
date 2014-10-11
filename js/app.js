$(document).ready(function() {
		var ex = $('.ex').on('click', function(){
		$(this).parent('li').hide();
	})
		var check = $('.check').on('click', function() {
		$(this).parent('li').css({'text-decoration': 'line-through'});
	})

	//$('#reset').on('click', function() {
		//$('.reset_button').get(0).reset();
	//})


	$('form > .submit_button').on('click', function(e){
		var ex = $('.ex').on('click', function(){
		$(this).parent('ol > li, list_orig > li:last-child').hide();
	})
		var check = $('.check').on('click', function() {
		$(this).parent('ol li, li:last-child').css({'text-decoration': 'line-through'});
	})
		e.preventDefault();
		var add = $('.add_bar').val();
	
		
		$('.list_orig').append('<li class="item">' + 
			'<div class="check"></div>' + 
			'<span>' + add + '</span>' + 
			'<div class="ex"></div>' + '</li>'
			);
		ex;
		check;

	})


	$('form input').bind('keyup', function() {
		var nameLength = $('form input').length;
		if (nameLength > 0) {
			$('.submit_button').removeAttr('disabled');
		}
	});

	


});