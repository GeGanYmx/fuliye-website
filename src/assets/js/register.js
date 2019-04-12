`use strict`;
function callRegister(data, callback) {
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
        swal("Info","Please confirm that the checkbox has been checked.","info")
        return false;
      }
      if($("#pwd2").val() && ($("#pwd").val()!==$("#pwd2").val())){
        swal("Info","Please confirm password.","info")
        return false;
      }
      $("#link").val(href);
      callRegister($("#form1").serialize(), function (res) {
        console.log(res);
        if(res.data.code==200){
        swal("Done!","Congratulations！","success")
        .then(function(value){
          location.href="sentemail.html";
          localStorage.id= res.data.id;
        })
          console.log('注册成功 code: '+res.data.code)
        }else if(res.data.code==4000){
          console.log('注册失败,邮箱已被注册！')
          swal("Failed!","Mailbox has been registered!","error")
        }else{
          console.log('注册失败');
          swal("Failed!","Other reasons!","error")
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
