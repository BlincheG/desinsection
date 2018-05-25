
//  *
 // * First we will load all of this project's JavaScript dependencies which
 // * includes Vue and other libraries. It is a great starting point when
 // * building robust, powerful web applications using Vue and Laravel.

require('./bootstrap');
require('./vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 */
 
require('jquery-mask-plugin');

window.WOW = require('wowjs/dist/wow.js');

new window.WOW.WOW().init();

 /*
 * Form handler
 */

$('#contact_us')
    .on('submit', function(e)
    {
        e.preventDefault();

        var form = $(this).parent();

        var data = $(this).serialize(),
            href = $(this).attr('action');

        /* */
        var overlay = $(form).find('.form-overlay')

        /* */
        $(overlay).show();

        /* clear all dom errors */
        $(form)
            .find('span.error')
            .remove();

        /* */
        $.post(href, data, function(response) {
            $(overlay).hide();

            if (response.status) {
                return $('.congrats-trigger').trigger('click');
            }

            /* show errors */
            for (var keyInput in response.errors) {
                if (typeof response.errors[keyInput] !== 'object') {
                    continue;
                }

                /* get first */
                var errorText = response.errors[keyInput][0];

                /* find input */
                var domInput = $(form).find('input[name='+ keyInput +']');

                /* insertafter */
                $('<span class="error">'+ errorText +'</span>')
                    .insertAfter(domInput);
            }
        });
    });


$(document).ready(function(){
    $('.sliders').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        mobileFirst:true,
        responsive: [
            {
            breakpoint: 1527,
            settings: {
                slidesToShow: 3,
                variableWidth: false
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    centerMode: true,
                    variableWidth: false
                }
            },
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 330,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.sliderss').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        mobileFirst:true,
        dots: true,
        responsive: [
            {
            breakpoint: 1527,
            settings: {
                slidesToShow: 3,
                variableWidth: false
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    centerMode: true,
                    variableWidth: false
                }
            },
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 330,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});


(function($)
{
    $('.header-menu').on('click', function() {
        $('.menu-modal-trigger').trigger('click');
    });

})(jQuery);

$(window).scroll(function() {
    $('.section-description').each(function(){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+400) {
            $(this).addClass("slideUp");
        }
    });
});

$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });

});
