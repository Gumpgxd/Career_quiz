$(function (){
    var number;//总分 判断是否回答问题
    var number1;//现实型活动
    var number2;//社会型职业
    var number3;//调查型职业
    var number4;//事业型职业
    var number5;//艺术型职业
    var number6;//常规型职业
    var num1;
    var num2;
    var num3;
    var num4;
    var num5;
    var num6;
    var url = window.location.href.split("&");
    $("input").click(function (){
        number1 = $("input[name = 'mark1']:checked").length;
        number2 = $("input[name = 'mark2']:checked").length;
        number3 = $("input[name = 'mark3']:checked").length;
        number4 = $("input[name = 'mark4']:checked").length;
        number5 = $("input[name = 'mark5']:checked").length;
        number6 = $("input[name = 'mark6']:checked").length;
        $("#nav1 span").text(number1);
        $("#nav2 span").text(number2);
        $("#nav3 span").text(number3);
        $("#nav4 span").text(number4);
        $("#nav5 span").text(number5);
        $("#nav6 span").text(number6);
        number = number1 + number2 + number3 + number4 + number5 + number6;
        num1 = Number(url[1]) + Number(number1);
        num2 = Number(url[2]) + Number(number2);
        num3 = Number(url[3]) + Number(number3);
        num4 = Number(url[4]) + Number(number4);
        num5 = Number(url[5]) + Number(number5);
        num6 = Number(url[6]) + Number(number6);
    })
    $(".next-button button").click(function () {
        if (number === undefined){
            zeroModal.alert('您还有题目未作答！请完成\n' +
                '后再进一步测试');
        }else{
            window.location.href = "../html/hld_D.html?" + "&" + num1 + "&" + num2 + "&" + num3 + "&" +
                num4 + "&" + num5 + "&" + num6;
        }
    })
})