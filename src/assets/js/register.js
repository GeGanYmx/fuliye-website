`use strict`;
function callRegister(data, callback) {
  $.ajax({
    type: "post",
    url: url + "api/sys/registerByEmail",
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
//两个name & company & country
function isName(s) {
  var patrn = /^(\w){1,20}$/;
  if (!patrn.exec(s)) return false; return true
}
// 邮箱
function isEmail(s) {
  var patrn = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
  if (!patrn.exec(s)) return false; return true
}


//检测必填项是否都已填写
//初始化所有状态
var statusObj = {
  firstName: 0,
  lastName: 0,
  email: 0,
  pwd: 0,
  pwd2: 0,
  company: 0,
  country: 0,
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
    $("#create").removeAttr("disabled");
  } else {
    $("#create").attr("disabled", "disabled");
  }
}

//页面加载完成
$(function () {

  let href = location.href;
  href = href.substring(0, href.lastIndexOf("/")) + "/success.html";
  //传链接
  $("#link").val(href);

  // 禁用密码确认框 提交按钮
  $("#pwd2").attr("disabled", "disabled");
  $("#create").attr("disabled", "disabled");


  //first name 检测   同last tname
  $("#firstName").blur(function (e) {
    e.preventDefault();
    if ($("#firstName").val().length) {//输入了name
      if (isName($("#firstName").val())) {//通过检测
        $("#firstName").removeClass("danger");
        $("#firstName").addClass("success");
        statusObj.firstName = 1;
        checkSubmitButton()
      } else {
        statusObj.firstName = 0;

        $("#firstName").removeClass("success");
        $("#firstName").addClass("danger");
        swal({
          title: "Tips",
          text: "Please enter a first name that \n only contains letters and numbers.",
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
      statusObj.firstName = 0;
      $("#firstName").removeClass("success");
      $("#firstName").removeClass("danger");
    }
  })

  //验证last tname
  $("#lastName").blur(function (e) {
    e.preventDefault();
    if ($("#lastName").val().length) {//输入了name
      if (isName($("#lastName").val())) {//通过检测
        $("#lastName").removeClass("danger");
        $("#lastName").addClass("success");
        statusObj.lastName = 1;
        checkSubmitButton()
      } else {
        statusObj.lastName = 0;
        $("#lastName").removeClass("success");
        $("#lastName").addClass("danger");
        swal({
          title: "Tips",
          text: "Please enter a last name that \n only contains letters and numbers.",
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
      statusObj.lastName = 0;
      $("#lastName").removeClass("success");
      $("#lastName").removeClass("danger");
    }
  })

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

  //两次密码不符检测
  $("#pwd2").blur(function (e) {
    e.preventDefault();
    if ($("#pwd2").val() && ($("#pwd").val() !== $("#pwd2").val())) {
      statusObj.pwd2 = 0;

      $("#pwd2").removeClass("success");
      $("#pwd2").addClass("danger");
      swal("Info", "Password do not match!", "info")
    } else if ($("#pwd2").val() && ($("#pwd").val() == $("#pwd2").val())) {
      $("#pwd2").removeClass("danger");
      $("#pwd2").addClass("success");
      statusObj.pwd2 = 1;
      checkSubmitButton()

    } else {
      statusObj.pwd2 = 0;

      $("#pwd2").removeClass("success");
      $("#pwd2").removeClass("danger");
    }
  });


  //检测company
  $("#company").blur(function (e) {
    e.preventDefault();
    if ($("#company").val().length) {//输入了name
      if (isName($("#company").val())) {//通过检测
        $("#company").removeClass("danger");
        $("#company").addClass("success");
        statusObj.company = 1;
        checkSubmitButton()
      } else {
        statusObj.company = 0;

        $("#company").removeClass("success");
        $("#company").addClass("danger");
        swal({
          title: "Tips",
          text: "Please enter a company that \n only contains letters and numbers.",
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
      statusObj.company = 0;
      $("#company").removeClass("success");
      $("#company").removeClass("danger");
    }
  })

  //检测country
  $("#country").blur(function (e) {
    e.preventDefault();
    if ($("#country").val().length) {//输入了name
      if (isName($("#country").val())) {//通过检测
        $("#country").removeClass("danger");
        $("#country").addClass("success");
        statusObj.country = 1;
        checkSubmitButton()
      } else {
        statusObj.country = 0;

        $("#country").removeClass("success");
        $("#country").addClass("danger");
        swal({
          title: "Tips",
          text: "Please enter a country that \n only contains letters and numbers.",
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
      statusObj.country = 0;
      $("#country").removeClass("success");
      $("#country").removeClass("danger");
    }
  })

  //全填写后解除禁止
  $("#textgroup").hover(function () {
    if (checkAll(statusObj)) {
      $("#create").removeAttr("disabled");
    } else {
      $("#create").attr("disabled", "disabled");
    }
  }
  );

  //表单提交
  $('#form1').submit(function (e) {
    e.preventDefault();

    //复选框选择检测
    if (!document.getElementById('checkbox-2').checked) {
      swal("Info", "Please confirm and tick! ", "info")
      return false;
    }
    //调注册接口
    callRegister($("#form1").serializeObject(), function (res) {
      console.log(res);
      if (res.data.code == 200) {
        swal("Done!", "Congratulations！", "success")
          .then(function (value) {
            // localStorage.token = res.data.token;//改用token
            location.href = "sentemail.html";
          })
      } else if (res.data.code == 4000) {
        console.log('注册失败,邮箱已被注册！')
        swal("Failed!", "Mailbox has been registered!", "error")
      } else {
        console.log('注册失败');
        swal("Failed!", "Other reasons!", "error")
      }
    })
  })

})




