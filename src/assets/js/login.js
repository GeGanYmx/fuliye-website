// console.log("调用成功 from login");

    function callLogin(data, callback) { 
        $.ajax({
            type: "post",
            url: "http://140.207.48.210:8022/api/sys/webLogin",
            contentType:"application/json",
            data: JSON.stringify($('form').serializeObject()),
            dataType: "json",
            success: callback,
        });

    // console.log(data);
    // callback({
    //     error_code: 0,
    //     data: {
    //       token: "hfkjshHJKHH-fkkkfjf.fjks4322JHHLl",
    //       name:"张三"
    //     }
    //  })

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
          callLogin($("#form2").serializeArray(), function (response) {
            console.log($("#form2").serializeArray());
            console.log(response);
            if(response.code===200){
              console.log("UserNamae:"+response.data.name);
              localStorage.token=response.data.token;
              localStorage.username=response.data.name;
              location.href="home.html"; 
            }else{
              console.log("失败message:"+response.message);
            }
            console.log("login调用成功")
          })
        })
      })

      