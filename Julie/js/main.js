/* ---Swiper ---*/
$(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      direction: 'vertical',
      loop: true,
      speed: 400,
      spaceBetween: 100,
      autoplay: {
    delay: 4000,
    },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        bulletClass: 'swiper-pagination-bullet'
      },
    })
  });
/* --- Fade ---*/
  $(document).ready(function(){

    // hide our element on page load
    $('#scroll01').css('opacity', 0);

    $('#scroll01').waypoint(function() {
        $('#scroll01').addClass('fadeInLeft');
    }, { offset: '80%' });

  });
  $(document).ready(function(){

    // hide our element on page load
    $('#scroll02').css('opacity', 0);

    $('#scroll02').waypoint(function() {
        $('#scroll02').addClass('fadeInUp');
    }, { offset: '80%' });

  });
  $(document).ready(function(){

    // hide our element on page load
    $('#scroll03').css('opacity', 0);

    $('#scroll03').waypoint(function() {
        $('#scroll03').addClass('fadeInRight');
    }, { offset: '80%' });

  });
  $(document).ready(function(){

    // hide our element on page load
    $('#scroll04').css('opacity', 0);

    $('#scroll04').waypoint(function() {
        $('#scroll04').addClass('fadeInLeft');
    }, { offset: '90%' });

  });
  $(document).ready(function(){

    // hide our element on page load
    $('#scroll05').css('opacity', 0);

    $('#scroll05').waypoint(function() {
        $('#scroll05').addClass('fadeInUp');
    }, { offset: '90%' });

  });
  $(document).ready(function(){

    // hide our element on page load
    $('#scroll06').css('opacity', 0);

    $('#scroll06').waypoint(function() {
        $('#scroll06').addClass('fadeIn');
    }, { offset: '70%' });

  });
  $(document).ready(function(){

    // hide our element on page load
    $('#scroll07').css('opacity', 0);

    $('#scroll07').waypoint(function() {
        $('#scroll07').addClass('fadeIn');
    }, { offset: '70%' });

  });
  $(document).ready(function(){

    // hide our element on page load
    $('#scroll08').css('opacity', 0);

    $('#scroll08').waypoint(function() {
        $('#scroll08').addClass('fadeIn');
    }, { offset: '70%' });

  });
  $(document).ready(function(){

    // hide our element on page load
    $('#scroll09').css('opacity', 0);

    $('#scroll09').waypoint(function() {
        $('#scroll09').addClass('fadeIn');
    }, { offset: '70%' });

  });
  $(document).ready(function(){

    // hide our element on page load
    $('#scroll10').css('opacity', 0);

    $('#scroll10').waypoint(function() {
        $('#scroll10').addClass('fadeIn');
    }, { offset: '70%' });

  });
  $(document).ready(function(){

    // hide our element on page load
    $('#scroll11').css('opacity', 0);

    $('#scroll11').waypoint(function() {
        $('#scroll11').addClass('fadeIn');
    }, { offset: '70%' });

  });
  $(document).ready(function(){

    // hide our element on page load
    $('#scroll12').css('opacity', 0);

    $('#scroll12').waypoint(function() {
        $('#scroll12').addClass('fadeIn');
    }, { offset: '70%' });

  });
  $(document).ready(function(){

    // hide our element on page load
    $('#scroll13').css('opacity', 0);

    $('#scroll13').waypoint(function() {
        $('#scroll13').addClass('fadeIn');
    }, { offset: '70%' });

  });
  $(document).ready(function(){

    // hide our element on page load
    $('#scroll14').css('opacity', 0);

    $('#scroll14').waypoint(function() {
        $('#scroll14').addClass('fadeIn');
    }, { offset: '70%' });

  });

/* --- Smooth Scroll --- */
  jQuery(document).ready(function($) {

   $('.smoothscroll').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 800, 'swing', function () {
	        window.location.hash = target;
	    });
	});

});
/* --- Nav --- */
$(window).scroll(function() {

    if ($(window).scrollTop() > 500) {
        $('.main_nav').addClass('sticky');
    } else {
        $('.main_nav').removeClass('sticky');
    }
});
