
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
});

$(document).ready(function(){

  $('.navicon').click(function(e){
    $(this).next().slideToggle(500);
  });

});