$(document).on('click', '.mobile_nav_toggle', function(){
    $(this).toggleClass('active');
    $(this).next('.mobile_nav').slideToggle(400); 
})

$(document).on('click', '.tabs_nav-link', function(e){
    e.preventDefault();
    var tabId = $(this).attr('href');
    $(this).addClass('active');
    $(this).parent('li').siblings().find('.tabs_nav-link').removeClass('active');
    $(tabId).show(400);
    $(tabId).siblings('.tabs_tab').hide(400);
});




if($('.js_collapse').length > 0) {
    $(document).on('click','.js_collapse', function(){
        $(this).toggleClass('active');
        $(this).next('.footer_col-main').slideToggle(400);
        $(this).parrents('.flex_col').siblings().find('.footer_col-main').slideUp(400);
    });

}

$(document).ready(function() {

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

    if($('.js_login-popup').length > 0) {
        $('.js_login-popup').magnificPopup({
            items: {
                src: '#popup',
                type: 'inline'
            }
        });
    }

    if($('.js-range-slider').length > 0) {
        $('.js-range-slider').ionRangeSlider({
            skin: "round",
            type: "double",
            min: 0,
            max: 1000,
            to: 600,
            prefix: "$",
            hide_min_max:  true
        });
    }

    if($('.js_products-list').length > 0) {
        $('.js_products-list').on('click', function(){
            $(this).toggleClass('grid_active');
            $(this).parrent().siblings().child('.products_grid-btn').removeClass('grid_active');
            $('.products_grid').removeClass('js_grid-table');
            $('.products_grid').addClass('js_grid-list');
        });
    }

    if($('.js_products-table').length > 0) {
        $('.js_products-table').on('click', function(){
            $(this).toggleClass('grid_active');
            $(this).parrent().siblings().child('.products_grid-btn').removeClass('grid_active');
            $('.products_grid').removeClass('js_grid-list');
            $('.products_grid').addClass('js_grid-table');
        });
    }
});