function judge(){
				var _in1=document.getElementById("in1");
				var _in2=document.getElementById("in2");
				_in1.onchange=function(e){
					e=e||window.event;
					var _me=this;
					if(this.value!="" && _in2.value!=""){
						document.getElementById("signIn").style.background="blue";
					}else{
						document.getElementById("signIn").style.background="skyblue";
					}
					_in2.onchange=function(event){
						event=event||window.event;
						if(_me.value!="" && this.value!=""){
							document.getElementById("signIn").style.background="blue";
						}else{
							document.getElementById("signIn").style.background="skyblue";
						}
					}
				}
			}

function varify(){
	var _signIn=document.getElementById("signIn");
	var _warn=document.getElementById("warn");
	var _mail=/\w+@\w+\.\w+/;
		_signIn.onclick=function(){
			var _input1=document.getElementById("in1");
			if(_input1.value===""){
				_warn.innerText="邮箱格式不能为空";
				return(false);
			}else if(!_mail.test(_input1.value)){
				_warn.innerText="邮箱格式错误"
				return(false);
			}
		}
}
	//There is another file contains
