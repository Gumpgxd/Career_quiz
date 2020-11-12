var SERVER_PATH = 'http://127.0.0.1:8000/'
$(function () {


    var token = getCookie("token")
    if(!token){
        alert("当前未登陆，请先登陆")
        location.href="../html/land.html"
    }



    /**
     *  方法作用 增加用户信息
     * 请求接口 api/person/addinfo
     * @author lizhongzheng <github.com/bixuande>
     */
    $("#btn").click(function (){
        $.ajax({
            url: SERVER_PATH+"api/person/addinfo",
            type: 'post',
            data: {
                age:$('#age').val(),
                name:$('#name').val(),
                qq:$('#qq').val(),
                gender:$('#gender').val(),
                education:$('#education').val(),
                retiretime:$('#retiretime').val(),
                retiremode:$('#retiremode').val(),
                work:$('#work').val(),
                token:token
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
