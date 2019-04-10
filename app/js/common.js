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
	$('.navbar-item').click(function () {
		if ($(window).width() < 992) {
			$('.menu').click();
		};
	});


	//=========scrolling

	$(window).on('scroll', function () {
		if ($(window).scrollTop()) {
			$('header').addClass('black-header'), 2000;
		} else {
			$('header').removeClass('black-header');
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

(function () {
	'use strict';
	window.addEventListener('load', function () {
		// Fetch all the forms we want to apply custom Bootstrap validation styles to
		var forms = document.getElementsByClassName('needs-validation');
		// Loop over them and prevent submission
		var validation = Array.prototype.filter.call(forms, function (form) {
			form.addEventListener('submit', function (event) {
				if (form.checkValidity() === false) {
					event.preventDefault();
					event.stopPropagation();
				}
				form.classList.add('was-validated');
			}, false);
		});
	}, false);
})();

