get_time();
totalnum();


function get_time() {
    $.ajax({
        url: "http://covid19.wanqqq29.cn/time",
        timeout: 10000,
        dataType: 'json',
        success: function(data) {
            $("#time").html(data)
        },
        error: function(xhr, type, errorThrown) {

        }
    })
}

function totalnum() {
    $.ajax({
        url: "http://covid19.wanqqq29.cn/totalnum",
        timeout: 10000,
        dataType: 'json',
        success: function(data) {
            $("#totalnum").html(data)
        },
        error: function(xhr, type, errorThrown) {

        }
    })
}
