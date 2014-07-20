$(document).ready(function(){
	$('.page').hide();
	$('#navtop li:first').addClass('active').show();
	$('.page:first').show();
				
	$('.top_menu li').click(function(){
		$('.top_menu li').removeClass('active');
		$(this).addClass('active');
					
	$('.page').hide();
	var activeTab = $(this).find('a').attr('href');
	$(activeTab).fadeIn('slow');
	return false;
	});
});