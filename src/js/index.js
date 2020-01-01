// Main js file

$(function () {

  // Initialize sliders
  $('.carousel__wrap').slick({
    dots: true,
    dotsClass: 'carousel__dots',
    arrows: false
  });


  // Scaling image
  $('.tile__img').click(function() {

    var img = $(this);
    var src = img.attr('src');

    $('.popup').append('<div class="popup__bg"></div>'
      +'<img src="'+ src + '" class="popup__img" />'
      +'</div>');

    $('.popup').fadeIn(800);

    $('.popup__bg').click(function() { 
      $('.popup').fadeOut(800);
      
      setTimeout(function() {
        $('.popup__bg, .popup__img').remove();
      }, 800);
    });
  });

  
  // Show - hide tile back
  $('.tile__open').click(function() {
    $(this).closest('.tile').find('.tile__back').addClass('tile__back--shown');
  });

  $('.tile__close').click(function() {
    $(this).closest('.tile__back').removeClass('tile__back--shown');
  });

});