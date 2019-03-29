var num=5;
var interval=setInterval(function(){
if(num==0){
clearInterval(interval);
location.href="home.html"
}
countdown.innerHTML=num--;
},1000);