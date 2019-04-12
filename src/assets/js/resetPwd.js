function GetQueryString(name)   //获取数据函数
  {
       var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
       var r = window.location.search.substr(1).match(reg);
       if(r!=null)return  unescape(r[2]); return null;
  }
// 激活界面函数,检查页面参数
function callReset(data, callback) { 
  $.ajax({
    type: "post",
    url: "http://140.207.48.210:8022/api/sys/resetPasswordForWeb",
    data: JSON.stringify(data) ,
    dataType: "json",
    success: callback
  });
}
$(function(){
  let id=location.id;
  
  $("form").submit(function (e) { 
      e.preventDefault();
      $("id").val(id);
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
