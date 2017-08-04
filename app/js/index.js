"use strict";

$(document).foundation();

//alert('i am here');
//$(document).on('ready', function(){

//});
$('.wrapper-head-slider').slick({
    mobileFirst: true,
    nextArrow: '<button type="button" class="slick-next"></button>',
    prevArrow: '<button type="button" class="slick-prev"></button>'
});
$('.wrapper-review-slider').slick({
    centerMode: true,
    nextArrow: '<button type="button" class="slick-next"></button>',
    prevArrow: '<button type="button" class="slick-prev"></button>',
    // centerPadding: '60px',
    slidesToShow: 3,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                arrows: true,
                centerMode: true,
                slidesToShow: 2
            }
        },
        {
            breakpoint: 640,
            settings: {
                arrows: false,
                centerMode: true,
                slidesToShow: 1
            }
        }
    ]
});


