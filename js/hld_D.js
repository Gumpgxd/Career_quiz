var SERVER_PATH = 'http://127.0.0.1:8000/'

$(function (){
    var all_mark;//所有总分，判断是否填完表单

    var mark_R;//R型总分
    var mark_I;//I型总分
    var mark_A;//A型总分
    var mark_S;//s型总分
    var mark_E;//E型总分
    var mark_C;//C型总分

    var g_R;//机械操作能力
    var g_I;//科学研究能力
    var g_A;//艺术创作能力
    var g_S;//解释表达能力
    var g_E;//商业洽谈能力
    var g_C;//事务执行能力

    var h_R;//体育能力
    var h_I;//数学技能
    var h_A;//音乐技能
    var h_S;//交际技能
    var h_E;//领导技能
    var h_C;//办公技能

    var url = window.location.href.split("&");

    var all1;
    var all2;
    var all3;
    var all4;
    var all5;
    var all6;
    $(".next-button button").click(function (){
        g_R = $("input[name = 'mechanic']:checked").val();
        g_I = $("input[name = 'science']:checked").val();
        g_A = $("input[name = 'art']:checked").val();
        g_S = $("input[name = 'deliver']:checked").val();
        g_E = $("input[name = 'trade']:checked").val();
        g_C = $("input[name = 'work']:checked").val();
        h_R = $("input[name = 'physical']:checked").val();
        h_I = $("input[name = 'math']:checked").val();
        h_A = $("input[name = 'music']:checked").val();
        h_S = $("input[name = 'social']:checked").val();
        h_E = $("input[name = 'lead']:checked").val();
        h_C = $("input[name = 'handle']:checked").val();
        mark_R = Number(g_R )+Number(h_R);
        mark_I = Number(g_I )+Number(h_I);
        mark_A = Number(g_A )+Number(h_A);
        mark_S = Number(g_S )+Number(h_S);
        mark_E = Number(g_E )+Number(h_E);
        mark_C = Number(g_C )+Number(h_C);
        all_mark = mark_R + mark_I + mark_A + mark_S + mark_E + mark_C;

        // return all_mark;
        console.log(url)
        all1 = Number(url[1]) + Number(mark_R);
        all2 = Number(url[2]) + Number(mark_I);
        all3 = Number(url[3]) + Number(mark_A);
        all4 = Number(url[4]) + Number(mark_S);
        all5 = Number(url[5]) + Number(mark_E);
        all6 = Number(url[6]) + Number(mark_S);//所有总分

    })

    $('.next-button button').click(function (){
        if (isNaN(all_mark)) {
            zeroModal.alert('您还有题目未作答！请完成\n' +
                '后再进一步测试');
        }
        else {
            zeroModal.alert({
                content: '您确定要提交吗 ？',
                okFn: function() {
                    window.location.href="../html/hld_E.html";
                    $.ajax({
                        url: SERVER_PATH + "api/test/addholland",
                        type: 'post',
                        dataType: 'json',
                        data: {
                            token:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8" +
                                "xMjcuMC4wLjE6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTYwNTA5MTY3M" +
                                "CwiZXhwIjoxNjA1MDk1MjcwLCJuYmYiOjE2MDUwOTE2NzAsImp0aSI6IlAweXpJV3ZWeElV" +
                                "ajVmY08iLCJzdWIiOjEwLCJwcnYiOiJkZjg4M2RiOTdiZDA1ZW" +
                                "Y4ZmY4NTA4MmQ2ODZjNDVlODMyZTU5" +
                                "M2E5In0.B5lz1EIqxPygX9kT1ovRFoToALLsL1Iwz4_zkPC4m18",
                            R:all1,
                            A:all2,
                            I:all3,
                            S:all4,
                            E:all5,
                            C:all6
                        },
                        success: function (data) {
                            if (data.code === 200) {
                                console.log(data);
                            } else if (data.code === 100) {
                                console.log(data);
                            }else if (data.code === 422) {
                                alert(422)
                                console.log(data.data);
                            }
                        },
                        error: function (data) {
                            console.log('失败');
                            console.log(data.code + 'code');
                        }
                    })


                }
            });
        }
    })
})