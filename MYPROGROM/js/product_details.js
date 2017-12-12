$(()=>{
	var bid=location.search.split("=")[1];
	$.ajax({
		type:"get",
		url:"data/getProductByLid.php",
		data:{bid:bid},
		dataType:"json"
	}).then(output=>{
	//console.log(output);
		var {product,imgs}=output;
		var {title,subtitle,price,writer,publisher}=product;
		$(".show_details>h2>a").html(title)
		//console.log($(".show_details>h2>a").html(title));
		$(".show_details>h3>a").html(subtitle)
		$(".show_details .price span").html(price)
		$(".show_details .writer .w1").html(writer)
		$(".show_details .writer .p2").html(publisher)
		//console.log(1);
		var html="";
		for(var pic of imgs){
			html+=`<li class="i1"><img src="${pic.sm}" data-md="${pic.md}" data-lg="${pic.lg}"></li>`;
		}
		var ul=$(".icon_list");
		ul.html(html);
		ul.css({width:62*imgs.length});
		if(imgs.length<=5)
			if(imgs.length<=5)
			document.querySelector(".preview>h1>a.forward")
				.className="forward disabled";
			document.querySelector(".mImg").src=imgs[0].md;
			document.querySelector(".largeDiv")
				.style.backgroundImage=`url(${imgs[0].lg})`;
	})
})

//aForward and aBackward 功能
$(()=>{
	function checkA(){
		if(moved==0)
			aBackward.className="backward disabled";
		else if(ul.children.length-moved==5)
			aForward.className="forward disabled";
		else{
			aBackward.className="backward";
			aForward.className="forward";
		}
	}
	var [aBackward, aForward]=
		document.querySelectorAll(".preview>h1>a");
	var ul=document.querySelector(".icon_list");
	var LIWIDTH=62,OFFSET=20,moved=0;
	aForward.onclick=e=>{
		if(e.target.className.indexOf("disabled")==-1)
			move(1);
	}
	aBackward.onclick=e=>{
		if(e.target.className.indexOf("disabled")==-1)
			move(-1);
	}
	function move(dir){
		moved+=dir;
		var left=-LIWIDTH*moved+20;
		ul.style.left=left+"px";
		checkA();
	}

	//放大镜功能
	var mImg=document.querySelector(".mImg"),
		largeDiv=document.querySelector(".largeDiv"),
		mask=document.querySelector(".mask"),
		superMask=document.querySelector(".superMask");
	ul.onmouseover=e=>{
		if(e.target.nodeName=="IMG"){
			mImg.src=e.target.dataset.md;
			largeDiv.style.backgroundImage=
				`url(${e.target.dataset.lg})`;
		}
	}
	superMask.onmouseover=()=>{
		mask.style.display=largeDiv.style.display="block";

	}
	superMask.onmouseout=()=>{
		mask.style.display=largeDiv.style.display="none";
	}
	//拖动mask
	var MAX=175;
	superMask.onmousemove=e=>{
		var offsetX=e.offsetX, offsetY=e.offsetY;
		var top=offsetY-175/2,
			left=offsetX-175/2;
		top=top<0?0:top>175?175:top;
		left=left<0?0:left>175?175:left;
		mask.style.top=top+"px";
		mask.style.left=left+"px";
		largeDiv.style.backgroundPosition=
			-left*2+"px "+(-top*2)+"px";
	}
})

//为你推荐
$(()=>{
	var tab1=$('.demo1'),
	tab2=$('.demo2'),
	tab=$('.demo')
tab.children('img').css('cursor','pointer')
tab2.html(tab1.html())
tab1.css({display:'flex',width:999,float:'left'})
tab2.css({display:'flex',width:999,float:'left'})
$('.indemo').css({width:999*2})
tab.css('overflow','hidden')
var i=0;
var timer=setInterval(()=>{
	i++
	if(i>=999) i=0
$('.indemo').css('transform',`translate(-${i}px)`)
},40)
tab.hover(
	()=>{
	clearInterval(timer)
	timer=null
},
()=>{
	timer=setInterval(()=>{
		i++
		if(i>=999) i=0
	$('.indemo').css('transform',`translate(-${i}px)`)
},40)
}
)
})




