$(function (){
    var mark;//总分 判断是否回答了问题
    var mark1;//现实型能力
    var mark2;//艺术型能力
    var mark3;//研究型能力
    var mark4;//社会型能力
    var mark5;//企业型能力
    var mark6;//常规型能力
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
    })
    $(".next-button button").click(function () {
        if (mark === undefined){
            zeroModal.alert('您还有题目未作答！请完成\n' +
                '后再进一步测试');
        }else{
            window.location.href="../html/hld_C.html";
        }
    })
})