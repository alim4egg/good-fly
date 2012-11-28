//Configurations
var jQT = new $.jQTouch({
    	icon: '../images/jqtouch.png',
	icon4: '../images/jqtouch4.png',
	startupScreen: '../images/jqt_startup.png',
	addGlossToIcon: false,
	preloadImages: ['../images/imagem.jpg, ../images/imagem.jpg']
});


Zepto(function($){
	
	//Line Toolbar
	$('.toolbar').append('<span class="line"></span>');	
	
	//Animated Search
	//$('#about-us').append('<div id="search"><a href="#" id="close" title="X">X</a><h1>Search<span>Box</span></h1><p>Lorem ipsum dolor a simple sit amet?</p><input type="text" /><button type="submit">GO</button></div>');
		//Open
		$('a#open').tap(function(e){
			$('#search').animate({
				opacity: 1,
				margin: '-25% 0 0 -45%',
				rotate: '720deg'
			}, 500, 'ease-out');
		});
		//Close
		$('a#close').tap(function(e){
			$('#search').animate({
				opacity: 0,
				margin: '-100% 0 0 -45%',
				rotate: '0deg'
			}, 500, 'ease-out');
		});
			
	//Carousel
	$('.container').carousel({
		slides: $('.slides').children(),
		numberOfPages: 5
	});
	
	//Image Styles 
	$('.styled img').each(function() {
		var imgClass = $(this).attr('class');
		$(this).wrap('<span class="image-wrap ' + imgClass + '" style="width: auto; height: auto;"/>');
		$(this).removeAttr('class');
	});
	
	
});