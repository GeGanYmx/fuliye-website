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
  let samePsw=validate();
    $('#form1').submit(function(e) {
      e.preventDefault();
      // if(!document.getElementById('checkbox-1').checked || !document.getElementById('checkbox-2').checked){
      if(!document.getElementById('checkbox-2').checked){
        alert("Please confirm that the checkbox has been checked.");
        return false;
      }
      if($("#pwd2").val() && ($("#pwd").val()!==$("#pwd2").val())){
        alert("Please confirm password.");
        return false;
      }
      callRegister($("#form1").serialize(), function (response) {
        console.log(response);
        if(response.data.code==200){
          console.log('注册成功 code: '+response.data.code)
          location.href="sentemail.html"; 
        }else if(response.data.code==4000){
          console.log('注册失败,邮箱已被注册！')
          alert('注册失败,邮箱已被注册！')
        }else{
          console.log('注册失败');
          alert('注册失败');
        }
      })
    })
})


// 密码一致检测：
function validate() {
  var pwd = $("#pwd").val();
  var pwd2 = $("#pwd2").val();
// <!-- 对比两次输入的密码 -->
  if(pwd2 &&(pwd === pwd2)){
    $("#pwd2").css("border","1px solid green");
    $("#creat").removeAttr("disabled");
    return true;
  }
  else if(pwd2 &&(pwd !== pwd2)){
    $("#pwd2").css("border","1px solid red")
    $("creat").attr("disabled","disabled");  
    return false;
  }
}
