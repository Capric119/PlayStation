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
Fixed();