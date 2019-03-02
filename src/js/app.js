$(document).on('click', '.mobile_nav_toggle', function(){
    $(this).toggleClass('active');
    $(this).next('.mobile_nav').slideToggle(400); 
})

$(document).on('click', '.user_toggle', function(){
    $(this).toggleClass('active');
    $(this).next('.user_btns').slideToggle(400); 
})

$(document).on('click', '.tabs_nav-link', function(e){
    e.preventDefault();
    var tabId = $(this).attr('href');
    $(this).addClass('active');
    $(this).parent('li').siblings().find('.tabs_nav-link').removeClass('active');
    $(tabId).show(400);
    $(tabId).siblings('.tabs_tab').hide(400);
});

$(document).on('click', '.pr-details-tabs-link', function(e){
    e.preventDefault();
    var tabId = $(this).attr('href');
    $(this).addClass('prtabs-active');
    $(this).parent('li').siblings().find('.pr-details-tabs-link').removeClass('prtabs-active');
    $(tabId).show(400);
    $(tabId).siblings('.pr-details-tabs-tab').hide(400);
});



$(document).ready(function() {

    if($('.js_collapse').length > 0) {

        if($(window).width() < 768) {
            $(document).on('click','.js_collapse', function(){
                $(this).toggleClass('active');
                $(this).next('.footer_col-main').slideToggle(400);
                $(this).parrents('.flex_col').siblings().find('.footer_col-main').slideUp(400);
            });
        }
    }
    
    if($('.js_collapse-sidebar').length > 0) {
    
        if($(window).width() < 768) {
            $(document).on('click','.js_collapse-sidebar', function(){
                $(this).toggleClass('active-sidebar');
                $(this).next('.sidebar_content').slideToggle(400);
                $(this).parrents('.sidebar').siblings().find('.sidebar_content').slideUp(400);
            });
        }
    }

    $('.js_tools-opener').on('click', function(){
        $(this).toggleClass('opened');   
        $(this).next('.header_tools').slideToggle(400);
    })

    if($('.product_carousel').length > 0) {
        $('.product_carousel').slick({
            dots: true,
            infinite: true,
            autoplay: true,
            slidesToShow: 4,
            arrows: false,
        
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        arrows: false
                    }
                }, 
    
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        arrows: false
                    }
                },

                {
                    breakpoint: 1467,
                    settings: {
                        slidesToShow: 3,
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
                type: 'inline',
                closeBtnInside: true
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
            $(this).parent('li').siblings().find('.products_grid-btn').removeClass('grid_active');
            $('.products_grid').removeClass('js_grid-table');
            $('.products_grid').addClass('js_grid-list');
            $('.product_width').removeClass('product_width-table');
            $('.product_width').addClass('product_width-list');
        });
    }

    if($('.js_products-table').length > 0) {
        $('.js_products-table').on('click', function(){
            $(this).toggleClass('grid_active');
            $(this).parent('li').siblings().find('.products_grid-btn').removeClass('grid_active');
            $('.products_grid').removeClass('js_grid-list');
            $('.products_grid').addClass('js_grid-table');
            $('.product_width').removeClass('product_width-list');
            $('.product_width').addClass('product_width-table');
        });
    }


    $('.form_file').on('change', function(){
        var $el = $(this),
            fileName,
            $block = $el.parent().next('.form_file-val');
        if ($el.val().lastIndexOf('\\')) {
          var i = $el.val().lastIndexOf('\\') + 1;
        } else {
          var i = $el.val().lastIndexOf('/') + 1;
        }
        fileName = $el.val().slice(i);
        $block.html(fileName);
    });
});