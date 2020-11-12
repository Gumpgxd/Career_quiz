$(function (){
    var mark;//总分 判断是否回答了问题
    var mark1;//现实型能力
    var mark2;//艺术型能力
    var mark3;//研究型能力
    var mark4;//社会型能力
    var mark5;//企业型能力
    var mark6;//常规型能力
    var mark7;
    var mark8;
    var mark9;
    var mark10;
    var mark11;
    var mark12;
    var url = window.location.href.split("&");
    $("input").click(function (){
        mark1 = $("input[name = 'ty7']:checked").length;
        mark2 = $("input[name = 'ty8']:checked").length;
        mark3 = $("input[name = 'ty9']:checked").length;
        mark4 = $("input[name = 'ty10']:checked").length;
        mark5 = $("input[name = 'ty11']:checked").length;
        mark6 = $("input[name = 'ty12']:checked").length;
        $("#table1 span").text(mark1);
        $("#table2 span").text(mark2);
        $("#table3 span").text(mark3);
        $("#table4 span").text(mark4);
        $("#table5 span").text(mark5);
        $("#table6 span").text(mark6);
        mark = mark1 + mark2 + mark3 + mark4 + mark5 +mark6;
        mark7 = Number(url[1]) + Number(mark1);
        mark8 = Number(url[2]) + Number(mark2);
        mark9 = Number(url[3]) + Number(mark3);
        mark10 = Number(url[4]) + Number(mark4);
        mark11 = Number(url[5]) + Number(mark5);
        mark12 = Number(url[6]) + Number(mark6);
        console.log(mark7)
        $(".next-button button").click(function () {
            if (mark === undefined){
                zeroModal.alert('您还有题目未作答！请完成\n' +
                    '后再进一步测试');
            }else{
                window.location.href = "../html/hld_C.html?" + "&" + mark7 + "&" + mark8 + "&" + mark9 + "&" +
                    mark10 + "&" + mark11 + "&" + mark12;
            }
        })
    })


})