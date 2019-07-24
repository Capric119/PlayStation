//导航栏的固定定位
function fixed(){
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
	let index=0;
	let _timer;
	let _shopSlider=document.getElementById("shopSlider");
	let _beef=document.getElementById("beef");
	window.clearInterval(_timer);
	_timer=window.setInterval(function(){
		var _beef=document.getElementById("beef");
		for(let i=0;i<_beef.children.length;i++){
			_beef.children[i].style.backgroundColor="grey"
		}
		document.getElementById("picS").src="../images/game"+index+".jpg";
		_beef.children[index].style.backgroundColor="white";
		index++;
		if(index>4){
			index=0;
		}
	},3000);
}

Slider();
fixed();




