var allFAQData = [
{
    q: "What programming language does EXOPS SDK support?",
    a: "SDK supports C++, C#, Python, MATLAB programming language."
},
{
    q: "What is the development environment of EXOPS SDK?",
    a: "SDK supports Visual Studio, PyCharm,  LabView, MATLAB developing environment."
},
{
    q: "On the pre-customized SDK packages, how can SDK provide reference to quantify and make modification on current gait pattern to user desired gait pattern with user’s customization gait pattern?",
    a: "Pre-customized gait pattern would be the next stage of our open platform system but currently, Fourier’s MMU controller board couldn’t be connected to other sensor. User can only self-customize and configure the system or algorithm value for own data processing. If users have already had a fully customized gait value, National Instrument CompactRIO system or CAN-PCI would be an option."
},
{
    q:"What kind of parameters the EXOPS users can adjust via SDK?",
    a:"The adjustment of gait trajectory, motor torque, motor speed and acceleration."
},
{
    q:"Can users directly control the Actuators of Fourier X2 without SDK? ",
    a:"Yes, users can control the actuators through the motor driver via CANopen."
},
{
    q:"Can user directly acquire sensor data from Fourier X2?",
    a:"  Yes, we offer two different choices: <br/>You can acquire sensor date from our MMU via SDK;<br/>You can purchase standard data acquisition hardware, such as PXI from National Instruments."
},
{
    q:"How EXOPS users can control the Fourier X2?",
    a:" We offer three different choices: <br/>You can use the CAN Card; <br/>You can use the CompactRIO from National Instruments; <br/>You can use the X2 build-in MMU. <br/>"
}
];


var support={
    search:function(){
       console.log('测试');
    },
    toggleAnswer:function(e){
        $(function(){
            var answer=$(e).parent().parent().find('div.article-answer');
            console.log(answer.css('display'));
            if(answer.css('display')==='none'){
                answer.slideDown('slow');
                $(e).attr('src','./assets/up.png');
                $(e).parent().children('span').css('color','#0086D1');
            
            }else{
                answer.slideUp('slow');
                $(e).attr('src','./assets/down.png');
                $(e).parent().children('span').css('color','#606470');
            
            }
        });
    },
    toggleTab:function (e) {

        
    }
}
function imgInit() { 
    var imgs=document.getElementById("myTab").getElementsByTagName("img");
    var as=document.getElementById("myTab").getElementsByTagName("a");
    for (const a of as) {
        spans=a.getElementsByTagName("span");
        spans[0].classList.remove("darker")
    }
    for (const img of imgs) {
        img.setAttribute("src","./assets/"+img.getAttribute("id")+".png")
    }
 }

$(document).ready(function () {

   (function ($) {
    $.getUrlParam = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }
   })(jQuery);

    //获取url参数
    console.log('传入的参数值：',$.getUrlParam('key'));
    var key=$.getUrlParam('key').toLowerCase();

    //初始化数据
    var resAry = allFAQData.filter(function(v){
        return (v.q.toLowerCase().indexOf(key) >= 0) || (v.a.toLowerCase().indexOf(key) >= 0) 
    })
    console.log('--------------------',resAry);
    var html='';
    for(var i=0;i<resAry.length;i++){
        html+=`<div class="question-answer-active2">
        <div class="article-question">
            <div class="questionQ">Q: </div>
            <span style="color:#0086D1;">
              ${resAry[i].q}
            </span>
        
        </div>
        
        <div class="article-answer2">
            <div class="answer-A-parent"><span class="article-answer-A">A:</span></div>
            <span class="article-answer-smaltext">
              ${resAry[i].a}
            </span>
         </div>
        </div> `
    }
    $('#data').html(html);

    //初始化dataList
    if(typeof(Storage)!=='undefined'){
        console.log('能进行localStroge');
        if(key.trim().length!==0){
             //没有则在本地创建用户输入历史
          var userInput=key.trim().toLowerCase();
          console.log('input data-----------',userInput);
         if(!localStorage.getItem('input_history')){
            console.log('没有进行本地用户输入历史缓存');
            // localStorage.userInput=userInput;
             var array=[userInput];
             localStorage.setItem('input_history',JSON.stringify(array));

           }else{
               var arrayString=localStorage.getItem('input_history');
               var array=JSON.parse(arrayString);
               if(array.indexOf(userInput)==-1)
                 array.unshift(userInput);
               console.log('----------------------array',array);
               console.log('已经存在！',localStorage.getItem('input_history'))
               localStorage.setItem('input_history',JSON.stringify(array));

           }
           var dataList=''
           var array=JSON.parse(localStorage.getItem('input_history'));
           console.log('dataList-------------------',dataList)
           for(var i=0;i<array.length;i++){
               dataList+=`<option value=${array[i]}>`
            }
           $('#autos').html(dataList);
    }
    

    }else{
        console.error('不存在localStroge');
    }
  

    

  
    $('#sear-div').click(function(){
        
        var keyword =$('#search').val().trim().toLowerCase();
        resAry = allFAQData.filter(function(v){
            return (v.q.toLowerCase().indexOf(keyword) >= 0) || (v.a.toLowerCase().indexOf(keyword) >= 0) 
        })

        console.log('搜索到的匹配数据res',resAry);
        html=''
        for(var i=0;i<resAry.length;i++) {
            html += `<div class="question-answer-active2">
            <div class="article-question">
                <div class="questionQ">Q: </div>
                <span style="color:#0086D1;">
                  ${resAry[i].q}
                </span>
            
            </div>
            
            <div class="article-answer2">
                <div class="answer-A-parent"><span class="article-answer-A">A:</span></div>
                <span class="article-answer-smaltext">
                  ${resAry[i].a}
                </span>
             </div>
            </div> `
        }
        $('#data').html(html);
         
        if(typeof(Storage)!=='undefined'){
            console.log('能进行localStroge');
            if($('#search').val().trim().length!==0){
                 //没有则在本地创建用户输入历史
              let userInput=$('#search').val().trim().toLowerCase();
              console.log('input data-----------',userInput);
             if(!localStorage.getItem('input_history')){
                console.log('没有进行本地用户输入历史缓存');
                // localStorage.userInput=userInput;
                 var array=[userInput];
                 localStorage.setItem('input_history',JSON.stringify(array));

               }else{
                   var arrayString=localStorage.getItem('input_history');
                   var array=JSON.parse(arrayString);
                   if(array.indexOf(userInput)==-1)
                     array.unshift(userInput);
                   console.log('----------------------array',array);
                   console.log('已经存在！',localStorage.getItem('input_history'))
                   localStorage.setItem('input_history',JSON.stringify(array));

               }
               var dataList=''
               var array=JSON.parse(localStorage.getItem('input_history'));
               console.log('dataList-------------------',dataList)
               for(var i=0;i<array.length;i++){
                   dataList+=`<option value=${array[i]}>`
                }
               $('#autos').html(dataList);
        }
        

        }else{
            console.error('不存在localStroge');
        }
      
       
        
    });

    $(".search-info").click(function (e) { 
        e.preventDefault();
        $("#search").val(this.innerHTML); 
    });    
    var imgs=document.getElementById("myTab").getElementsByTagName("img");
    var as=document.getElementById("myTab").getElementsByTagName("a");
    for (const a of as) {
        a.addEventListener("click",function () { 
            imgInit();
            let imgs=a.getElementsByTagName("img"),
            spans=a.getElementsByTagName("span");
            imgs[0].setAttribute("src","./assets/"+imgs[0].getAttribute("id")+"active.png")
            spans[0].classList.add("darker")
         })
    }

    
});



