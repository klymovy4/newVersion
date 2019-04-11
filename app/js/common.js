$(function () {
	//================================slide#=============================
	$('input[type="phone"]').mask('+3 80(99) 99 99 999');
	function topFunction() {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}
	$('a[href^="#"]').click(function (e) {
		e.preventDefault();

		var target = this.hash;
		var $target = $(target);

		$('html, body').animate({
			'scrollTop': $target.offset().top
		}, 1000, 'swing');
	});

	$('.navbar-item').click(function () {
		$(this).addClass('active-li');
		$(this).siblings().removeClass('active-li');
		// $('.menu').click();
	});
	$('.dropdown-item').click(function () {
		$(this).addClass('active-lii');
		$(this).siblings().removeClass('active-lii');
		// $('.menu').click();
	});

	var mobileScrolDown = true;
	$('.dropdown').click(function (event) {
		console.log(event);
		mobileScrolDown = false;
		//event.stopPropagation();
	});
	$('.navbar-item').click(function (event) {
		//if (event.isPropagationStopped()) return;
		if ($(window).width() < 992) {
			if (mobileScrolDown) {
				$('.menu').click();
			}
		};
	});
	$('.dropdown-item').click(function () {
		if ($(window).width() < 992) {
			$('.menu').click();
		}
	});
	var fMenu = false;
	$('.menu').click(function () {
		mobileScrolDown = true;
		if ($(window).width() < 992) {
			fMenu = !fMenu;
			if (fMenu) {
				$('header').addClass('black-header');

			} else {
					$('header').removeClass('black-header');
			}
		} else {
			$('header').removeClass('black-header');
			fMenu = false;
		}
	});

	$('.menu').click(function () {
		if(!fMenu && $(document).scrollTop() > 5){
			$('header').addClass('black-header');
		}
	});



	//=========scrolling

	$(window).on('scroll', function () {
		if ($(window).scrollTop()) {
			$('header').addClass('black-header'), 2000;
		} else {
			if (!fMenu) $('header').removeClass('black-header');
		}
	});



	//-------------read more

	$('.read-more-less').click(function () {
		var elem = $(this).text();
		if (elem == 'Read More') {
			$(this).html('Read less');
			$(this).siblings('.hide-text').slideDown();
		} else {
			$(this).text('Read More');
			$(this).siblings('.hide-text').slideUp();
		}
	});
});

//=============owl-carousel===================

$('.customer-reviews-content .owl-carousel').owlCarousel({
	autoplay: true,
	autoplayTimeout: 6000,
	autoplayHoverPause: true,

	smartSpeed: 500,
	loop: true,
	dots: false,
	// margin: 35,

	responsive: {
		0: {
			items: 1
		},
		600: {
			items: 1
		},
		990: {
			items: 1
		}
	}
});

$('.customer-reviews-images .owl-carousel').owlCarousel({
	autoplay: true,
	loop: true,
	// smartSpeed: 100,
	autoplayTimeout: 5000,
	animateOut: 'fadeOut',
	// animateIn: 'flipOutX',
	responsive: {
		0: {
			items: 1
		},
		600: {
			items: 1
		},
		990: {
			items: 1
		}
	}



});

//==============================toggle show=================================
$(function () {
	$('.showcase-button').click(function () {
		var get_id = this.id;
		var get_current = $('.column .' + get_id);

		$('.blog-item').not(get_current).hide(500);
		get_current.show(500);
	});

	$('#showAll').click(function () {
		$('.blog-item').show(500);

	});
});
//=============================for form
// (function () {
// 	'use strict';
// 	window.addEventListener('load', function () {
// 		// Fetch all the forms we want to apply custom Bootstrap validation styles to
// 		var forms = document.getElementsByClassName('needs-validation');
// 		// Loop over them and prevent submission
// 		var validation = Array.prototype.filter.call(forms, function (form) {
// 			form.addEventListener('submit', function (event) {
// 				if (form.checkValidity() === false) {
// 					event.preventDefault();
// 					event.stopPropagation();
// 				}
// 				form.classList.add('was-validated');
// 			}, false);
// 		});
// 	}, false);
// })();

// $(window).scroll(function() {

//  });

// $(document).ready(function () {
// 	$(window).scroll(function () {
// 		if ($(document).scrollTop() > 50) {
// 			alert(123);
// 		}
// 	});
// });
// $("html , body").animate({ scrollTop: -75 }, 500);