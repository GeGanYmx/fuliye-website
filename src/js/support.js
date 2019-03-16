var support={
    search:function(){

       console.log('测试');
    },
    toggleAnswer:function(e){
        $(function(){
            var answer=$(e).parent().parent().find('div.article-answer');
            console.log(answer.css('display'));
            if(answer.css('display')==='none'){
                answer.slideDown('slow');
                $(e).attr('src','../assets/content_icon2_elected.png');
                $(e).parent().css('color','#0086D1');
                $(e).parent().parent().css('background-color','#FFF');
            }else{
                answer.slideUp('slow');
                $(e).attr('src','../assets/content_icon2_default.png');
                $(e).parent().css('color','#606470');
                $(e).parent().parent().css('background-color','rgba(255,255,255,0.20)');
            }
        });
    }
}
