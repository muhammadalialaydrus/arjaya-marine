(function($){

	$('.certificate').lightGallery({
		thumbnail: true,
		animateThumb: true,
		showThumbByDefault: false,
		exThumbImage: 'data-exthumbimage',
		selector: '.selector',
		download: false,
	});

	$('.awards').lightGallery({
		thumbnail: true,
		animateThumb: true,
		showThumbByDefault: false,
		exThumbImage: 'data-exthumbimage',
		selector: '.selector',
		download: false,
	});

	$('.gallery').lightGallery({
		thumbnail: true,
		animateThumb: true,
		showThumbByDefault: false,
		selector: '.selector',
		download: false,
	});

	$('.product .product-area').lightGallery({
		thumbnail: true,
		animateThumb: true,
		showThumbByDefault: false,
		selector: '.selector',
		exThumbImage: 'data-exthumbimage',
		download: false,
	});

	$('.facility-detail .image-area').lightGallery({
		thumbnail: true,
		animateThumb: true,
		showThumbByDefault: false,
		selector: '.selector',
		exThumbImage: 'data-exthumbimage',
		download: false,
	});

	$('.article-news-detail').lightGallery({
		thumbnail: true,
		animateThumb: true,
		showThumbByDefault: false,
		selector: '.selector',
		exThumbImage: 'data-exthumbimage',
		download: false,
	});



	// SLIDER
	$('.project-slider .project-area').slick({
		centerMode: true,
		centerPadding: '20%',
		slidesToShow: 1,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnFocus: false,
		pauseOnHover: false,
		arrows: false,
		dots: false,
		asNavFor: '.project-slider .project-nav .wrapper',
		responsive: [
			{
				breakpoint: 1500,
				settings: {
					centerPadding: '15%',
				}
			},
			{
				breakpoint: 770,
				settings: {
					centerPadding: '10%',
				}
			},
			{
				breakpoint: 480,
				settings: {
					centerMode: false,
				}
			}
		]
	});

	$('.project-slider .project-nav .wrapper').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.project-slider .project-area',
		arrows: false,
		dots: false,
		adaptiveHeight: true,
		focusOnSelect: true,
		infinite: true,
		centerMode: true,
		centerPadding: '60px',
		responsive: [
			{
				breakpoint: 770,
				settings: {
					centerPadding: '40px',
				}
			},
			{
				breakpoint: 480,
				settings: {
					centerPadding: '20px',
				}
			}
		]
	});

	$('.product-thumbnails .image-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		autoplay: true,
		autoplaySpeed: 5000,
		adaptiveHeight: false,
		focusOnSelect: true,
		infinite: true,
		fade: true,
		cssEase: 'linear',
	});

	$('.facility-thumbnails .image-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		autoplay: true,
		autoplaySpeed: 5000,
		adaptiveHeight: false,
		focusOnSelect: true,
		infinite: true,
		fade: true,
		cssEase: 'linear',
	});

	$('#cover-content').slick({
		slidesToShow: 1,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnFocus: false,
		pauseOnHover: false,
		arrows: false,
		prevArrow: '<button class="button-arrow prev-arrow"><span class="slide-arrow" data-aos="fade-right" data-aos-delay="900"></span></button>',
		nextArrow: '<button class="button-arrow next-arrow"><span class="slide-arrow" data-aos="fade-left" data-aos-delay="900"></span></button>',	
		dots: true,
	});

	$('.logo-slider.partner-slider .slider-row').slick({
		centerMode: false,
		centerPadding: '20%',
		slidesToShow: 7,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnFocus: false,
		pauseOnHover: false,
		arrows: false,
		dots: true,
		responsive: [
			{
				breakpoint: 1500,
				settings: {
					centerMode: false,
					centerPadding: '15%',
					slidesToShow: 6,
				}
			},
			{
				breakpoint: 770,
				settings: {
					centerMode: false,
					centerPadding: '10%',
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 480,
				settings: {
					centerMode: true,
					slidesToShow: 1,
				}
			}
		]
	});

	$('.logo-slider.client-slider .slider-row').slick({
		centerMode: false,
		centerPadding: '20%',
		slidesToShow: 7,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnFocus: false,
		pauseOnHover: false,
		arrows: false,
		dots: true,
		responsive: [
			{
				breakpoint: 1500,
				settings: {
					centerMode: false,
					centerPadding: '15%',
					slidesToShow: 6,
				}
			},
			{
				breakpoint: 770,
				settings: {
					centerMode: false,
					centerPadding: '10%',
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 480,
				settings: {
					centerMode: true,
					slidesToShow: 1,
				}
			}
		]
	});

	$('.article-slider .article-section .slider-area').slick({
		centerMode: false,
		centerPadding: '20%',
		slidesToShow: 6,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnFocus: false,
		pauseOnHover: false,
		arrows: false,
		dots: true,
		responsive: [
			{
				breakpoint: 1500,
				settings: {
					centerMode: false,
					centerPadding: '15%',
					slidesToShow: 5,
				}
			},
			{
				breakpoint: 1190,
				settings: {
					centerMode: false,
					centerPadding: '15%',
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 770,
				settings: {
					centerMode: true,
					centerPadding: '10%',
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 480,
				settings: {
					centerMode: true,
					slidesToShow: 1,
				}
			}
		]
	});


})(jQuery);