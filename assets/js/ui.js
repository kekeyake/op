var $winW, $winH, $isMobile, $headerHeight;
var filter = "win16|win32|win64|mac|macintel"; 

function closePop(e) {
    $(e).removeClass('open');
    $('.bg_dimmed').hide();
    $('html').css('height', 'auto');
    $('html').css('overflow-y', 'auto');
}

function popOpen(o) {
    $('.bg_dimmed').show();
    setTimeout(function () {
        $(o).addClass('open');
    }, 200);
    $('html').css('height', '100vh');
    $('html').css('overflow-y', 'hidden');
}

function saveAs(uri, filename) {
    // 캡쳐된 파일을 이미지 파일로 내보낸다.
    var link = document.createElement('a');
    if (typeof link.download === 'string') {
        link.href = uri;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        window.open(uri);
    }
}

// 메뉴 활성화 세팅
function menuSetting() {
    $('.main_menu').addClass('page_on');
    $('.__nav li > a').removeClass('active_on');
    $('.__nav .sub_nav a').removeClass('active_on');
    $('.sub_bg').addClass('active');
}

// pc tit 간격
function titMargin() {
    $('section.contest').prev('.tit').css('margin-top',100);
    $('section.customer').prev('.tit').css('margin-top',100);
    $('section.hanuri').prev('.tit').css('margin-top',100);
    $('section.myinfo').prev('.tit').css('margin-top',100);
    $('section.app').prev('.tit').css('margin-top',100);
    $('section.book').prev('.tit').css('margin-top',100);
}

// 메뉴 활성화
function activeMenu() {    
    // navi active
    var pageId = $('main section').attr('id');
    // var subPageId = $('main > section').attr('id');
    //console.log(pageId);
    menuSetting();
    
    switch(pageId) {
        case 'main_cont':
            $('.sub_bg').removeClass('active');
            break;

        case 'contest_info':
            $('[data-rel=contest]').addClass('active_on');
            $('[data-rel=info]').addClass('active_on');
            break;
        case 'contest_attention':
            $('[data-rel=contest]').addClass('active_on');
            $('[data-rel=attention]').addClass('active_on');
            break;
        case 'contest_sample':
            $('[data-rel=contest]').addClass('active_on');
            $('[data-rel=sample]').addClass('active_on');
            break;
        
        case 'book':
            $('[data-rel=book]').addClass('active_on');
            // $('.sub_bg').removeClass('active');
            break;

        case 'app':
            $('[data-rel=app]').addClass('active_on');
            // $('.sub_bg').removeClass('active');
            break;

        case 'result':
            $('[data-rel=result]').addClass('active_on');
            $('.sub_bg').removeClass('active');
            break;
        
        case 'member':
            $('.sub_bg').removeClass('active');
            break;

        case 'customer_notice': 
            $('[data-rel=customer]').addClass('active_on');
            $('[data-rel=notice]').addClass('active_on');
            break;
        case 'customer_faq': 
            $('[data-rel=customer]').addClass('active_on');
            $('[data-rel=faq]').addClass('active_on');
            break;

        case 'hanuri_greeting':            
            $('[data-rel=hanuri]').addClass('active_on');
            $('[data-rel=greeting]').addClass('active_on');
            break;
        case 'hanuri_purpose':
            $('[data-rel=hanuri]').addClass('active_on');
            $('[data-rel=purpose]').addClass('active_on');
            break;
        case 'hanuri_history':
            $('[data-rel=hanuri]').addClass('active_on');
            $('[data-rel=history]').addClass('active_on');
            break;
        case 'hanuri_location':
            $('[data-rel=hanuri]').addClass('active_on');
            $('[data-rel=location]').addClass('active_on');
            break;

        
        case 'myinfo_mybook':
            $('[data-rel=myinfo]').addClass('active_on');
            $('[data-rel=mybook]').addClass('active_on');            
            break;    
        case 'myinfo_myapp':
            $('[data-rel=myinfo]').addClass('active_on');
            $('[data-rel=myapp]').addClass('active_on');            
            break;
        case 'myinfo_form':
            $('[data-rel=myinfo]').addClass('active_on');
            $('[data-rel=form]').addClass('active_on');            
            break;
        case 'myinfo_refund':
            $('[data-rel=myinfo]').addClass('active_on');
            $('[data-rel=refund]').addClass('active_on');            
            break;
    
        default:
    }
}
$(function () {
    $headerHeight = $('.header').innerHeight();

    $('select').change(function() {
        var current = $('select').val();
        if (current != 'null') {
            $('select').css('color','rgb(52,58,64)');
        } else {
            $('select').css('color','#999');
        }
    }); 

    // 메뉴 활성화
    activeMenu();

    
    if (navigator.platform) {
        if (filter.indexOf(navigator.platform.toLowerCase()) < 0) { //mobile
            
        } else { //pc
            
            titMargin();
            $('.__nav li').mouseenter(function () {
                $(this).children('a').addClass('active');
                $(this).css('z-index',10);
                if ($(this).find('.sub_nav').length > 0 ){
                    $('.sub_bg').show();
                }
                // 활성화 예외처리
                if ( !$(this).children('a').hasClass('active_on') && $(this).find('.sub_nav').length ) {
                    $('.active_on').next('.sub_nav').css('visibility','hidden');
                }
            });

            // 페이지 활성화            
            $('.__nav li').mouseleave(function () {
                $(this).css('z-index',0);
                $(this).children('a').removeClass('active');
                $('.sub_nav a').removeClass('active');
                $('.sub_bg').hide();
                $('.active_on').next('.sub_nav').css('visibility','visible');
            });

        } 
    }



    // sub menu
    $('.sub_nav a').hover(function () {
        $(this).addClass('active').siblings('a').removeClass('active');
    });
    
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

    // btn select
    if ($('.category_wrap').length ) {  
        
        $('.category_wrap .btn_cate').on('click',function(){
            $(this).addClass('active').siblings().removeClass('active');
        });
    }

    // btn select
    if ($('.survey_wrap').length ) {
        var $input = $('.survey_wrap > div input');
        $input.hide();
        $('.survey_wrap .btn_survey').on('click',function(){
            $(this).addClass('active').siblings().removeClass('active');
            $input.hide();
            if ($(this).attr('data-rel') == 'etc') {
                $input.show();
            }
        });
    }

    // mobile scree shot
    if ( $('.capture').length ) {
        $('.btn_save').on("click", function(){
            // 캡쳐 라이브러리를 통해서 canvas 오브젝트를 받고 이미지 파일로 리턴한다.
            html2canvas(document.querySelector('.capture')).then(canvas => {
                const el = document.querySelector('.capture');
                el.style.height = el.scrollHeight + 'px';
                saveAs(canvas.toDataURL('image/png'),'capture-test.png');
            });
        });
    }
    
    $('.btn_coupon').on('click', function(){
        $(this).toggleClass('on');
    });


    if ( $('.faq_list').length ) {
        $(this).find('li').on('click',function(){
            $(this).toggleClass('open');
        });
    }

    // 평가 결과 toggle
    if ( $('.description_wrap').length ) {
        $('#btnOpenDescription').on('click',function(){
            $('.description_wrap').toggleClass('open');
        });
        $('#btnClosedDescription').on('click',function(){
            $('.description_wrap').removeClass('open');
        });
    }
    
});
