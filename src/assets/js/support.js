var support = {
    toggleAnswer: function (e) {
        $(function () {
            var answer = $(e).parent().parent().find('div.article-answer');
            console.log(answer.css('display'));
            if (answer.css('display') === 'none') {
                answer.slideDown('slow');
                $(e).attr('src', './assets/up.png');
                $(e).parent().children('span').css('color', '#0086D1');
                /*$(e).parent().parent().css('background-color','#FFF');*/
                /*$(e).parent().removeClass('article-question').addClass('article-question-active');*/
            } else {
                answer.slideUp('slow');
                $(e).attr('src', './assets/down.png');
                $(e).parent().children('span').css('color', '#606470');
                /*$(e).parent().parent().css('background-color','rgba(255,255,255,0.20)');*/
                /*$(e).parent().removeClass('article-question-active').addClass('article-question');*/
            }
        });
    },
    toggleTab: function (e) {


    }
}
function imgInit() {
    var imgs = document.getElementById("myTab").getElementsByTagName("img");
    var as = document.getElementById("myTab").getElementsByTagName("a");
    for (const a of as) {
        spans = a.getElementsByTagName("span");
        spans[0].classList.remove("darker")
    }
    for (const img of imgs) {
        img.setAttribute("src", "./assets/" + img.getAttribute("id") + ".png")
    }
}

$(document).ready(function () {
    //初始化dataList
    var dataList = ''
    var array = JSON.parse(localStorage.getItem('input_history'));
    if (array) {
        for (var i = 0; i < array.length; i++) {
            dataList += '<option value=' + array[i] + '>'
        }
        $('#autos').html(dataList);
    }

    // $(".search-info").click(function (e) {
    //     e.preventDefault();
    //     $("#search").val(this.innerHTML);
    // });
    var imgs = document.getElementById("myTab").getElementsByTagName("img");
    var as = document.getElementById("myTab").getElementsByTagName("a");
    for (const a of as) {
        a.addEventListener("click", function () {
            imgInit();
            let imgs = a.getElementsByTagName("img"),
                spans = a.getElementsByTagName("span");
            imgs[0].setAttribute("src", "./assets/" + imgs[0].getAttribute("id") + "active.png")
            spans[0].classList.add("darker")
        })
    }

    //提交表单
    $('#search-btn').click(function () {
        if (!$('#search').val()) {
            return;
        }
        $('#searchFrom').submit();
    });

    $('#search').keydown(function (event) {
        if (event.keyCode == 13) {
            if ($('#search').val()) {
                console.log('允许表单提交')
                $('#searchFrom').submit();
            }else{
                console.log('不允许提交')
                event.preventDefault();
            } 
        }
    });
});

