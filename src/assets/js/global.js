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
    delete localStorage.token;
    location.href="home.html"
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
        callLogout();
    })
    }
)
