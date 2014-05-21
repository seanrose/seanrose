Template.home.rendered = function() {
    // Hack to hold load until image is loaded
    $('<img>').load(function() {
    	$('.home').addClass('fade-in');
	}).attr('src',function() {
    	var imgUrl = $('.home').css('background-image');
    	imgUrl = imgUrl .substring(4, imgUrl .length-1);
    	return imgUrl;
	}).each(function() {
    	if(this.complete) $(this).load();
	});
};
