function callForgot(data, callback) {
  $.ajax({
    type: "get",
    url: url + "api/sys/forget",
    data: data,
    dataType: "json",
    success: callback
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

//检测必填项是否都已填写
//初始化所有状态
var statusObj = {
  email: 0,
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
    $("#submit").removeAttr("disabled");
  } else {
    $("#submit").attr("disabled", "disabled");
  }
}

$(document).ready(function () {
  let href = location.href;
  href = href.substring(0, href.lastIndexOf("/")) + "/resetPwd.html";

  //验证邮箱
  $("#email").blur(function (e) {
    e.preventDefault();


    // 禁用密码确认框 提交按钮
    $("#submit").attr("disabled", "disabled");

    //验证邮箱
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

  //全填写后解除禁止
  $("#btnGroup").hover(function () {
    if (checkAll(statusObj)) {
      $("#submit").removeAttr("disabled");
    } else {
      $("#submit").attr("disabled", "disabled");
    }
  }
  );





  $("#form").submit(function (e) {
    e.preventDefault();
    $("#link").val(href);
    console.log($("#form").serializeObject())
    // callForgot($("#form").serializeObject(), function (res) {
    callForgot($("#form").serialize(), function (res) {

      console.log(res)
      if (res.data.code == 200) {
        swal("Done！", "Congratulation！", "success")
          .then(function (value) {
            localStorage.id = res.data.id;
            location.href = "forgotInfo.html"
          })
      } else if (res.data.code == 400) {
        swal("Failed!", "Other reasons.", "error")
          .then(function () {
            location.href = "forgotPwd.html"
          })
      } else {
        swal("Failed!", "Your mailbox is not registered yet！", "error")
          .then(function () {
            location.href = "forgotPwd.html"
          })
      }
    })
  });
});


