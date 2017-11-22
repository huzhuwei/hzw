//							  对象   目标      速度    属性  函数
				function move(obj,target,speed,attr,func){	
					
					clearInterval(obj.timer);
//					getStyle()获取的值有单位px 用parseInt转换为数值
					var current=parseInt(getStyle(obj,attr));
//					如果当前值大于目标值,speed为负
					if(current>target){
						speed=-speed;
					}
					
					obj.timer=setInterval(function(){
						var b=parseInt(getStyle(obj,attr));
//						获取盒子的left距离,因含有单位则需转换成整数
//						上条件需放入定时器,b的值才能持续更新
						
						var a=b+speed;
						if((speed<0&&a<target)||(speed>0&&a>target)){
							a=target;
						}
						
						obj.style[attr]=a+"px";
//						属性为变量需要用中括号括起来
						
						if(a==target){
							clearInterval(obj.timer);	
//							停止调用函数
							func&&func();
//							未传函数不会报错,执行调用函数
						}					
					},50)													
				}
			
				
				function getStyle(obj,name){
					if(window.getComputedStyle){	
//						普通浏览器方式,不支持IE8及以下 
//						使用对象的属性判断,不会报错
//						用形参判断,会报错
						return getComputedStyle(obj,null)[name];
					}else{
//						IE方式
						return obj.currentStyle[name];	
						
					}
				}