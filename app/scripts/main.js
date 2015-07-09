// jshint devel:true

console.log('\'Allo \'Allo!');

$(document).ready(function () {
    'use strict';
    $('#Carousel').carousel({
        interval: 4000
    });
    $('#macCarousel').carousel({
        interval: 4000
    });
    $('#macCarousel').on('slid.bs.carousel', function () {
        $('.macCarousel-target.active').removeClass('active');
        var toSlide;
        toSlide = $('.carousel-indicators .active').attr('data-slide-to');
        
        console.log(toSlide);
        
        $('.macCarousel-target[data-slide-to=' + toSlide + ']').addClass('active');
    });
    $('.macCarousel-target').on('click', function () {
        event.preventDefault();
        $('#macCarousel').carousel(parseInt($(this).attr('data-slide-to')));
        $('.macCarousel-target.active').removeClass('active');
        $(this).addClass('active');
    });
});