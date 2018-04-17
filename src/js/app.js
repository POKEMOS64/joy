var instance = M.Carousel.init({
  fullWidth: true
});
// Or with jQuery

$('.carousel.carousel-slider').carousel({
  fullWidth: true,
  
});
$(".dropdown-trigger").dropdown();

$(document).ready(function(){
  $('.carousel').carousel();
});

$(function(){
  if($(window).width() < 960) {
    $('.hide-on-med-and-down').addClass("sidenav");
    $('.hide-on-med-and-down').removeClass("right hide-on-med-and-down");
    $('.sidenav-close').css('display','block');
    $('.sidenav').sidenav();

  } else {
    // change functionality for larger screens
  }
});
$(document).ready(function(){
  $('.collapsible').collapsible();
  $('.tabs').tabs();
});
function initMap() {
  var myLatLng = {lat: 55.859102, lng: 37.474239};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'ЖКХ'
  });
}
$("[data-porfolio]").fancybox({
  margin : [44,0,22,0],
    thumbs : {
      autoStart : true
    }
});
