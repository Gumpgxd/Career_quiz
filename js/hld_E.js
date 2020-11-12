var SERVER_PATH = 'http://127.0.0.1:8000/'

$(function () {
    var a = "";
        $.ajax({
            url: SERVER_PATH + "api/test/resholland",
            type: 'get',
            dataType: 'json',
            async:false,
            data: {
                token:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBp" +
                    "XC9hdXRoXC9sb2dpbiIsImlhdCI6MTYwNTA5MTY3MCwiZXhwIjoxNjA1MDk1MjcwLCJuYmYiOjE2MDUwOTE2NzAsI" +
                    "mp0aSI6IlAweXpJV3ZWeElVajVmY08iLCJzdWIiOjEwLCJwcnYiOiJkZjg4M2RiOTdiZ" +
                    "DA1ZWY4ZmY4NTA4MmQ2ODZjNDVlODMyZTU5M2E5In0.B5lz1EIqxPygX9kT1ovRFoToALLsL1Iwz4_zkPC4m18"
            },
            success: function (data) {
                let str = `<h1 class="font" id="font">${data.data[0].first}${data.data[0].second}${data.data[0].third}</h1>`;
                $(".test-font").empty().append(str);
                if (data.code === 200) {
                    console.log(data);
                } else if (data.code === 100) {
                    console.log(data);
                }
                a = $("#font").text();
            },
            error: function (data) {
                console.log('失败');
                console.log(data.code + 'code');
            }
      })



    $.ajax({
        url: SERVER_PATH + "api/test/jobholland",
        type: 'get',
        dataType: 'json',
        data: {
            holland:a
        },
        success: function (data) {
            console.log(a)
            let str = `<p>${data.data[0].type_desc}</p>`;
            $(".font_suit").empty().append(str);
            if (data.code === 200) {
                console.log(data);
            } else if (data.code === 100) {
                alert(100)
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

})