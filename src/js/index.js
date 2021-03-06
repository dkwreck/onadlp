var utils = require('./utils');
var axios = require('axios');
var _u = require('underscore');

var App = {
    init: function() {
        console.log("Init...");
        // console.log(utils.matchMedia());
        // $(window).on('resize', function(){
        //     console.log(utils.matchMedia());
        // });

        $('.slider').slick({
            prevArrow: '<span class="prev-arrow"><img src="../assets_lp/images/arrow-p.svg" alt="←"></span>',
            nextArrow: '<span class="next-arrow"><img src="../assets_lp/images/arrow-n.svg" alt="→"></span>',
            dots: true,
            centerMode: true,
            centerPadding: '8.33%',
        });

        $("#v2_qa dt").on('click', function(){
          var parent = $(this);
          var child = $(this).next();
          child.slideToggle("fast", function(){
            if (child.is(":visible")) {
              console.log(0);
              parent.addClass('active');
            } else {
              console.log(1);
              parent.removeClass('active');
            }
          });
        });

        $('[data-modal="overlay-what"], [data-modal="close-what"], [data-modal="content-what"]').hide();
        $('[data-modal="what-00"]').on('click', function(){
          posi = $(window).scrollTop();
          $('[data-modal="fixed_f"]').css({
            position: 'fixed',
            top: -1 * posi,
            width: '100%'
          });
          $('[data-modal="overlay-what"], [data-modal="close-what"], [data-modal="content-what"]').fadeIn();
        });
        $('[data-modal="close-what"],[data-modal="overlay-what"]').on('click', function(){
          $('[data-modal="fixed_f"]').attr('style', '');
          $('html, body').prop({scrollTop: posi});
          $('[data-modal="overlay-what"], [data-modal="close-what"], [data-modal="content-what"]').fadeOut();
        });


    }
}
$(function(){
    App.init();
});