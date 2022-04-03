$(function () {
    var is_pos = 'top';
    var font_size;

    if (navigator.platform) {
        if (filter.indexOf(navigator.platform.toLowerCase()) < 0) { //mobile
			is_pos = 'bottom';
            font_size = 12;
		} else {
            font_size = 18;
        }        
	}
	
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
                    position: is_pos,
                    
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
}):