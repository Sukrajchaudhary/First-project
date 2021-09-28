
$(window).on('load',function(){
    $('#status').fadeOut();
    $('#preloader').delay(1000).fadeOut();
})
$(document).ready(function () {
    $("#program-member").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots:false,
    });
});

$(document).ready(function () {
    $("#image-slider").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 200,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots:false,
    });
});


//scroll effect
$(function () {
    showHideNav();

    $(window).scroll(function () {
        showHideNav();
    });

    function showHideNav(){
        if ($(window).scrollTop() > 50) {
            $("nav").addClass("white-nav-top");
        } else {
            $("nav").removeClass("white-nav-top");
        }
    }
});

//facilitiess
$(document).ready(function () {
    $("#facilities-img").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 200,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots:false,
    });
});

