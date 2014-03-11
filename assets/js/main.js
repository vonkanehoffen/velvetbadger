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
	$('.btn-hero').click(function(e){
		$('#subpages section').hide();
		$('#subpages').slideDown(300);
		$('footer').show();
		scroll_to('#subpages');
	});
	$('.hero .btn-inf').click(function(e){
		$('#info').show();
	});
	$('.hero .btn-tickets').click(function(e){
		$('#tickets').show();
	});
	$('.subnav .btn-tickets').click(function(e){
		$('#info').hide();
		$('#tickets').show();
	});
	$('.subnav .btn-inf').click(function(e){
		$('#info').show();
		$('#tickets').hide();
	});
	$('.back').click(function(e) {
		$('footer').slideUp(300);
		$('#subpages').slideUp(300);
		scroll_to('#home');
	});
});
