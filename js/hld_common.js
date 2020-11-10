$(function (){
    $(".next-button button").click(function () {
        $(".test-middle input").each(function (){
            var value = $(this).val()
            if (value === "") {
                return false;
            }
            alert(value)
        })
    })
})