$(document).ready(function () {
 $('.hamburger').on('click touchstart', function (e) {
        $('.hamburger').toggleClass('is-active');
        $('html').toggleClass('menu-active');
        e.preventDefault();
    });

    $(window).bind('scroll', function () {
		if ($(window).scrollTop() > $('.home-banner').height()) {
			$(".bannerMenu_fixo").fadeIn('slow');
		}else if ($(window).scrollTop() < $('.home-banner').height()) {
			$(".bannerMenu_fixo").fadeOut('slow');
        }
        
	});

});

// Refatorar
$.fn.isOnScreen = function(){

    var win = $(window);
    
    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();
    
    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();
    
    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
    
  };
  
    // Refatorar
    $(window).scroll(function() {
      var idSection = $("section").attr('id');
        console.log(idSection);
        if ($('#homeBanner').isOnScreen() == true) {
          //alert("removing orange");
          $('.menu_item').removeClass('active');
          $('.menu_item').removeClass('black');
          $('.menu_item').removeAttr('aria-current');
          $('.menu_item[href^="#homeBanner"').addClass('active');
          $('.menu_item[href^="#homeBanner"').attr('aria-current', 'page');
        }else if ($('#homeSobre').isOnScreen() == true) {
         $('.menu_item').removeClass('active');
         $('.menu_item').removeClass('black');
         $('.menu_item').removeAttr('aria-current');
         $('.menu_item[href^="#homeSobre"').addClass('active');
         $('.menu_item[href^="#homeSobre"').attr('aria-current', 'page');
       } else if ($('#homeHability').isOnScreen() == true) {
         $('.menu_item').removeClass('active');
         $('.menu_item').removeClass('black');
         $('.menu_item').removeAttr('aria-current');
         $('.menu_item[href^="#homeHability"').addClass('active');
         $('.menu_item[href^="#homeHability"').attr('aria-current', 'page');
       } else if ($('#homeProject').isOnScreen() == true) {
         $('.menu_item').removeClass('active');
         $('.menu_item').removeClass('black');
         $('.menu_item').removeAttr('aria-current');
         $('.menu_item[href^="#homeProject"').addClass('active');
         $('.menu_item[href^="#homeProject"').attr('aria-current', 'page');
       } else if ($('#homeProjectAdc').isOnScreen() == true) {
         $('.menu_item').removeClass('active');
         $('.menu_item[href^="#homeProject"').addClass('active');
         $('.menu_item').addClass('black');
       } else if ($('#homeContato').isOnScreen() == true) {
         $('.menu_item').removeClass('active');
         $('.menu_item').removeClass('black');
         $('.menu_item').removeAttr('aria-current');
         $('.menu_item[href^="#homeContato"').addClass('active');
         $('.menu_item[href^="#homeContato"').attr('aria-current', 'page');
       } else {
         console.log("nao chegou");
        }
      
    
    });