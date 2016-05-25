$(document).ready(function(){
	$('.fancybox').fancybox({
		helpers: {
			buttons: {}
		}
	});
	
	$('.filter').on('click', function(){
		var $element = $(this);
		if (!$element.hasClass('active')) {
			$('.filter').removeClass('active');
			$element.addClass('active');
			
			var $filter = $element.data('rel');
			$filter == 'all' ? 
			$('.fancybox').attr('data-fancybox-group', 'gallery').not(":visible").fadeIn()
			: 
			$('.fancybox').fadeOut(0).filter(function(){
				return $(this).data('filter') == $filter;
			}).attr('data-fancybox-group', $filter).fadeIn(1000);
		}
	});
});