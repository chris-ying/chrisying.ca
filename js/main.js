$(document).ready(function(){
	
		function startTyping() {
			Typed.new('.typing-1', {
				strings: ["Born in Shanghai, living in Toronto."],
				typeSpeed: 30,
				startDelay: 1500,
		});
		Typed.new('.typing-2', {
				strings: ["I'm a web developer / world traveller."],
				typeSpeed: 30,
				startDelay: 4200,
		});
	}
		startTyping();
	
    $("#down-btn").click(function() {
        $('html, body').animate({
            scrollTop: $("#work").offset().top
        }, 1000);
    });
    
    $('.popup-gallery').each(function() { 
        $(this).magnificPopup({
            delegate: 'a', 
            type: 'image',
            gallery: {
                enabled: true,
                preload: [0,2], 
                navigateByImgClick: true,
            }
        });
    });
	
});
