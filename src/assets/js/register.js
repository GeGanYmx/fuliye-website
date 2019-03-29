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




//假接口，模拟接收服务器callback
function callRegister(data, callback) {
  // console.log(data)
  // callback({
  //   error_code: 0,
  //   data: {
  //    code: "注册成功！",
  //   id: "15805611ef0f44b1b32cf48012d03adf"
  //   }
  // })

  $.ajax({
    type: "post",
    url: "http://140.207.48.210:8022/api/sys/registerByEmail",
    data: data,
    dataType: "json",
    success: callback
  });
}

$(function() {

  let href=location.href;
  href=href.substring(0,href.lastIndexOf("/"))+"/success.html"; 
  $('#link').val(href)
  $('#form1').submit(function(e) {
    e.preventDefault();
    callRegister($("#form1").serialize(), function (response) {
      console.log(response);
      if(response.error_code===0){
        alert(response.data.code);
        alert(response.data.id);
        location.href="sentemail.html"; 
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
