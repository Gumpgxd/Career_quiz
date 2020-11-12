$(function() {
    var token = getCookie("token")
    if(!token){
        alert("当前未登陆，请先登陆")
        location.href="admin-login.html"
    }
    // 返回测评主页
    $(".next-button").click(function() {
        window.location.href = "PDP-test.html"
    })

    var url_Arr = window.location.href.split("&")
    url_Arr.splice(0,1)
    console.log(url_Arr)
    var tiger = url_Arr[0];
    var peacock = url_Arr[1];
    var Koala = url_Arr[2];
    var owl = url_Arr[3];
    var chameleon = url_Arr[4];

    show_pdp()
        // 展示pdp结果分数的页面
    function show_pdp() {
        for (var i = 0; i < 5; i++) {
            let str = ` <h2 >您该项的得分是 <span class="test">${url_Arr[i]}</span>分</h2> `
            $(".count").eq(i-1).empty().append(str)
        }
        $.ajax({
            type:"POST",
            url:"http://127.0.0.1:8000/api/test/pdpsubmit",
            data: {
                token:token,
                tiger:tiger,
                peacock:peacock,
                Koala:Koala,
                owl:owl,
                chameleon:chameleon
            },
            dataType:"json",
            success:function(data){
                if(data.code==200){
                    console.log("获取PDP各项分数成功"+data.msg);
                }
                if(data.code==100){
                    console.log("获取PDP各项分数失败"+data.msg);
                }
                $("#time").html(data.data);
            },
            error:function(data){
                console.log("error");
            }
        })
    }

})


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
