var $winW, $winH, $isMobile, $headerHeight;
var filter = "win16|win32|win64|mac|macintel"; 

$(function () {
    $headerHeight = $('.header').innerHeight();

    if (navigator.platform) {
        if (filter.indexOf(navigator.platform.toLowerCase()) < 0) { //mobile

        } else { //pc
            $('.__nav li').mouseenter(function () {
                $(this).children('a').addClass('active');
                if ($(this).find('.sub_nav').length > 0 ){
                    $('.sub_bg').show();
                }
            });
            $('.__nav li').mouseleave(function () {
                $(this).children('a').removeClass('active');
                $('.sub_bg').hide();
            });
        } 
    }


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

    $('#btnMobile').off().on('click',function(){
        $('.side_nav').addClass('open');
        $('#wrap').addClass('open');
        $('html').addClass('open');
        $('#btnClosed').show();

    });
    $('#btnClosed').off().on('click',function(){
        $('.side_nav').removeClass('open');
        $('#wrap').removeClass('open');
        $('html').removeClass('open');
        $('#btnClosed').hide();
    });

    


    // main 상단 slide banner
    if ( $('.main_banner').length ) {
        var swiper = new Swiper(".main_banner", {
            loop: true,
            autoplay: {
                delay: 3500,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".main_banner .swiper-pagination",
                clickable: true,
            },
            observer: true,
            observeParents: true,
        });
    }

    // book 학년별 도서
    if ( $('.competition_must').length ) {
        $('.school_year_wrap_container .school_year_wrap').hide();
        $('.school_year_wrap_container .school_year_wrap:first').show();

        $('.competition_must button').on('click',function(){
            let tg = $(this).attr('data-rel');            
            $('.school_year_wrap_container .school_year_wrap').hide();
            $('#' + tg).fadeIn();
        });
    }
    
});
