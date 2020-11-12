var SERVER_PATH = 'http://127.0.0.1:8000/'
$(function () {
    $("table input").blur(function (){
        if($(this).val() === "") {
            $(this).siblings("p").css("opacity","1");
        }
    })

    $(".point p").siblings('input').on({
        blur: function () {
            if ($(".work1").siblings('input').val() === '' || $(".work1").siblings('input').val() === null) {
                $(".work1").html('电话号码不能为空！')
            } else {
                $(".work1").html('')
            }
        }
    })
    /**
     *  方法作用 注册表单
     * 请求接口 api/auth/regist
     * @author lizhongzheng <github.com/bixuande>
     */
    $("#btn").click(function (){
        $.ajax({
            url: SERVER_PATH+"api/auth/regist",
            type: 'post',
            data: {
                phone:$('#phone').val(),
                password:$('#password').val(),
            },
            dataType: 'json',
            success: function (data) {
                data:decodeURIComponent(jQuery("#la_from").serialize());
                    console.log(data)
                if (data.code === 200) {
                    console.log(data.msg);
                } else if (data.code === 100) {
                    console.log(data.msg);
                }
            },
            error: function (data) {
                console.log(data.msg);
            }
        })
    })
})



