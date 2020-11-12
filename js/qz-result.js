var SERVER_PATH = 'http://127.0.0.1:8000/'

//全局变量方便ajax接受
var url_Arr = window.location.href.split("&");

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

  console.log(url_Arr);
  show_pdp()
  // 展示气质结果分数的页面
  function show_pdp() {
    for (var i = 0; i < 5; i++) {
      let str = `<h2 >您该项的得分是 【${url_Arr[i + 1]}】分</h2>  `
      $(".count").eq(i).empty().append(str)
    }
  }
})

/**
 * 方法作用 将气质测评结果录入数据库
 * 请求接口 api/test/temsubmit
 * @author chenmiao <github.com/Yidaaa-u>
 */
$.ajax({
  type: "POST",
  cache: true,
  url: SERVER_PATH + "api/test/temsubmit",
  data: {
    token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTYwNTE1ODQ3MCwiZXhwIjoxNjA1MTYyMDcwLCJuYmYiOjE2MDUxNTg0NzAsImp0aSI6IlVyVmdOZEtvendNazBacUUiLCJzdWIiOjUsInBydiI6ImRmODgzZGI5N2JkMDVlZjhmZjg1MDgyZDY4NmM0NWU4MzJlNTkzYTkifQ.dtKTYI4tuc5VR4pHhthL0-pbmAEoU1JZWz43h8b6zok",
    a: url_Arr[1],
    b: url_Arr[2],
    c: url_Arr[3],
    d: url_Arr[4]
  },
  dataType: 'json',
  async: false,
  success: function (data) {
    console.log("成功")
  },
  error: function (e) {
    alert('操作失败')
  }
})