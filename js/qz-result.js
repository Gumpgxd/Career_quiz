$(function () {
  $('.ah-tab-wrapper').horizontalmenu({
    itemClick: function (item) {
      $('.ah-tab-content-wrapper .ah-tab-content').removeAttr('data-ah-tab-active');
      $('.ah-tab-content-wrapper .ah-tab-content:eq(' + $(item).index() + ')').attr('data-ah-tab-active', 'true');
      return false; //if this finction return true then will be executed http request
    }
  });
});

$(function () {
  // 返回测评主页
  $(".next-button").click(function () {
    window.location.href = "qz.html"
  })

  var url_Arr = window.location.href.split("&");
  console.log(url_Arr);
  show_pdp()
  // 展示气质结果分数的页面
  function show_pdp () {
    for (var i = 0; i < 5; i++) {
      let str = `<h2 >您该项的得分是 【${url_Arr[i + 1]}】分</h2>  `
      $(".count").eq(i).empty().append(str)
    }
  }
})