function openResume()
{
    window.open("resume.pdf", '_blank');
}

$(document).ready(function() { 
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},1500);            
            }
        });
        $('.container p').each(function(){
        var scrollTop     = $(window).scrollTop(),
            elementOffset = $(this).offset().top,
            distance      = (elementOffset - scrollTop),
                windowHeight  = $(window).height(),
                breakPoint    = windowHeight*0.9;

            if(distance > breakPoint) {
                $(this).addClass("more-padding");   
            }  if(distance < breakPoint) {
                $(this).removeClass("more-padding");    
            }
    });
    });
});