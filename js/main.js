

$(function(){
	//分享二维码展示
    $('.share li:nth-child(1)').hover(function(){
   		$('.share_code').fadeIn();
    },function(){
   		$('.share_code').fadeOut();
    })
    //视频
    $('.video_btn').click(function(){
    	alert('【福】是我的名字！')
    })
})

var ww = $(window).width();
var ww2 = (ww-1000)/2;

$(document).mouseenter(function(e){

  var ee = e || event;
  var x = ee.clientX;
  var y = ee.clientY;
  bx = x;
  by = y;

  $(this).unbind("mouseenter").mousemove(function(e){
    var ee = e || event;  
    var x = ee.clientX;
    var y = ee.clientY;     

    $(".person").css({marginLeft: -10+(-bx+x)/30-447+"px"});
    $(".rabbit-l").css({marginLeft: -10+(-bx+x)/100-757+"px"});
    $(".rabbit-r").css({marginLeft: -10+(-bx+x)/100+411+"px"});
  })
})
$(window).resize(function(){
  ww2 = (ww-1000)/2;  
})