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
}


//每个页面检查是否登录状态
$(
    function getLoginUser(data, callback) {  
        let token=localStorage.token||undefined;
        if(token){
            console.log("已登陆");
        }else{
            console.log("未登录");
        }
    }
)

//登出清除token
$(
    $('#logout').click(function (e) { 
        e.preventDefault();
        callLogout();
    })
)