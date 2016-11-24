$(function() {
	
	var sidebar = $('#sidebar'),
		mask = $('.mask'),
		backButton = $('.back-to-top'),
		sidebar_trigger = $('#sidebar_trigger');
	
	function showSideBar(){
		mask.fadeIn();
		sidebar.css('right',0);
		return false;
	}

	function hideSideBar(){
		mask.fadeOut();
		sidebar.css('right',-sidebar.width());
		return false;
	}

	function backToTop(){
		$('html,body').animate({scrollTop: 0},800);
		return false;
	}
	sidebar_trigger.click(showSideBar);
	mask.click(hideSideBar);
	backButton.click(backToTop);
	$(window).scroll(function(){
		//如果已滚动的部分超出浏览器高度,显示返回按钮,否则隐藏按钮
		if ($(window).scrollTop() > $(window).height()) {
			backButton.fadeIn();
		}else {
			backButton.fadeOut();
		}
	})
	$(window).trigger('scroll');//让程序自己触发事件
})