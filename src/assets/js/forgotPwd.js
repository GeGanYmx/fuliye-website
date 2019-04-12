function callForgot(data,callback){
    $.ajax({
        type: "POST",
        url: "http://140.207.48.210:8022/api/sys/forget",
        data: JSON.stringify(data),
        dataType: "json",
        success: callback
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
$(document).ready(function () {
    let href=location.href;
    href=href.substring(0,href.lastIndexOf("/"))+"/resetPwd.html"; 
    $("#form").submit(function (e) { 
        e.preventDefault();
        $("#link").val(href);
        console.log($("#form").serializeObject())
        callForgot($("#form").serializeObject(), function (res) {
            console.log(res)
            if(res.data.code==200){
                swal("Done！","Congratulation！","success")
                .then(function(value){
                    locationid=res.data.id;
                    location.href="forgotInfo.html"
                })
            }else if(res.data.code==400){
                swal("Failed!","Other reasons.","error")
            }else{
                swal("Failed!","Your mailbox is not registered yet！","error")
            }
        })
    });
});

