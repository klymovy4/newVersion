$(document).ready(function(){

	$('.logIn').click(function(){
		$('.modal-log').show();
	});

	$('.owl-carousel').owlCarousel( {
		navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
		smartSpeed: 700,
		loop: true,
		// dots: false,
		margin: 20,
		responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        // 990:{
        //     items:5
		// }
	  }
  });
	
	$('.userinput').focus (function () {
    $(this).parent().addClass('focus');
    }).blur (function(){
      if($(this).val() ===''){
        $(this).parent().removeClass('focus');
      }
	});
		
  //-------------------------------------------add coment
  $('#addComent').click(function(){
  $('.comentContent').slideToggle(750);
  });

  //======================================flip====================================

  $('#flip-1').click(function(){
	  $(this).find('.flip-box-inner').toggleClass('active2')
	  $(this).find('.flip-box-back').css({'transform' : 'rotateX(180deg)'});
  });
  $('#flip-2').click(function(){
	  $(this).find('.flip-box-inner').toggleClass('active')
  });
  $('#flip-3').click(function(){
	  $(this).find('.flip-box-inner').toggleClass('active2')
	  $(this).find('.flip-box-back').css({'transform' : 'rotateX(180deg)'});
  });
  $('#flip-4').click(function(){
	  $(this).find('.flip-box-inner').toggleClass('active')
  });
  $('#flip-5').click(function(){
	  $(this).find('.flip-box-inner').toggleClass('active2')
	  $(this).find('.flip-box-back').css({'transform' : 'rotateX(180deg)'});
  });
  $('#flip-6').click(function(){
	  $(this).find('.flip-box-inner').toggleClass('active')
  });
  $('#flip-7').click(function(){
	  $(this).find('.flip-box-inner').toggleClass('active2')
	  $(this).find('.flip-box-back').css({'transform' : 'rotateX(180deg)'});
  });
  $('#flip-8').click(function(){
	  $(this).find('.flip-box-inner').toggleClass('active')
  });
  $('#flip-9').click(function(){
	  $(this).find('.flip-box-inner').toggleClass('active2')
	  $(this).find('.flip-box-back').css({'transform' : 'rotateX(180deg)'});
  });
	
//================================slide#=============================

	function topFunction(){
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}
	$('a[href^="#"]').click(function(e){
		e.preventDefault();
	
		var target = this.hash;
		var $target = $(target);
	
		$('html, body').animate({
			'scrollTop':$target.offset().top
		}, 1000, 'swing');
	});
	
//==============================toggle show=================================

$('.toggles button').click(function(){
  var get_id = this.id;
  var get_current = $('.blog-home .' + get_id);

  $('.blog-item').not(get_current).hide(500);
  get_current.show(500);
});

$('#showAll').click(function(){
    $('.blog-item').show(500);
});

//=================================modal Images====================

	$('.close').click(function(){
		$('.modal').hide();
		$('.modal-log').hide();//==========log
	});

	$('.myImg').click(function(){
		$('.modal-content').attr('src',this.src);
		$('#caption').html(this.alt);
		$('.modal').show();
	});

	$('#myModal').click(function(){
		$('.modal').hide();
	});

	$('.cancelbtn').click(function(){
		$('.modal-log').hide();
	});



//LogIn=========================================================================


//content card-----------------------------------------------------------------
$('.blog-item-content').click(function(){
	$(this).siblings('.content-card').slideToggle('slow');
	// $(this).siblings(span).hide();
});
$('.content-card').click(function(){
	$(this).slideToggle('slow');
});

//hamburger=================================================================
$('.hamburger').click(function(){
	$('.header-buttons').slideToggle(100, function(){
		if($(this).css('display') === 'none'){
			$(this).removeAttr('style');
		}
	});
});

});






