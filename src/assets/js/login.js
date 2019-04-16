    function callLogin(data, callback) { 
        $.ajax({
            type: "post",
            url: url+"api/sys/webLogin",
            contentType:"application/json",
            data: JSON.stringify(data),
            dataType: "json",
            success: callback,
        });
    }

    $.fn.serializeObject = function() {
      var o = {};
      var a = this.serializeArray();
      $.each(a, function() {
          if (o[this.name]) {
              if (!o[this.name].push) {
                  o[this.name] = [ o[this.name] ];
              }
              o[this.name].push(this.value || '');
          } else {
              o[this.name] = this.value || '';
          }
      });
      return o;
  };
    $(function() {
        $('#form2').submit(function(e) {
          e.preventDefault();
          callLogin($("#form2").serializeObject(), function (res) {
            console.log($("#form2").serializeObject());
            console.log(res);
            if(res.data.code==200){
              console.log("UserNamae:"+res.data.name);
              localStorage.token=res.data.token;
              localStorage.username=res.data.name;
              swal("Done!","Congratulations!","success")
              .then(function(value){
                location.href="home.html"; 
              });
            }else if(res.data.code==400){
              swal("Failed!","Password not match!","error")
              console.log("登录失败：密码错误！");
            }else if(res.data.code==4000){
              swal("Failed!","Account does not exist！","error")
              console.log("登录失败：用户不存在！");
            }else if(res.data.code==5000){
              swal("Failed!","Account inactivated！","error")
              console.log("登录失败：账号未激活！！");
            }
          })
        })
      })

      