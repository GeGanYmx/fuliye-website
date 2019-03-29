`use strict`;
// var register={
//     register:function(){
//         //alert('点击注册');
//      console.log("点击提交表单");
//       var pwd=document.getElementById("pwd");
//       var md5_pwd=document.getElementById("md5_pwd");
//        md5_pwd.value=str_md5(pwd.value);
//      /* md5_pwd=toMD5(pwd.value);*/
//       return true;
//     }
// }


//激活界面函数,检查页面参数
// http://demo.adinnet.cn/demo2/fuliye/activation.html
// function callActivation(data, callback) { 
//   if(data.ok) {
//     location.href="login.html"
//   } else {
//     alert("激活出错，请稍后再试！")
//   }
// }
// let id=GetQueryString(id);
// let code=GetQueryString(GetQueryString);
// callActivation({id,code}, function (data) {
//     if(data.ok) {
//       location.href="login.html"
//     } else {
//       alert("激活出错，请稍后再试！")
//     }
// })
// function GetQueryString(name)   //获取数据函数
//   {
//        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
//        var r = window.location.search.substr(1).match(reg);
//        if(r!=null)return  unescape(r[2]); return null;
//   }

// function callLogin(data, callback) { 
// }




//假接口，模拟接收服务器callback
function callRegister(data, callback) {
  console.log(data)
  callback({
    error_code: 0,
    data: {
     code: "注册成功！",
    id: "15805611ef0f44b1b32cf48012d03adf"
    }
  })

  // $.ajax({
  //   type: "post",
  //   url: "http://140.207.48.210:8022/",
  //   data: data,
  //   dataType: "json",
  //   success: callback
  // });
}

$(function() {
  $('#form1').submit(function(e) {
    e.preventDefault();
    callRegister($("#form1").serialize(), function (response) {
      console.log(response);
      if(response.error_code===0){
        alert(response.data.code);
        alert(response.data.id);
        // location.href="login.html"; //发邮件界面弄好后跳转到邮件界面。
      }
      alert("register调用成功")
    })
  })
})


// 密码一致检测：
function validate() {
  var pwd = $("#pwd").val();
  var pwd2 = $("#pwd2").val();
// <!-- 对比两次输入的密码 -->
  if(pwd === pwd2){
    $("#pwd2").css("border","1px solid green");
    $("#creat").removeAttr("disabled");
  }
  else {
    $("#pwd2").css("border","1px solid red")
    $("creat").attr("disabled","disabled");  
  }
}
