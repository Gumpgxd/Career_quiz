$(function (){
    $("#table_one input").blur(function (){
        if($(this).val() === "") {
            $(this).siblings("p").css("opacity","1");
        }
    })

    $(".work1").siblings('input').on({
        blur: function () {
            if ($(".work1").siblings('input').val() === '' || $(".work1").siblings('input').val() === null) {
                $(".work1").html('内容不得为空！')
            } else {
                $(".work1").html('')
            }
        }
    })
    //性别
    $(".work2").siblings('input').on({
        blur: function () {
            if ($(".work2").siblings('input').val() === '' || $(".work2").siblings('input').val() === null) {
                $(".work2").html('内容不得为空！')
            } else {
                $(".work2").html('')
            }
        }
    })
    //学号
    $(".work3").siblings('input').on({
        blur: function () {
            if ($(".work3").siblings('input').val() === '' || $(".work3").siblings('input').val() === null) {
                $(".work3").html('内容不得为空！')
            } else {
                $(".work3").html('')
            }
        }
    })
    //邮箱
    $(".work4").siblings('input').on({
        blur: function () {
            if ($(".work4").siblings('input').val() === '' || $(".work4").siblings('input').val() === null) {
                $(".work4").html('内容不得为空！')
            } else {
                $(".work4").html('')
            }
        }
    })
    //专业班级
    $(".work5").siblings('input').on({
        blur: function () {
            if ($(".work5").siblings('input').val() === '' || $(".work5").siblings('input').val() === null) {
                $(".work5").html('内容不得为空！')
            } else {
                $(".work5").html('')
            }
        }
    })
    //自我介绍
    $(".work6").siblings('input').on({
        blur: function () {
            if ($(".work6").siblings('input').val() === '' || $(".work6").siblings('input').val() === null) {
                $(".work6").html('内容不得为空！')
            } else {
                $(".work6").html('')
            }
        }
    })




    // 表单提交验证
    $(".next-button button").click(function () {
        //姓名

        if ($(".work1").siblings('input').val() === '' || $(".work1").siblings('input').val() === null) {
            $(".work1").html('内容不得为空！')
        }
        if ($(".work2").siblings('input').val() === '' || $(".work2").siblings('input').val() === null) {
            $(".work2").html('内容不得为空！')
        }
        //学号
        if ($(".work3").siblings('input').val() === '' || $(".work3").siblings('input').val() === null) {
            $(".work3").html('内容不得为空！')
        }
        if ($(".work4").siblings('input').val() === '' || $(".work4").siblings('input').val() === null) {
            $(".work4").html('内容不得为空！')
        }
        if ($(".work5").siblings('input').val() === '' || $(".work5").siblings('input').val() === null) {
            $(".work5").html('内容不得为空！')
        }
        if ($(".work6").siblings('input').val() === '' || $(".work6").siblings('input').val() === null) {
            $(".work6").html('内容不得为空！')
        }

    })










    $(".next-button button").click(function () {
        $(".test-middle input").each(function (){
            if ($(this).val() === "" || $(this).val() == null) {
                $(this).siblings('p').html('内容不得为空！');
                return false;
            }
            alert(value)
        })
    })
})