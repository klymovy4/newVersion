$(function() {
   
    $('.btn').click(function() {
        $(this).siblings('li').removeClass('active_b'), 5000;
        $(this).addClass('active_b'), 5000;
    });

    $('ul .btn').on('click', function(){
        // alert(123);
        $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });

});