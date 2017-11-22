//toggleClass 切换类  
				
	function toggleClass(obj,nc){
		if(hasClass(obj,nc)){
			delClass(obj,nc);
		}else{
			addClass(obj,nc);
		}
	}
	
//删除Class类
	function delClass(obj,nc){
		var reg=RegExp("\\b"+nc+"\\b");
		obj.className = obj.className.replace(reg,"");
	}
	
//检测类是否添加
	function hasClass(obj,nc){
		var reg=RegExp("\\b"+nc+"\\b");
//使用regexp 需要用\转义
//\b只能匹配单词边界的数字、汉字、下划线 nc为独立的字符串
//		console.log(reg);
//		return reg.test(obj.className);
//如果className中  含有nc 则返回true
	}
	
//添加类
	function addClass(obj,nc){
		if(!hasClass(obj,nc))
		obj.className+=" "+nc;	
	}