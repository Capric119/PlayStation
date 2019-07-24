	//		标题栏的MyPlayStation
			function event(){
				var _mine=document.getElementById("mine");
				_mine.onmouseover=function(){
					this.style.color="blue";
				}
				_mine.onmouseout=function(){
					this.style.color="white";
				}
			}
   //             主体部分主体部分啊
			// 轮播图
			function slider(){
				var _pics=document.getElementById("pic1");
				var _arrL=document.getElementById("arrow-left");
				var _img=document.getElementById("pic1-2");
				var _arrR=document.getElementById("arrow-right");
				var i=1;
				_arrL.onclick=function(){
					_arrL.style.cursor="pointer";
					_img.src="../images/"+i+".png";
					i++;
					if(i>2){
						i=1;
					}
				}
				_arrR.onclick=function(){
					_arrR.style.cursor="pointer";
					_img.src="../images/"+i+".png";
					i--;
					if(i<1){
						i=2;
					}
				}
				var _timer=window.setInterval(function(){
					_img.src="../images/"+i+".png";
					i--;
					if(i<1){
						i=2;
					}
				},3000)
			}
			//这是底部的"返回顶部"
			function turnUp(){
				var _turn=document.getElementById("turnUp");
				_turn.onmouseover=function(){
					_turn.style.cursor="pointer";
				}
				_turn.onclick=function(){
					document.documentElement.scrollTop=0;
				}
			}
			
			
			function main(){
				event();
				turnUp();
				slider();
			}
			window.onload=main;
			