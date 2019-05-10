;(function($){
	"use strict";

	$(function(){
		$('.geka-news__slider').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			dots: true,
			autoplay: true,
			autoplaySpeed: 4000,
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
			]
		});
	})
})(jQuery);