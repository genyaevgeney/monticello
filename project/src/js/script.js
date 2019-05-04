;(function($){
	"use strict";

	$(function(){
		$('.geka-news__slider').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			dots: true,
			responsive: [
			{
				breakpoint: 1324,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows: false,
				}
			},
			{
				breakpoint: 780,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
				}
			}
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
			// autoplay: true,
			// autoplaySpeed: 4000,
			// centerMode: true,
			// dots: true,
			// focusOnSelect: true
		});
	})
})(jQuery); 