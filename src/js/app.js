$(document).on('click', '.tabs_nav-link', function(e){
    e.preventDefault();
    var tabId = $(this).attr('href');
    $(this).addClass('active');
    $(this).parent('li').siblings().find('.tabs_nav-link').removeClass('active');
    $(tabId).show(400);
    $(tabId).siblings('.tabs_tab').hide(400);
});


$('.product_carousel').slick({
    dots: true
});

$('.slick-next.slick-next').slick({
    arrows:false
});

$('.slick-prev.slick-arrow').slick({
    arrows:false
});
