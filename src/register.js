console.log("调用成功");
var Register={
    register:function(){
        //alert('点击注册');
     console.log("点击提交表单");
      var pwd=document.getElementById("pwd");
      var md5_pwd=document.getElementById("md5_pwd");
       md5_pwd.value=str_md5(pwd.value);
     /* md5_pwd=toMD5(pwd.value);*/
      return true;
    }
}
 