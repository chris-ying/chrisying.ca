$(document).ready(function(){
	
    $(window).load(function(){
        $('#preloader').fadeOut();
        $("#intro h1").addClass("intro-animation"); 
    });
    
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
