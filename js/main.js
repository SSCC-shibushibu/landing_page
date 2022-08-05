function scroll_to(num) {
    $("html,body").animate({
        scrollTop: $('.' + num).offset().top - 100,
    });
}