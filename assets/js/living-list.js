$(document).ready(function() {

	var $postLink = $('section a');
	var $body = $('body');
	var $js_switch = $('.js_switch');

	function visited() {
		$(this).parent().addClass('visited');
	}

	function hasLivingList() {
		var $ribbon = $('.post-1 a');
		var star = '<div class="star"></div>';
		$ribbon.append(star);
	}
	function hasClearToDo() {
		$('.star').remove();
	}

	function styleSwitch() {
		$body.toggleClass('living-list clear-to-do');
		$js_switch.parent().toggleClass('active');
		if($body.hasClass('living-list')) {
			hasLivingList();
		}
		if($body.hasClass('clear-to-do')) {
			hasClearToDo();
		}
		return false;
	}

	if($body.hasClass('living-list')) {
		hasLivingList();
	}
	if($body.hasClass('clear-to-do')) {
		hasClearToDo();
	}

	$postLink.on('click',visited);
	$js_switch.on('click',styleSwitch);
	

});