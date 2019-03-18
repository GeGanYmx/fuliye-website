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
                $(e).attr('src','./assets/content_icon2_elected.png');
                $(e).parent().children('span').css('color','#0086D1');
                $(e).parent().parent().removeClass('question-answer').addClass('question-answer-active');
            }else{
                answer.slideUp('slow');
                $(e).attr('src','./assets/content_icon2_default.png');
                $(e).parent().children('span').css('color','#606470');
                $(e).parent().parent().removeClass('question-answer-active').addClass('question-answer');
            }
        });
    },
    toggleAnswer2:function(e){
        $(function(){
            var answer=$(e).parent().parent().find('div.article-answer');
            console.log(answer.css('display'));
            if(answer.css('display')==='none'){
                answer.slideDown('slow');
                $(e).attr('src','./assets/content_icon2_elected.png');
                $(e).parent().children('span').css('color','#0086D1');
                $(e).parent().parent().removeClass('question-answer').addClass('question-answer-active2');
            }else{
                answer.slideUp('slow');
                $(e).attr('src','./assets/content_icon2_default.png');
                $(e).parent().children('span').css('color','#606470');
                $(e).parent().parent().removeClass('question-answer-active2').addClass('question-answer');
            }
        });
    },
    toggleTab:function(e){
       console.log($(e));
       $(e).find('span.icon-span').css('color',' #0A1017');
       $(e).siblings('li').find('span.icon-span').css('color','#999999');
}
}