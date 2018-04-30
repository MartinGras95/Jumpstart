/* Using slick for carousel effect */

$(document).ready(function() {
  $('.carousel').slick({
    arrows:false,
    autoplay:true,
    autoplayspeed:4000,
    fade:false,
    draggable:false,
    pauseOnFocus:false,
    pauseOnHover:false

  });
});


/* Hiding the nav bar when scrolling down */

var lastScrollTop = 0;

$(window).scroll(function(){
  var scrollTop = $(this).scrollTop();
  if (scrollTop - lastScrollTop > 50){
    var navHeight = $('.navbar').css('height');
    $('.navbar').animate({top: '-' + navHeight}, 150);
    lastScrollTop = scrollTop;
  } else if (lastScrollTop - scrollTop > 50) {
    $('.navbar').animate({top: '0px'}, 150);
    lastScrollTop = scrollTop;
  }
});
