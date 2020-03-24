
jQuery(document).ready(function(){
    $('.toggles button').click(function(){
        var get_id = this.id;
        var get_current = $('.posts .' + get_id);

        $('.post').not(get_current).hide(500);
        get_current.show(500);
    });
    
    $('#showAll').click(function(){
        $('.post').show(500);
    });
// ==================================carousel
    $(".owl-carousel").owlCarousel({
        items:8

    });
    $('.owl-next').click(function(){
    $('.owl-carousel').trigger('next.owl.carousel');
    })
    $('.owl-prev').click(function(){
    $('.owl-carousel').trigger('prev.owl.carousel');

  
    if($(window).width() < 420){
        $(".owl-carousel").owlCarousel({
            items:3
        });
    }
})
// modal==============================================================================

$('.close').click(function(){
    $('.modal').hide();
    $('.modal-log').hide();
})
$('.cancelbtn').click(function(){
    $('.modal-log').hide();
})
// $('.modal-content-logIn').click(function(){
//     $(this).hide();
//     $('.modal').hide();
// })
$('img').click(function(){
    $('.modal-content').attr('src',this.src);
    $('#caption').html(this.alt);
    $('.modal').show();
})
 $('#logIn').click(function(){
    $('.modal-log').show();
//     $('.modal-content-logIn').show();
})
$('.modal').click(function(){
    $(this).hide();
    // $('.modal-content-logIn').hide();
})
});
//  эта срань не отрабатывает ================================================!!!!!!!!

// $(".owl-carousel").owlCarousel({
//     nav: true
// });

//====================btnScrollTop========================================================

window.onscroll = function(){
    scrollFunction()
}

// function scrollFunction(){
//     if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
//         document.getElementById('btnTop').style.display = 'block';
//     } else{
//         document.getElementById('btnTop').style.display = 'none';
//     }
// }
function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
$('a[href^="#"]').click(function(e){
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

   /* $('html, body').animate({
        'scrollTop':$target.offset().top
    }, 1000, 'swing', function(){
        window.location.hash = target;
    })*/
    //  second   sposob===============================

    $('html, body').animate({
        'scrollTop':$target.offset().top
    }, 1000, 'swing');
})
  //===================fixedHeader==================================
$(window).on('scroll', function(){
    if($(window).scrollTop()){
        $('header').addClass('black');
    }else{
        $('header').removeClass('black');
    }
})