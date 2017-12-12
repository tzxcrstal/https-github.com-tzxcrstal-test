$("#header").load("header.html",()=>{
		$(".director").on("click","[data-toggle=nav]",function(e){
			e.preventDefault()
				$(this).addClass('first')
				   .siblings().removeClass('first')
	})
});




















/**** 为页面添加滚动事件 ****/
$(()=>{
	$(window).scroll(()=>{
		var scrollTop=$(window).scrollTop()
		if(scrollTop>=478){
			$('.fixed_nav').show().css('top',0)
		}else{
			$('.fixed_nav').css('top',-50).hide()
		}
	})
})