
function callContact(data, callback) {
    $.ajax({
        type: "post",
        url: url + "api/sys/contactUs",
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
    company: 0,
    country: 0,
    phone: 0,
    occupation: 0,
    subject: 0,
    message: 0,
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

$(function () {



    // 禁用密码确认框 提交按钮
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

    //检测phone
    $("#phone").blur(function (e) {
        e.preventDefault();
        if ($("#phone").val().length) {//输入了name
            if (isName($("#phone").val())) {//通过检测
                $("#phone").removeClass("danger");
                $("#phone").addClass("success");
                statusObj.phone = 1;
                checkSubmitButton()
            } else {
                statusObj.phone = 0;

                $("#phone").removeClass("success");
                $("#phone").addClass("danger");
                swal({
                    title: "Tips",
                    text: "Please enter a phone that \n only contains letters and numbers.",
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
            statusObj.phone = 0;
            $("#phone").removeClass("success");
            $("#phone").removeClass("danger");
        }
    })

    //检测occupation
    $("#occupation").blur(function (e) {
        e.preventDefault();
        if ($("#occupation").val().length) {//输入了name
            if (isName($("#occupation").val())) {//通过检测
                $("#occupation").removeClass("danger");
                $("#occupation").addClass("success");
                statusObj.occupation = 1;
                checkSubmitButton()
            } else {
                statusObj.occupation = 0;

                $("#occupation").removeClass("success");
                $("#occupation").addClass("danger");
                swal({
                    title: "Tips",
                    text: "Please enter a occupation that \n only contains letters and numbers.",
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
            statusObj.occupation = 0;
            $("#occupation").removeClass("success");
            $("#occupation").removeClass("danger");
        }
    })

    //检测subject
    $("#subject").blur(function (e) {
        e.preventDefault();
        if ($("#subject").val().length) {//输入了name
            if (isName($("#subject").val())) {//通过检测
                $("#subject").removeClass("danger");
                $("#subject").addClass("success");
                statusObj.subject = 1;
                checkSubmitButton()
            } else {
                statusObj.subject = 0;

                $("#subject").removeClass("success");
                $("#subject").addClass("danger");
                swal({
                    title: "Tips",
                    text: "Please enter a subject that \n only contains letters and numbers.",
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
            statusObj.subject = 0;
            $("#subject").removeClass("success");
            $("#subject").removeClass("danger");
        }
    })

    //检测message
    $("#message").blur(function (e) {
        e.preventDefault();
        if ($("#message").val().length) {//输入了name
            if (isName($("#message").val())) {//通过检测
                $("#message").removeClass("danger");
                $("#message").addClass("success");
                statusObj.message = 1;
                checkSubmitButton()
            } else {
                statusObj.message = 0;

                $("#message").removeClass("success");
                $("#message").addClass("danger");
                swal({
                    title: "Tips",
                    text: "Please enter a message that \n only contains letters and numbers.",
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
            statusObj.message = 0;
            $("#message").removeClass("success");
            $("#message").removeClass("danger");
        }
    })


    //全填写后解除禁止
    $("#hoverNeed").hover(function () {
        if (checkAll(statusObj)) {
            $("#create").removeAttr("disabled");
        } else {
            $("#create").attr("disabled", "disabled");
        }
    }
    );



    $('form').submit(function (e) {
        e.preventDefault();
        callContact($("form").serializeObject(), function (res) {
            console.log($("form").serializeObject());
            console.log(res);
            if (res.code == 200) {
                swal({
                    title: "Done!",
                    text: "You have sent the eamil to us, thank you!",
                    icon: "success",
                    buttons: false,
                    timer: 2000,
                })
                    .then(function (value) {
                        location.href = "contact_us.html"
                    });
            } else {
                swal({
                    title: "Falied!",
                    text: "Please try again!",
                    icon: "error",
                    buttons: false,
                    timer: 2000,
                })
            }
        })
    })
})

