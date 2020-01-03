// Main js file

$(function () {

  // Initialize sliders
  $('.carousel__wrap-1').slick({
    dots: true,
    dotsClass: 'carousel__dots',
    arrows: false,
    autoplay: true,
    autoplaySpeed: 7000
  });
  
  $('.carousel__wrap-2').slick({
    arrows: false,
    asNavFor: '.carousel__wrap-3',
    dots: true,
    dotsClass: 'carousel__dots',

    responsive: [{
      breakpoint: 576,
      settings: {
        autoplay: true,
        autoplaySpeed: 7000
      }
    }]
  });
  
  $('.carousel__wrap-3').slick({
    arrows: true,
    appendArrows: $('.carousel__arrows'),
    nextArrow: $('#arrNext-1'),
    prevArrow: $('#arrPrev-1'),
    asNavFor: '.carousel__wrap-2',
    cssEase: 'linear',
    speed: 500,
    fade: true,

    responsive: [{
      breakpoint: 575.98,
      settings: {
        arrows: false
      }
    }]
  });

  if ($( window ).width() < 576) {
    $('.row--carousel-xs').slick({
      dots: true,
      dotsClass: 'carousel__dots',
      arrows: false,
      autoplay: true,
      autoplaySpeed: 7000
    });
  }


  // Scaling image
  if ($( window ).width() > 575.98) {
    
    $('.tile__img').click(function() {
  
      let img = $(this),
          src = img.attr('src');
  
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
  }

  
  // Show - hide tile back
  $('.tile__open, .tile__close').click(function() {
    $(this).closest('.tile')
           .find('.tile__back')
           .toggleClass('tile__back--shown');
  });


  // Initialize Yandex Maps
  ymaps.ready(function () {
    let myMap = new ymaps.Map('map', {
      center: [53.901435, 27.545221],
      zoom: 14
    });
  });
});