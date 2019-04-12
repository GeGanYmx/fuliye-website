
    function callContact(data, callback) { 
        $.ajax({
            type: "post",
            url: "http://140.207.48.210:8022/api/sys/contactUs",
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
        $('form').submit(function(e) {
            e.preventDefault();
            callContact($("form").serializeObject(), function (res) {
              console.log($("form").serializeObject());
              console.log(res);
              if(res.code==200){
                swal({
                    title:"Done!",
                    text:"You have sent the eamil to us, thank you!",
                    icon:"success",
                    buttons:false,
                    timer:2000,
                })
                .then(function(value){
                    location.href="contact_us.html"
                });
              }else{
                swal({
                    title:"Falied!",
                    text:"Please try again!",
                    icon:"error",
                    buttons:false,
                    timer:2000,
                })
              }
            })
          })
        })
  
        