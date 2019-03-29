var num=5;
var interval=setInterval(function(){
if(num==0){
clearInterval(interval);
}
countdown.innerHTML=num--;
},1000);