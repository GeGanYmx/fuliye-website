//页面检查是否登录状态
$(
    function (data, callback) {  
        let token=localStorage.token||undefined;
        if(token){
            alert('已登陆')
            location.href='home.html'
        }else{
            console.log("等待激活");
        }
    }
)