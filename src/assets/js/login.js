function callLogin(data, callback) {
  $.ajax({
    type: "post",
    url: url + "api/sys/webLogin",
    contentType: "application/json",
    data: JSON.stringify(data),
    dataType: "json",
    success: callback,
  });
}

$.fn.serializeObject = function () {
  var o = {};
  var a = this.serializeArray();
  $.each(a, function () {
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


// 邮箱
function isEmail(s) {
  var patrn = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
  if (!patrn.exec(s)) return false; return true
}

//校验密码：只能输入6-20个字母、数字、下划线  
function isPasswd(s) {
  var patrn = /^(\w){6,20}$/;
  if (!patrn.exec(s)) return false; return true
}

//检测必填项是否都已填写
//初始化所有状态
var statusObj = {
  email: 0,
  pwd: 0,
}
function checkAll(statusObj) {
  for (const status in statusObj) {
    if (statusObj[status] == 0) {
      return 0;
    }
  }
  return 1;
}
//失焦检查所有状态
function checkSubmitButton() {
  if (checkAll(statusObj)) {
    $("#Login").removeAttr("disabled");
  } else {
    $("#Login").attr("disabled", "disabled");
  }
}

$(function () {

  // 禁用密码确认框 提交按钮
  $("#Login").attr("disabled", "disabled");

  //验证邮箱
  $("#email").blur(function (e) {
    e.preventDefault();
    if ($("#email").val().length) {//输入了name
      if (isEmail($("#email").val())) {//通过检测
        $("#email").removeClass("danger");
        $("#email").addClass("success");
        statusObj.email = 1;
        checkSubmitButton()
      } else {
        statusObj.email = 0;
        $("#email").removeClass("success");
        $("#email").addClass("danger");
        swal({
          title: "Tips",
          text: "Please enter a valid email address that consists of \n only letters, numbers, periods, and the @ sign.",
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
      statusObj.email = 0;
      $("#email").removeClass("success");
      $("#email").removeClass("danger");
    }
  })

  //检测密码强度
  $("#pwd").blur(function (e) {
    e.preventDefault();
    if ($("#pwd").val().length) {//输入了密码
      if (isPasswd($("#pwd").val())) {//通过检测
        $("#pwd").removeClass("danger");
        $("#pwd").addClass("success");
        $("#pwd2").removeAttr("disabled");
        statusObj.pwd = 1;
        checkSubmitButton()

      } else {
        statusObj.pwd = 0;

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
      statusObj.pwd = 0;

      $("#pwd").removeClass("success");
      $("#pwd").removeClass("danger");
    }
  })


  //重置按钮清除所有内容
$("#Cancel").click(function (e) { 
  e.preventDefault();
  //清空内容
$("#email").val("");
$("#email").removeClass("success");
$("#email").removeClass("danger");
$("#pwd").val("");
$("#pwd").removeClass("success");
$("#pwd").removeClass("danger");


  // 禁用密码确认框 提交按钮
  $("#Login").attr("disabled", "disabled");

});

  //全填写后解除禁止
  $("#btnGroup").hover(function () {
    if (checkAll(statusObj)) {
      $("#Login").removeAttr("disabled");
    } else {
      $("#Login").attr("disabled", "disabled");
    }
  }
  );



  $('#form2').submit(function (e) {
    e.preventDefault();
    callLogin($("#form2").serializeObject(), function (res) {
      console.log($("#form2").serializeObject());
      console.log(res);
      if (res.data.code == 200) {
        console.log("UserNamae:" + res.data.name);
        localStorage.token = res.data.token;
        localStorage.username = res.data.name;
        swal("Done!", "Congratulations!", "success")
          .then(function (value) {
            location.href = "home.html";
          });
      } else if (res.data.code == 400) {
        swal("Failed!", "Password not match!", "error")
        console.log("登录失败：密码错误！");
      } else if (res.data.code == 4000) {
        swal("Failed!", "Account does not exist！", "error")
        console.log("登录失败：用户不存在！");
      } else if (res.data.code == 5000) {
        swal("Failed!", "Account inactivated！", "error")
        console.log("登录失败：账号未激活！！");
      }
    })
  })
})

