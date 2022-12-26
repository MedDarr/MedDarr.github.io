$(document).ready(function () {
    $(".r-slider").slick({
        infinite: true,
        speed: 300,
        prevArrow: $("#r-prev"),
        nextArrow: $("#r-next"),
        fade: true,
        swipe: false,
        draggable: false,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    $(".r-slider").on(
        "afterChange",
        function (ignore, slick, currentSlide) {
            console.log(slick);
            $("#r-number").text("0" + (currentSlide + 1));
        }
    );

    $("#slider-1").slick({
        infinite: true,
        dots: false,
        arrows: false,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "10%",
        autoplaySpeed: 3000,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3
            }
        },
           {
            breakpoint: 600,
            settings: {
                slidesToShow: 2
            }
        }]
    });

    $("#slider-2").slick({
        infinite: true,
        dots: false,
        arrows: false,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "10%",
        autoplaySpeed: 4000,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3
            }
        },
           {
            breakpoint: 600,
            settings: {
                slidesToShow: 2
            }
        }]
        // ПАРТНЕРЫ

    $('.partners__slider-1').slick({
        arrows: false,
        dots: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        easing: 'ease',
        autoplay: true,
        pauseOnFocus: true,
        autoplaySpeed: 2500,
        speed: 1500,
        responsive: [{
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerMode: false,
                variableWidth: true,
            }
        }],
    });

    $('.partners__slider-2').slick({
        arrows: false,
        dots: false,
        slidesToShow: 6,
        slidesToScroll: 2,
        easing: 'ease',
        autoplay: true,
        pauseOnFocus: true,
        autoplaySpeed: 2700,
        speed: 2000,
        responsive: [{
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                centerMode: true,
                focusOnSelect: true,
                variableWidth: true
            }
        }],
    });
    });
