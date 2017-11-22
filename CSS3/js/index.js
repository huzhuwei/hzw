var c = 0;
var win_height = $(window).height();
$("body").swipeUp(function(){
//	触屏上滑
	c++;
	if(c>2){
		c=2;
		return;	
	}
	
	$("#container .box").eq(c).find('.ani').hide().removeClass('animated');
//	先让元素隐藏  再过一秒显示出来
	setTimeout(function(){
		$("#container .box").eq(c).find('.ani').show().addClass('animated');
	},1000)
	
//	计算应该到达的top值
	var t = c * -win_height;
	$("#container").css('top',t);
})
$("body").swipeDown(function(){
//	触屏下滑
	c--;
	if(c<0){
		c=0;
		return;	
	}
	
	$("#container .box").eq(c).find('.ani').hide().removeClass('animated');
	setTimeout(function(){
		$("#container .box").eq(c).find('.ani').show().addClass('animated');
	},1000)
//	计算应该到达的top值
	var t = c * -win_height;
	$("#container").css('top',t);
})

