//导航栏的固定定位
function Fixed(){
	window.onscroll=function(){
		var _container=document.getElementById("container");
		var h=36;
		var s=document.documentElement.scrollTop || document.body.scrollTop;
		if(s<=h){
			_container.style.position="static";

		}else{
			_container.style.position="fixed";
			_container.style.left=0+"px";
			_container.style.top=0+"px";
		}
	}
}
//Shop轮播图啊啊啊啊啊,还是切换图片的轮播图；
function Slider(){
	var index=0;
	var _timer;
	var _shopSlider=document.getElementById("shopSlider");
	var _beef=document.getElementById("beef");
	var _span1=document.getElementById("span1");
	var _span2=document.getElementById("span2");

	_timer=window.setInterval(function(){
		for(let i=0;i<_beef.children.length;i++){
			_beef.children[i].style.backgroundColor="red";
		}
		document.getElementById("picS").src="../images/game"+index+".jpg";
		_beef.children[index].style.backgroundColor="white";
		index++;
		if(index>4){
			index=0;
		}
	},30);

	// _span1.onclick=function(){
	// 	index--;
	//
	// }
}

//购买页面的点击跳转详情页；
function Trans(){
	var _buy1=document.getElementById("buy1");
	var _cover1=document.getElementById("cover1");
	_buy1.onmouseover=function(){
		_buy1.style.cursor="pointer";
	}
	_cover1.onmouseover=function(){
		_cover1.style.backgroundColor="red";
	}
	_cover1.onmouseout=function(){
		_cover1.style.background="rgba(0,0,0,0)";
	}
}
function Events(){
	var _buttJump=document.getElementById("buttJump");
	var _car1=document.getElementById("car1");//狗游戏按钮；
	var _bigoneX=document.getElementById("bigoneX");
	_buttJump.onclick=function(){
		window.location.href="detail1.html"
	}
	_car1.onclick=function(){
		document.getElementById("Bigger").style.display="block";
		_bigoneX.onclick=function(){
			document.getElementById("Bigger").style.display="none";
		}
	}
}

	Trans();
	Events();
	Slider();
	Fixed();




