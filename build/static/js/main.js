
$('.header__nav_btn').click(function () {
    $('.header__nav .header__nav_menu').slideToggle();
});

$(document).click(function (e) {
    if (!$(e.target).closest('.header').length > 0) {
        hideMenu();
    }
});

$('.header__nav .header__nav_menu a ').click(function () {
    hideMenu();
});

function hideMenu() {
    $('.header__nav ul').slideUp();
};