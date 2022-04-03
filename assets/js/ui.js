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
    var pageId = $('main > section').attr('id');
    // var subPageId = $('main > section').attr('id');
    //console.log(pageId);
    menuSetting();
    
    switch(pageId) {
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

    var posLegend;
    var font_size;
    
    if (navigator.platform) {
        if (filter.indexOf(navigator.platform.toLowerCase()) < 0) { //mobile
            posLegend = 'bottom';
            font_size = 12;
            console.log('mogile');
        } else { //pc
            font_size = 18;
            posLegend = 'top';
            console.log('pc');
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

    // radar style chart
var radarChartData = {
    labels: ['어휘',['사실적','이해'],['추론적','이해'],['비판적','이해'],['통합','사고']], // 줄바꿈 표현을 위해 배열처리
    datasets: [{
        backgroundColor:'rgba(234, 85, 4, 0.15)',
        borderColor:'rgba(234, 85, 4, 1)',
        fill: true,
        // radius:2,
        // pointRadius:4,
        // pointBorderWidth:1,
        pointBackgroundColor:'rgba(234, 85, 4, 1)',
        pointBorderColor:'rgba(234, 85, 4, 1)',
        data: [1,2,3,4,5] // 총점 5로 환산해주세요
    }]
}

if ( $('#radarChart').length ) {
    var radarChart = document.getElementById('radarChart');
    radarChart = new Chart(radarChart, {
        type:'radar',
        data:radarChartData,        
        options:{
            scaleShowLabels: false,
            responsive:true,
            // maintainAspectRatio: false,
            legend: {
                display: false
            },
            elements: {
                line: {
                    borderWidth: 1.5
                }
            },
            scale: {                    
                gridLines: {
                    color:'rgba(221, 221, 221, 1)',
                    lineWidth:1,
                },
                
                ticks: {
                    begiaAtZero:true,
                    min:0,
                    max:5,
                    stepSize:1,
                    fontSize:0,
                    display: false,
                },
                pointLabels: {
                    fontSize:font_size,
                    fontColor:'rgba(102, 102, 102, 1)',
                    lineHeight:1
                }
            }
        }
    });
}

var data1 = [15,18,12,11,23,79];
var data2 = [14.2,16,1,13.2,11.7,17.2,72.4];
var barChartData = null;
barChartData = {
    labels: ['어휘', ['사실적','이해'], ['추론적','이해'], ['비판적','이해'], ['통합','사고'],'합계'], 
    datasets: [
        {
            label: '개인 득점', 
            backgroundColor: '#A475FF', 
            borderWidth: 0, 
            data: data1,
            
        }, 
        {
            label: '전체 평균', 
            backgroundColor: '#FFCB40',
            borderWidth: 0, 
            data: data2,
            
        }
    ]
};

if ( $('#barChart').length ) {
    var barChart = document.getElementById('barChart');        
    barChart = new Chart(barChart, {
        type: 'bar',
        // 옆으로 누운 bar 차트를 쓰실 경우 바꾸시면 됩니다.
        //type: 'horizontalBar'
        data: barChartData,            
        options: {
            // responsive, maintainAspectRatio의 설정이 아래와 같이 해야
            // 브라우저의 크기를 변경해도 canvas를 감싸고 있는
            // div의 크기에 따라 차트가 깨지지 않고 이쁘게 출력 됩니다. 
            responsive: true,   //auto size : true
            maintainAspectRatio: false,
            scaleShowLabels: false,                
            legend: {
                position: posLegend,
                
                labels:{
                    boxWidth:15,
                    boxHeight:20,
                    fontSize:font_size,
                }
            },
            scales: {     
                xAxes: [{
                    ticks: {
                        fontSize:font_size,
                    }                        
                }],               
                yAxes: [{                        
                    labels:{
                        display:false
                    },
                    ticks: {
                        // Y 축 0부터 시작
                        fontSize:0,
                        beginAtZero:true,
                        min:0,
                        max:25,                       
                        stepSize:1,     
                        display: false,                       
                        // Y 축 정수로 보여주기 
                        // 숫자가 작거나 또는 0인 경우 등 자동으로 보여주므로 소숫점으로 나타난다
                        callback: function (value) {
                            if (0 === value % 1) {
                                return value;
                            }
                        }
                    },                        
                }],                    
            }
            // 아래 주석 처리하여도 포인터를 바에 가져가면 수치가 나옵니다.
            // 그러나 min 버젼을 link할 경우 영역에다 가져가면 나오질 않아요
            // 또한 툴팁에 해당 데이터의 색도 나오지 않습니다.
            // 직접 코딩 후 min 버젼으로 교체하여 테스트 해보시면 차이를 알 수 있습니다.
            // Tooltip 
            //, tooltips: {
            //    mode: 'index',
            //    intersect: false,
            //},
            //hover: {
            //    mode: 'nearest',
            //    intersect: true
            //}
        }
    });
}
        

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
