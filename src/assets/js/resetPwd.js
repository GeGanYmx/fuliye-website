function GetQueryString(name)   //获取数据函数
  {
       var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
       var r = window.location.search.substr(1).match(reg);
       if(r!=null)return  unescape(r[2]); return null;
  }
// 激活界面函数,检查页面参数
function callReset(data, callback) { 
  $.ajax({
    type: "get",
    url: url+"api/sys/resetPasswordForWeb",
    data: data,
    dataType: "json",
    success: callback
  });
}

//校验密码：只能输入6-20个字母、数字、下划线  
function isPasswd(s) {
  var patrn = /^(\w){6,20}$/;
  if (!patrn.exec(s)) return false; return true
}

//检测必填项是否都已填写
  //初始化所有状态
  var statusObj={
    pwd:0,
    pwd2:0,
  }
  function checkAll(statusObj){
    for (const status in statusObj) {
      if(statusObj[status] == 0){
        return 0;
      }
  }
  return 1;
  }
 
 




$(function(){
  
   //赋值
   let id=localStorage.id;  
   $("#id").val(id);

  // 禁用密码确认框 提交按钮
  $("#pwd2").attr("disabled", "disabled");
  $("#submit").attr("disabled", "disabled");

  //密码框改变时 清空确认密码区域
  $("#pwd").change(function (e) {
    e.preventDefault();
    $("#pwd2").val("");
    $("#pwd2").removeClass("success");
    $("#pwd2").removeClass("danger");
  });

  //检测密码强度
  $("#pwd").blur(function (e) {
    e.preventDefault();
    if ($("#pwd").val().length) {//输入了密码
      if (isPasswd($("#pwd").val())) {//通过检测
        $("#pwd").removeClass("danger");
        $("#pwd").addClass("success");
        $("#pwd2").removeAttr("disabled");
      statusObj.pwd=1;

      } else {
      statusObj.pwd=0;

        $("#pwd").removeClass("success");
        $("#pwd").addClass("danger");
        swal({
          title: "Tips",
          text: "Please enter a password that \n only contains 6-20 letters or numbers.",
          icon: "warning",
          buttons: {
            confirm: {
              text: "OK",
              value: "OK",
              visible: true,
              className: "",
              closeModal: true
            }
          },
        })
      };
    } else {
      statusObj.pwd=0;

      $("#pwd").removeClass("success");
      $("#pwd").removeClass("danger");
    }
  })

  //两次密码不符检测
  $("#pwd2").blur(function (e) {
    e.preventDefault();
    if ($("#pwd2").val() && ($("#pwd").val() !== $("#pwd2").val())) {
      statusObj.pwd2=0;

      $("#pwd2").removeClass("success");
      $("#pwd2").addClass("danger");
      swal("Info", "Password do not martch!", "info")
    } else if ($("#pwd2").val() && ($("#pwd").val() == $("#pwd2").val())) {
      $("#pwd2").removeClass("danger");
      $("#pwd2").addClass("success");
      statusObj.pwd2=1;

    } else {
      statusObj.pwd2=0;

      $("#pwd2").removeClass("success");
      $("#pwd2").removeClass("danger");
    }
  });

  //全填写后解除禁止
$("#btnGroup").hover(function () {
  if(checkAll(statusObj)){
      $("#submit").removeAttr("disabled");
    }else{
      $("#submit").attr("disabled","disabled");
    }
  }
);

  $("form").submit(function (e) { 
      e.preventDefault();
      callReset($("form").serialize(), function (res) {
        console.log(res);
        if( res.message == 200){
          console.log("重置成功!")
          swal("Done!","Congratulation！","success")
          .then(function(value){
            location.href="login.html"
          })
        }else {
          console.log("重置失败！")
          swal("Failed","Other reasons.","error")
        }
      })
  });

}
  
)