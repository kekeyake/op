var $winW, $winH, $isMobile, $headerHeight;

$(function () {
    $headerHeight = $('.header').innerHeight();

    // ===== Scroll to Top ==== 
    $(window).scroll(function () {
        if ($(window).scrollTop() > 106) {
            $('.pc_menu').addClass('sticky');
            $('h1.h1').addClass('sticky');
        } else {
            $('.pc_menu').removeClass('sticky');
            $('h1.h1').removeClass('sticky');
        }
    });
    $('.__top').on('click',function() {        
        $("html, body").animate({ scrollTop: 0 },500);
    });

    if ($('.main_banner').length) {
        var swiper = new Swiper(".main_banner", {
            loop: true,
            spaceBetween: 10,
        });
    }    
    
});
