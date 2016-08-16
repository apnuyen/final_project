$(document).ready(function(){

$(window).scroll(function () {
    
    var scrollonscreen = $(window).scrollTop() + $(window).height();
    
    // Scroll to top function
    if(scrollonscreen > $(window).height() + 350){
      $('#top-link').css("bottom", "22px");
    }
    else {
      $('#top-link').css("bottom", "-60px");
    }

});

 // Scroll to top event
$('#top-link').on('click', function(e){
  $('body,html').stop().animate({
    scrollTop:0
  },800,'easeOutCubic')
  return false;
});
});