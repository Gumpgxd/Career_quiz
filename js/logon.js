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
})