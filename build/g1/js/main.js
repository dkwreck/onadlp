window.onload = function() {
  scroll_effect();

  $(window).scroll(function(){
   scroll_effect();
  });

  function scroll_effect(){
   $('#fade').each(function(){
    var elemPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight){
     $(this).addClass('fade-in');
    }
   });
  }
};

$(function(){
	$('[data-modal="overlay-01"], [data-modal="close-01"], [data-modal="content-01"]').hide();
	$('[data-modal="sim-01"]').on('click', function(){
		posi = $(window).scrollTop();
		$('[data-modal="fixed_f"]').css({
			position: 'fixed',
			top: -1 * posi,
			width: '100%'
		});
		$('[data-modal="overlay-01"], [data-modal="close-01"], [data-modal="content-01"]').fadeIn();
	});
	$('[data-modal="close-01"],[data-modal="overlay-01"]').on('click', function(){
		$('[data-modal="fixed_f"]').attr('style', '');
		$('html, body').prop({scrollTop: posi});
		$('[data-modal="overlay-01"], [data-modal="close-01"], [data-modal="content-01"]').fadeOut();
	});
});

$(function(){
	$('[data-modal="overlay-02"], [data-modal="close-02"], [data-modal="content-02"]').hide();
	$('[data-modal="sim-02"]').on('click', function(){
		posi = $(window).scrollTop();
		$('[data-modal="fixed_f"]').css({
			position: 'fixed',
			top: -1 * posi,
			width: '100%'
		});
		$('[data-modal="overlay-02"], [data-modal="close-02"], [data-modal="content-02"]').fadeIn();
	});
	$('[data-modal="close-02"],[data-modal="overlay-02"]').on('click', function(){
		$('[data-modal="fixed_f"]').attr('style', '');
		$('html, body').prop({scrollTop: posi});
		$('[data-modal="overlay-02"], [data-modal="close-02"], [data-modal="content-02"]').fadeOut();
	});
});

$(function(){
	$('[data-modal="overlay-03"], [data-modal="close-03"], [data-modal="content-03"]').hide();
	$('[data-modal="sim-03"]').on('click', function(){
		posi = $(window).scrollTop();
		$('[data-modal="fixed_f"]').css({
			position: 'fixed',
			top: -1 * posi,
			width: '100%'
		});
		$('[data-modal="overlay-03"], [data-modal="close-03"], [data-modal="content-03"]').fadeIn();
	});
	$('[data-modal="close-03"],[data-modal="overlay-03"]').on('click', function(){
		$('[data-modal="fixed_f"]').attr('style', '');
		$('html, body').prop({scrollTop: posi});
		$('[data-modal="overlay-03"], [data-modal="close-03"], [data-modal="content-03"]').fadeOut();
	});
});

$(function(){
	$('[data-modal="overlay-04"], [data-modal="close-04"], [data-modal="content-04"]').hide();
	$('[data-modal="sim-04"]').on('click', function(){
		posi = $(window).scrollTop();
		$('[data-modal="fixed_f"]').css({
			position: 'fixed',
			top: -1 * posi,
			width: '100%'
		});
		$('[data-modal="overlay-04"], [data-modal="close-04"], [data-modal="content-04"]').fadeIn();
	});
	$('[data-modal="close-04"],[data-modal="overlay-04"]').on('click', function(){
		$('[data-modal="fixed_f"]').attr('style', '');
		$('html, body').prop({scrollTop: posi});
		$('[data-modal="overlay-04"], [data-modal="close-04"], [data-modal="content-04"]').fadeOut();
	});
});

$(function(){
	$('[data-modal="overlay-05"], [data-modal="close-05"], [data-modal="content-05"]').hide();
	$('[data-modal="sim-05"]').on('click', function(){
		posi = $(window).scrollTop();
		$('[data-modal="fixed_f"]').css({
			position: 'fixed',
			top: -1 * posi,
			width: '100%'
		});
		$('[data-modal="overlay-05"], [data-modal="close-05"], [data-modal="content-05"]').fadeIn();
	});
	$('[data-modal="close-05"],[data-modal="overlay-05"]').on('click', function(){
		$('[data-modal="fixed_f"]').attr('style', '');
		$('html, body').prop({scrollTop: posi});
		$('[data-modal="overlay-05"], [data-modal="close-05"], [data-modal="content-05"]').fadeOut();
	});
});

$(function(){
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
});

$(document).ready(function(){
	$('.slider').slick({
		prevArrow: '<span class="prev-arrow"><img src="img/arrow-p.png" alt="←"></span>',
		nextArrow: '<span class="next-arrow"><img src="img/arrow-n.png" alt="→"></span>',
		dots: true,
		centerMode: true,
		centerPadding: '8.33%',
	});
});

$(function(){
	$('.tab_box-a .tab_btn').click(function() {
		var index = $('.tab_box-a .tab_btn').index(this);
		$('.tab_box-a .tab_btn, .tab_box-a .tab_panel').removeClass('active');
		$(this).addClass('active');
		$('.tab_box-a .tab_panel').eq(index).addClass('active');
	});
});

$(function(){
	$('.tab_box-b .tab_btn').click(function() {
		var index = $('.tab_box-b .tab_btn').index(this);
		$('.tab_box-b .tab_btn, .tab_box-b .tab_panel').removeClass('active');
		$(this).addClass('active');
		$('.tab_box-b .tab_panel').eq(index).addClass('active');
	});
});

$(function(){
	$('.tab_box-c .tab_btn').click(function() {
		var index = $('.tab_box-c .tab_btn').index(this);
		$('.tab_box-c .tab_btn, .tab_box-c .tab_panel').removeClass('active');
		$(this).addClass('active');
		$('.tab_box-c .tab_panel').eq(index).addClass('active');
	});
});

$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 320;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});
