$(document).ready(function() {
		var ex =$('.ex').on('click', function(){
		$(this).parent('li').hide();
	})
		var check =$(".check").on( 'click', function () {
    	$(this).parent('li').toggleClass('line-through');

    });

	$('form > .submit_button').on('click', function(e){
		
		e.preventDefault();
		var add = $('.add_bar').val();
		$('.ex').on('click', function(){
		$(this).parent('li').hide();
		})
		$(".check").on( 'click', function () {
    	$(this).parent('li').toggleClass('line-through');
    });
		
		$('.list_orig').append('<li class="item">' + 
			'<div class="check"></div>' + 
			'<span>' + add + '</span>' + 
			'<div class="ex"></div>' + '</li>'
			);
		

	})

	$('form input').bind('keyup', function() {
		var nameLength = $('form input').length;
		if (nameLength > 0) {
			$('.submit_button').removeAttr('disabled');
		}
	});

	
});