$(document).on('click', '.tabs_nav-link', function(e){
    e.preventDefault();
    var tabId = $(this).attr('href');
    $(this).addClass('active');
    $(this).parent('li').siblings().find('.tabs_nav-link').removeClass('active');
    $(tabId).show(400);
    $(tabId).siblings('.tabs_tab').hide(400);
});


$('.product_carousel').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    skidesToshow: 4

    // responsive: [
    //     {
    //         breakpoint: 375,
    //         settings: {
    //             slidesToshow: 1
    //         }
    //     }
    // ]

});

$('.slick-next.slick-next').slick({
    arrows:false
});

$('.slick-prev.slick-arrow').slick({
    arrows:false
});

$(document).ready(function() {
    $('.js_login-popup').magnificPopup({
        items: {
            src: '#popup',
            type: 'inline'
        }
    });
});

$(document).on('click','.js_collapse', function(){
    $(this).toggleClass('active');
    $(this).next('.footer_col-main').slideToggle(400);
    $(this).parrents('.flex_col').siblings().find('.footer_col-main').slideUp(400);
});