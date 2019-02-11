$(document).on('click', '.tabs_nav-link', function(e){
    e.preventDefault();
    var tabId = $(this).attr('href');
    $(this).addClass('active');
    $(this).parent('li').siblings().find('.tabs_nav-link').removeClass('active');
    $(tabId).show(400);
    $(tabId).siblings('.tabs_tab').hide(400);
});

if($('.product_carousel').length > 0) {
$('.product_carousel').slick({
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 4,
    arrows: false,
   
    responsive: [
        {
            breakpoint: 375,
            settings: {
                slidesToShow: 1,
                arrows: false
            }
        }, 

        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                arrows: false
            }
        }
    ]

});

}

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


$(document).ready(function() {
if($('.js_login-popup').length > 0) {
    $('.js_login-popup').magnificPopup({
        items: {
            src: '#popup',
            type: 'inline'
            }
        });
    }

if($('.js_range').length > 0) {
    $('.js_range').ionRangeSlider({
            skin: "round",
            type: "double",
            min: 0,
            max: 1000,
            to: 600,
            prefix: "$",
            hide_min_max: true
        });
    }

    if($('.js_products-table').length > 0){
        $('.js_products-list').on('click', function(){
            $(this).toggleClass('grid_active');
            $(this).parent().siblings().child('.products_grid-btn').removeClass('.grid_active');
            $('.products_grid').removeClass('js_grid-table');
            $('.products_grid').addClass('js_grid-list');
        })
    }

    if($('.js_products-list').length > 0){
        $('.js_products-table').on('click', function(){
            $(this).toggleClass('grid_active');
            $(this).parent().siblings().child('.products_grid-btn').removeClass('.grid_active');
            $('.products_grid').removeClass('js_grid-list');
            $('.products_grid').addClass('js_grid-table');
        })
    }
});