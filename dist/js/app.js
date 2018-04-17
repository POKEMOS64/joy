var instance = M.Carousel.init({
  fullWidth: true
});
// Or with jQuery

$('.carousel.carousel-slider').carousel({
  fullWidth: true,
  
});
$(".dropdown-trigger").dropdown();



$(function(){
  if($(window).width() < 767) {
    $('.hide-on-med-and-down').addClass("sidenav");
    $('.hide-on-med-and-down').removeClass("right hide-on-med-and-down");
    $('.sidenav-close').css('display','block');
    $('.sidenav').sidenav();

  } else {
    // change functionality for larger screens
  }
});
