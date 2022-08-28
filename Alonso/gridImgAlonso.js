$(function () {
    $(".grid-item").hover(function () {
        $(this).addClass("active");
    }, function () {
        $(this).removeClass("active");
    });
});