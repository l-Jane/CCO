/**
 * Created by Jane on 2020/7/18.
 */
$(function () {
    var userInfo = window.localStorage.getItem("userInfo") && JSON.parse(window.localStorage.getItem("userInfo"))

    $(".add").click(function () {
        var n = $(this).prev().val();
        var num = parseInt(n) + 1;
        if (num == 0) {
            return;
        }
        $(this).prev().val(num);
    });
    //减的效果
    $(".jian").click(function () {
        var n = $(this).next().val();
        var num = parseInt(n) - 1;
        if (num == 0) {
            return
        }
        $(this).next().val(num);
    })

    $("#keyword >span").click(function () {
        $("#searchInput").val($(this).text())
    })

    $("#copyBox").click(function () {
        $("#copyCheckBox").toggleClass("checkBox")
    })
    $("#fileCheck").click(function () {
        $("#fileCheckBox").toggleClass("checkBox")
    })




})


function jumpPerson() {
    window.location.href = "./person.html"
}
function jumpAllSource() {
    window.location.href = "./allSource.html"
}
function jumpAllType() {
    window.location.href = "./allType.html"
}

function getQueryString(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  decodeURI(r[2]); return null;
}





