
`use strict`;
var Global={
    register:function(){
        window.location.href='register.html';
    },
    login:function(){
        window.location.href='login.html';
    }
}

function callLogout(data, callback) { 
    $.ajax({
        type: "post",
        url: url+"api/sys/webLogout",
        data: data,
        dataType: "json",
        success: callback
    });
}

// function callLogout(data, callback) {
//     $.ajax({
//       type: "post",
//         url: "http://140.207.48.210:8022/api/sys/registerByEmail",
//       data: data,
//       dataType: "json",
//       success: callback
//     });
//   }


//每个页面检查是否登录状态
$(
    function getLoginUser(data, callback) {  
        let token=localStorage.token||undefined;
        if(token){
            console.log("已登陆");
            $("#username").text(localStorage.username);
            $("#loged").removeClass("hidden");
        }else{
            console.log("未登录");
            $("#unlog").removeClass("hidden");
        }
    }
)

//登出清除token
$(function(){
    $('#logout').click(function (e) { 
        e.preventDefault();
        let token={"token":localStorage.token}
        callLogout(token,function(res){
            console.log(res)
            if(res.code==200){
                swal({
                    title:"Done!",
                    text:"You have logged out！",
                    icon:"success",
                    button:false,
                    timer:1500,
                })
                .then(function(){
                    delete localStorage.token
                    delete localStorage.username
                    location.href="home.html"
                })
                
            }
        });
    })
    }
)



// 实际地址
var url="http://47.102.112.8:8088/";

//本地测试URL
// var url="http://10.40.254.134:8080/fuliye-api/";




//formdata转成对象格式
$.fn.serializeObject = function()   
{   
   var o = {};   
   var a = this.serializeArray();   
   $.each(a, function() {   
       if (o[this.name]) {   
           if (!o[this.name].push) {   
               o[this.name] = [o[this.name]];   
           }   
           o[this.name].push(this.value || '');   
       } else {   
           o[this.name] = this.value || '';   
       }   
   });   
   return o;   
};  