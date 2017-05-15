$(document).ready(function(){
    
    new WOW( {mobile: false} ).init(); 
	
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
    
		if ( $(window).width() > 768 ) {
			$( "#intro h1" ).css( "font-size", $(window).width()*0.04+15 );
			$( "#intro p" ).css( "font-size", $(window).width()*0.005+15 );
			$( "#profile-intro" ).css( "font-size", $(window).width()*0.01+5 );
			$( "#gallery-heading p" ).css( "font-size", $(window).width()*0.012+5 );
			$( ".photo h2" ).css( "font-size", $(window).width()*0.015+10 );

			$( window ).resize(function() {
					$( "#intro h1" ).css( "font-size", $(window).width()*0.04+15 );
					$( "#intro p" ).css( "font-size", $(window).width()*0.005+15 );
					$( "#profile-intro" ).css( "font-size", $(window).width()*0.01+5 );
					$( "#gallery-heading p" ).css( "font-size", $(window).width()*0.012+5 );
					$( ".photo h2" ).css( "font-size", $(window).width()*0.015+10 );
			});
		}
	
});
