console.log("'Allo 'Allo!"),$(document).ready(function(){"use strict";$("#Carousel").carousel({interval:4e3}),$("#macCarousel").carousel({interval:4e3}),$("#macCarousel").on("slid.bs.carousel",function(){$(".macCarousel-target.active").removeClass("active");var a;a=$(".carousel-indicators .active").attr("data-slide-to"),console.log(a),$(".macCarousel-target[data-slide-to="+a+"]").addClass("active")}),$(".macCarousel-target").on("click",function(){event.preventDefault(),$("#macCarousel").carousel(parseInt($(this).attr("data-slide-to"))),$(".macCarousel-target.active").removeClass("active"),$(this).addClass("active")})});