$(document).ready(function () {
    $('.sidebar').css('left', '0');
    $('.content').css('margin-left', '250px');
  
    $('.sidebar ul li a').on('click', function (event) {
      var target = $(this.getAttribute('href'));
      if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
          scrollTop: target.offset().top
        }, 1000);
      }
    });
});