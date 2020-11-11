$(function() {
    // 选项卡
    var tab1;
    $('.ah-tab-wrapper').horizontalmenu({
        itemClick: function(item) {
            $('.ah-tab-content-wrapper .ah-tab-content').removeAttr('data-ah-tab-active');
            $('.ah-tab-content-wrapper .ah-tab-content:eq(' + $(item).index() + ')').attr('data-ah-tab-active', 'true');
            return false; //if this finction return true then will be executed http request
        }
    });
    // radio添加类
    $("input").click(function() {
        $(this).addClass("current");
    });
    // $('next-button').on('click', function() {
    //         window.location.href = "PDP-result.html";
    //     })
    // $('.next-button').click(function() {
    //     $('#table_one tbody input').each(function() {
    //         var index = $(this).index();
    //         $('input:radio:checked').eq(index).val();

    //     })
    // })
});

window.onload = function() {
    var num_Aarr = []
    var num_Barr = []
    for (var i = 0; i < 15; i++) {
        num_Aarr.push(i + 1)
        num_Barr.push(i + 1)
    }
    console.log("一共的题号", num_Aarr);
    // PDP A组提交

    tijiao = function() {


        // 5、10、14、18、24、30题得分加起来是“老虎”分数；
        var lionTotal = 0
        $('#table_one  input:radio[name="check5"]:checked,#table_one  input:radio[name="check10"]:checked,#table_one  input:radio[name="check14"]:checked,' +
            '#table_two  input:radio[name="check18"]:checked,#table_two  input:radio[name="check24"]:checked,#table_two  input:radio[name="check30"]:checked').each(function() {
            lionTotal += Number($(this).val())
        });
        console.log("“老虎”分数", lionTotal);


        // 3、6、13、20、22、29题得分加起来是“孔雀”分数；
        var kqTotal = 0
        $('#table_one  input:radio[name="check3"]:checked,#table_one  input:radio[name="check6"]:checked,#table_one  input:radio[name="check13"]:checked,' +
            '#table_two  input:radio[name="check20"]:checked,#table_two  input:radio[name="check22"]:checked,#table_two  input:radio[name="check29"]:checked').each(function() {
            kqTotal += Number($(this).val())
        });
        console.log("“孔雀”分数", kqTotal);


        // 2、8、15、17、25、28题得分加起来是“考拉”分数；
        var klTotal = 0
        $('#table_one  input:radio[name="check2"]:checked,#table_one input:radio[name="check8"]:checked,#table_one  input:radio[name="check15"]:checked,' +
            '#table_two  input:radio[name="check17"]:checked,#table_two  input:radio[name="check25"]:checked,#table_two  input:radio[name="check28"]:checked').each(function() {
            klTotal += Number($(this).val())

        });
        console.log("“考拉”分数", klTotal);


        // 1、7、11、16、21、26题得分加起来是“猫头鹰”分数；
        var mtyTotal = 0
        $('#table_one  input:radio[name="check1"]:checked,#table_one  input:radio[name="check7"]:checked,#table_one  input:radio[name="check11"]:checked,' +
            '#table_two   input:radio[name="check16"]:checked,#table_two   input:radio[name="check21"]:checked,#table_two   input:radio[name="check26"]:checked').each(function() {
            mtyTotal += Number($(this).val())

        });
        console.log("'猫头鹰'分数", mtyTotal);

        // 4、9、12、19、23、27题得分加起来是“变色龙”分数
        var bslTotal = 0
        $('#table_one  input:radio[name="check4"]:checked,#table_one  input:radio[name="check9"]:checked,#table_one  input:radio[name="check12"]:checked,' +
            '#table_two  input:radio[name="check19"]:checked,#table_two  input:radio[name="check23"]:checked,#table_two  input:radio[name="check27"]:checked').each(function() {
            bslTotal += Number($(this).val())

        });
        console.log("'变色龙'分数", bslTotal);
        var len = $("input:radio:checked").length;
        if (len < 30){
            zeroModal.alert('您还有题目未作答！请完成\n' +
                '后再进一步测试');
        }
        else {
            window.location.href = "PDP-result.html?" + "&" + lionTotal + "&" + kqTotal + "&" + klTotal + "&" + mtyTotal + "&" + bslTotal
        }
    }
}


