$(document).ready(function() {

	var $postLink = $('section a');
	var $body = $('body');
	var $js_switch = $('.js_switch');

	function visited() {
		$(this).parent().addClass('visited');
	}

	function styleSwitch() {
		$body.toggleClass('living-list clear-to-do');
		$js_switch.parent().toggleClass('active');
		return false;
	}

	$postLink.on('click',visited);
	$js_switch.on('click',styleSwitch);

});