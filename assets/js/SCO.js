$(function () {

    $('.cheeseburger').click(function () {

        $('.navigation-menu').fadeOut(300);

        $('.footer').css({ "bottom": "-100%" });

    })

    $('.ac').click(function () {
        $('.navigation-menu').fadeIn(300);
        $('.footer').css({ "bottom": "0" });
    })



})