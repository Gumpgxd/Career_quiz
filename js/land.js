$(function () {
    $(".work_o").parents("tr").siblings(".nav1").children(".input_t").on({
        blur: function () {
            if ($(".work_o").parents("tr").siblings(".nav1").children(".input_t").val() === '' || $(".work_o").parents("tr").siblings(".nav1").children(".input_t").val() === null) {
                $(".work_o").html('电话号码不能为空！')
            } else {
                $(".work_o").html('')
            }
        }
    })
})