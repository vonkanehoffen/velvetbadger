// Velvet Badger: Main JS

function to_ajax_id(str) {
  return (str.replace(/[^a-z0-9]/gi,''))+'-ajax';
}

function scroll_to(selector) {
  $('html,body').animate({
    scrollTop: $(selector).offset().top
  }, 800);
  return false;
}

$(function(){
	$('#btn-info').click(function(e){
		$('#tickets').slideUp(300);
		$('#info').slideDown(300);
		$('#footer').show();
		scroll_to('#info');
	});
	$('#btn-tickets').click(function(e){
		$('#info').slideUp(300);
		$('#tickets').slideDown(300);
		$('#footer').show();
		scroll_to('#tickets');
	});

});
