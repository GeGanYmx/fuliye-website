// console.log("调用成功 from login");

    function callLogin(data, callback) { 
        $.ajax({
            type: "post",
            url: "http://140.207.48.210:8022/api/sys/webLogin",
            data: data,
            dataType: "dataType",
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

    $(function() {
        $('#form2').submit(function(e) {
          e.preventDefault();
          callLogin($("#form2").serialize(), function (response) {
            console.log(response);
            if(response.error_code===0){
              alert(response.data.name);
              location.href="home.html"; 
              localStorage.token=response.data.token;
            }
            alert("login调用成功")
          })
        })
      })