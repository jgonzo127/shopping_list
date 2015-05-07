$(document).ready(function() {

//delete items
	var ex = $("#list").on('click', '.ex', function(){
	$(this).parent('.item').remove();
	});	
//cross off items
	var check =$("#list").on('click', '.item', function () {
	$(this).parent('.item').toggleClass('line-through');
	});

//disables submit button until text is input
		$('form').bind('keyup', function() {
		var nameLength = $('.add_bar').length;
		if (nameLength > 0) {
			$('.submit_button').removeAttr('disabled');
		}
		
	});

//disables submit button after first submit
	function disable() {	
		var nameLength = $('.add_bar').val().length;
		if (nameLength < 1) {
			$('.submit_button').attr('disabled', "true");
		} else {
			$('.submit_button').attr('disabled', "false");
		}
	};	


	
//submit new items
	$('.submit_button').on('click', function(e){
		$('this').attr('disabled');
		e.preventDefault();
		disable();
		var add = $('.add_bar').val();
		
//put new items into DOM and on list
		$('#list').append('<li class="item"><div class="check"></div><span>'
		 + add + '</span><div class="ex"></div></li>');
//delete new items   
		$("#list").on('click', '.ex', function(){
		$(this).parent('.item').remove();
		});	
//clear input text on submit			
	$('#sub').children('input').val('');
	
	})
//cross off new items
	$('#list').on('click', '.check', function () {
	$(this).parent('.item').toggleClass('line-through');
	})

//makes list sortable
	 $(function() {
		$( "#list" ).sortable();
	})

	
		

	
	
});