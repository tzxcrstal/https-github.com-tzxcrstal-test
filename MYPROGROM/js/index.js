//轮播图
$(()=>{
	var i=1;
	function task(){
		i++;
		if(i==5) i=1;
		var divs=document.querySelectorAll(".banner>div");
		var j=0,count=10,interval=50,dura=500;
		var timer=setInterval(()=>{
			var div=divs[j];
			div.style.backgroundImage=`url(img/${i}.jpg)`;
			div.className="shake";
			j++;
			if(j==count) clearInterval(timer);
		},50)
		setTimeout(()=>{
			for(var div of divs) div.className="";
			document.querySelector(".banner>img").src="img/"+i+".jpg"
		},interval*count+dura)
	}
		setInterval(task,1000+1000);   
});

//公告详情
$(()=>{
	$(".j_item").mouseenter(function(){
		$(this).addClass('active')
					 .siblings().removeClass('active')
	})
});

//天一资讯详情
$(`.film_focus_imgs li:eq(0)`).fadeIn(0).siblings().fadeOut(0);
$(".film_focus .film_focus_desc .film_focus_nav").on("mouseenter","li",e=>{
	var $tar=$(e.target);
	if(!$tar.is(".cur")){
		$tar.addClass("cur")
			.siblings().removeClass("cur");
	}
	var i=$tar.index();
	$(`.film_focus_imgs li:eq(${i})`).fadeIn(200).siblings().fadeOut(200);
})
// 重点产品 

$(".iptProducts").on("mouseover",".iptImg",function(){
		var $imgs=$(this);
		if(!$imgs.next().is(".in")){
			$imgs.parent().find('.in').removeClass('in')
			$imgs.next().addClass('in')
		}
})
// 楼层滚动 
$(()=>{
	$(window).scroll(()=>{
		var scrollTop=$(window).scrollTop();
		var offsetTop=$(".floor:first").offset().top;
		if(offsetTop<=scrollTop+innerHeight/2){
			$(".lift").show();
		}else{
			$(".lift").hide();
		}
		var $floors=$(".floor");
		for(var i=0;i<$floors.length;i++){
			var $f=$($floors[i]);
			if($f.offset().top>scrollTop+innerHeight/2){
				break;
			}
		}

		$(`.lift>ul>li:eq(${i-1})`)
			.addClass("lift_item_on")
			.siblings().removeClass("lift_item_on")
	})
	$(".lift>ul").on("click",".lift_btn",function(){
		var $a=$(this);
		var i=$a.parent().index();
		var offsetTop=$(`.floor:eq(${i})`).offset().top;
		$('body').stop(true).animate({
			scrollTop:offsetTop-100
		})
	})
})
// 定时器
var hour=document.querySelector(".discount .disRt .H1"),
	minute=document.querySelector(".discount .disRt .M2"),
	second=document.querySelector(".discount .disRt .S3"),
	timer,now1=new Date(),
	target=now1.getTime()+5000000;
	function task(){
	var now2=new Date()
	var s=parseInt((target-now2.getTime())/1000)
		if(s>0){
		var h=parseInt(s%(3600*24)/3600); if(h<10) h='0'+h;
		var m=parseInt(s%3600/60); if(m<10) m='0'+m;
		var s=s%60; if(s<10) s='0'+s;
		hour.innerHTML=h
		minute.innerHTML=m
		second.innerHTML=s
		timer=setTimeout(task,1000)
	}else{
		clearTimeout(timer);
		timer(null);
		alert('开始抢购')
	}
};
window.onload=()=>{task()}