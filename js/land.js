var SERVER_PATH = 'http://127.0.0.1:8000/'
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


    /**
     *方法作用 登录
     * 请求接口 api/auth/login
     * @author lizhongzheng <github.com/bixuande>
     */
    $("#btn").click(function (){
        $.ajax({
            url: SERVER_PATH+"api/auth/login",
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
                    console.log(data);
                    Setcookie("token",data.data.token);
                    window.location.href = "../html/test_homegage.html";
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


/**
 *存入token
 * @param name
 * @param value
 * @constructor
 */
function Setcookie (name, value){
    //设置名称为name,值为value的Cookie
    var expdate = new Date();   //初始化时间
    expdate.setTime(expdate.getTime() + 30 * 60 * 1000);   //时间单位毫秒
    document.cookie = name+"="+value+";expires="+expdate.toGMTString()+";path=/";

    //即document.cookie= name+"="+value+";path=/";  时间默认为当前会话可以不要，但路径要填写，因为JS的默认路径是当前页，如果不填，此cookie只在当前页面生效！
}


/**
 * 获取token
 * @param c_name
 * @returns {string}
 */
function getCookie(c_name){
//判断document.cookie对象里面是否存有cookie
    if (document.cookie.length>0){
        c_start=document.cookie.indexOf(c_name + "=")
        //如果document.cookie对象里面有cookie则查找是否有指定的cookie，如果有则返回指定的cookie值，如果没有则返回空字符串
        if (c_start!=-1){
            c_start=c_start + c_name.length+1
            c_end=document.cookie.indexOf(";",c_start)
            if (c_end==-1) c_end=document.cookie.length
            return unescape(document.cookie.substring(c_start,c_end))
        }
    }
    return ""
}
