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
                $(e).attr('src','./assets/up.png');
                $(e).parent().children('span').css('color','#0086D1');
                /*$(e).parent().parent().css('background-color','#FFF');*/
                /*$(e).parent().removeClass('article-question').addClass('article-question-active');*/
            }else{
                answer.slideUp('slow');
                $(e).attr('src','./assets/down.png');
                $(e).parent().children('span').css('color','#606470');
                /*$(e).parent().parent().css('background-color','rgba(255,255,255,0.20)');*/
                /*$(e).parent().removeClass('article-question-active').addClass('article-question');*/
            }
        });
    }
}
