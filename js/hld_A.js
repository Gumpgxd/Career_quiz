$(function (){
    var index1;//现实型活动
    var index2;//艺术型活动
    var index3;//研究型活动
    var index4;//社会型活动
    var index5;//企业型活动
    var index6;//传统型活动
    var index;//总分 判断是否有回答问题
    $("input").click(function (){
        var index1;//现实型活动
        var index2;//艺术型活动
        var index3;//研究型活动
        var index4;//社会型活动
        var index5;//企业型活动
        var index6;//传统型活动
            index1 = $("input[name = 'ty1']:checked").length;
            index2 = $("input[name = 'ty2']:checked").length;
            index3 = $("input[name = 'ty3']:checked").length;
            index4 = $("input[name = 'ty4']:checked").length;
            index5 = $("input[name = 'ty5']:checked").length;
            index6 = $("input[name = 'ty6']:checked").length;
        $("#table_one1 span").text(index1);
        $("#table_two2 span").text(index2);
        $("#table_third span").text(index3);
        $("#table_four span").text(index4);
        $("#table_five span").text(index5);
        $("#table_six span").text(index6);
        console.log($("input[name = 'ty1']:checked"))
        index = index1 + index2 + index3 + index4 + index5 + index6;
        $(".next-button button").click(function () {
                console.log(index6)
                if (index === undefined){
                    zeroModal.alert('您还有题目未作答！请完成\n' +
                        '后再进一步测试');
                }else{
                    // window.location.href="../html/hld_B.html"
                    window.location.href = "../html/hld_B.html?" + "&" + index1 + "&" + index2 + "&" + index3 + "&" + index4 + "&" + index5 + "&" + index6;
                }
            })
    })


})