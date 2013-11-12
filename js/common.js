$(document).ready(function() {

//
function slider() {
	var nav = $('.nav');
	var nav_bg = $('.nav__bg');
	var items = $('.slider__items');
	nav.find('a').click(function() {
		if (!$(this).hasClass('is-active')) {
			var visible = $(this).attr('href');
			nav.find('a').removeClass('is-active');
			$(this).addClass('is-active');		
			items.find('.slider__el').removeClass('is-active');
			$('.' + visible).addClass('is-active');
			prev.removeClass('is-disabled');
			next.removeClass('is-disabled');
			if ($(this).parent().is(':last-child')) {				
				next.addClass('is-disabled');
			};
			if ($(this).parent().is(':first-child')) {				
				prev.addClass('is-disabled');
			};

			//
			var width = $(this).parent().width();
			var pos_left = $(this).position().left;
			nav_bg.css({'width': width, 'left': pos_left});

		};
		return false;
	});
	var prev = $('.slider__btn-prev');
	var next = $('.slider__btn-next');
	next.click(function() {
		if (!$(this).hasClass('is-disabled')) {
			prev.removeClass('is-disabled');
			var current = nav.find('a.is-active');
			current.parent().next().find('a').trigger('click');
		};
	});
	prev.click(function() {
		if (!$(this).hasClass('is-disabled')) {
			next.removeClass('is-disabled');
			var current = nav.find('a.is-active');
			current.parent().prev().find('a').trigger('click');
		};
	});
}
slider();

});