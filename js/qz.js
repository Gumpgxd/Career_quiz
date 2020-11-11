$(function () {
  //选项卡
  $('.ah-tab-wrapper').horizontalmenu({
    itemClick: function (item) {
      $('.ah-tab-content-wrapper .ah-tab-content').removeAttr('data-ah-tab-active');
      $('.ah-tab-content-wrapper .ah-tab-content:eq(' + $(item).index() + ')').attr('data-ah-tab-active', 'true');
      return false; //if this finction return true then will be executed http request
    }
  });
});



window.onload = function () {
  var num_Aarr = []
  var num_Barr = []
  for (var i = 0; i < 15; i++) {
    num_Aarr.push(i + 1)
    num_Barr.push(i + 1)
  }
  console.log("一共的题号", num_Aarr);
  // PDP A组提交

  tijiao = function () {


    //  A篇得分
    var dzzTotal = 0
    $('#table_one  input:radio[name="one"]:checked,#table_one  input:radio[name="two"]:checked,#table_one  input:radio[name="three"]:checked,#table_one  input:radio[name="four"]:checked,#table_one  input:radio[name="five"]:checked,#table_one  input:radio[name="six"]:checked,#table_one  input:radio[name="seven"]:checked,#table_one  input:radio[name="eight"]:checked,#table_one  input:radio[name="nine"]:checked,#table_one  input:radio[name="ten"]:checked,#table_one  input:radio[name="eleven"]:checked,#table_one  input:radio[name="twelve"]:checked,#table_one  input:radio[name="thirteen"]:checked,#table_one  input:radio[name="fourteen"]:checked,#table_one  input:radio[name="fifteen"]:checked').each(function () {
      dzzTotal += Number($(this).val())
    });
    console.log("“A篇”分数", dzzTotal);

    // B篇得分
    var dxzTotal = 0
    $('#table_two  input:radio[name="sixteen"]:checked,#table_two  input:radio[name="seventeen"]:checked,#table_two  input:radio[name="eighteen"]:checked,#table_two  input:radio[name="nineteen"]:checked,#table_two  input:radio[name="twenty"]:checked,#table_two  input:radio[name="twenty-one"]:checked,#table_two  input:radio[name="twenty-two"]:checked,#table_two  input:radio[name="twenty-three"]:checked,#table_two  input:radio[name="twenty-four"]:checked,#table_two  input:radio[name="twenty-five"]:checked,#table_two  input:radio[name="twenty-six"]:checked,#table_two  input:radio[name="twenty-seven"]:checked,#table_two  input:radio[name="twenty-eight"]:checked,#table_two  input:radio[name="twenty-nine"]:checked,#table_two  input:radio[name="thirty"]:checked').each(function () {
      dxzTotal += Number($(this).val())
    });
    console.log("“B篇”分数", dxzTotal);


    // C篇得分
    var nyzTotal = 0
    $('#table_three  input:radio[name="thirty-one"]:checked,#table_three  input:radio[name="thirty-two"]:checked,#table_three  input:radio[name="thirty-three"]:checked,#table_three  input:radio[name="thirty-four"]:checked,#table_three  input:radio[name="thirty-five"]:checked,#table_three  input:radio[name="thirty-six"]:checked,#table_three  input:radio[name="thirty-seven"]:checked,#table_three  input:radio[name="thirty-eight"]:checked,#table_three  input:radio[name="thirty-nine"]:checked,#table_three  input:radio[name="forty"]:checked,#table_three  input:radio[name="forty-one"]:checked,#table_three  input:radio[name="forty-two"]:checked,#table_three  input:radio[name="forty-three"]:checked,#table_three  input:radio[name="forty-four"]:checked,#table_three  input:radio[name="forty-five"]:checked').each(function () {
      nyzTotal += Number($(this).val())

    });
    console.log("“C篇”分数", nyzTotal);


    // D篇得分
    var yyzTotal = 0
    $('#table_four  input:radio[name="forty-six"]:checked,#table_four  input:radio[name="forty-seven"]:checked,#table_four  input:radio[name="forty-eight"]:checked,#table_four  input:radio[name="forty-nine"]:checked,#table_four  input:radio[name="fifty"]:checked,#table_four  input:radio[name="fifty-one"]:checked,#table_four  input:radio[name="fifty-two"]:checked,#table_four  input:radio[name="fifty-three"]:checked,#table_four  input:radio[name="fifty-four"]:checked,#table_four  input:radio[name="fifty-five"]:checked,#table_four  input:radio[name="fifty-six"]:checked,#table_four  input:radio[name="fifty-seven"]:checked,#table_four  input:radio[name="fifty-eight"]:checked,#table_four  input:radio[name="fifty-nine"]:checked,#table_four  input:radio[name="sixty"]:checked').each(function () {
      yyzTotal += Number($(this).val())

    });
    console.log("'D篇'分数", yyzTotal);

    // // 4、9、12、19、23、27题得分加起来是“变色龙”分数
    // var bslTotal = 0
    // $('#table_one  input:radio[name="check4"]:checked,#table_one  input:radio[name="check9"]:checked,#table_one  input:radio[name="check12"]:checked,' +
    //   '#table_two  input:radio[name="check19"]:checked,#table_two  input:radio[name="check23"]:checked,#table_two  input:radio[name="check27"]:checked').each(function () {
    //     bslTotal += Number($(this).val())

    //   });
    // console.log("'D篇'分数", bslTotal);


    // $('.next-button').click(function () {
    //   $('.ah-tab-content-wrapper tbody tr').each(function () {
    //     var count = 0
    //     count += dzzTotal + dxzTotal + nyzTotal + yyzTotal
    //     if ($('input[name="Radio"]:checked')) {
    //
    //       window.location.href = "qz-result.html?" + "&" + dzzTotal + "&" + dxzTotal + "&" + nyzTotal + "&" + yyzTotal
    //       console.log(count)
    //
    //     } else {
    //       // if ($('input[name="Radio"]:checked').val())
    //
    //       alert('有题目未被选完！');
    //       return false;
    //
    //     }
    //   })
    // })
      var len1 = $("input:radio:checked").length;
      if (len1 < 60){
        zeroModal.alert('您还有题目未作答！请完成\n' +
            '后再进一步测试');
      }
      else {
        window.location.href = "qz-result.html?" + "&" + dzzTotal + "&" + dxzTotal + "&" + nyzTotal + "&" + yyzTotal
      }
  }


  $(function () {
    $(".two").css('display', 'none')
    $(".one").css('display', 'block')
  })
}